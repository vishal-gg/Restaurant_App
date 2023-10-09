import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [hasScroll, sethasScroll] = useState({
    isEscaped: false,
    scrolling: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      let isEscapedVal =
        window.scrollY > document.getElementById("home").clientHeight;
      let scrollingVal = window.scrollY > 20;

      if (
        isEscapedVal !== hasScroll.isEscaped ||
        scrollingVal !== hasScroll.scrolling
      ) {
        sethasScroll({
          isEscaped: isEscapedVal,
          scrolling: scrollingVal,
        });
      } else {
        sethasScroll({
          isEscaped: false,
          scrolling: false,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    { title: "HOME", href: "home", offset: -70 },
    { title: "ABOUT", href: "about", offset: -70 },
    { title: "TEAM", href: "team", offset: 0 },
    { title: "SERVICE", href: "service", offset: -80 },
    { title: "MENU", href: "menu", offset: -220 },
    { title: "RESERVATION", href: "reservation", offset: -10 },
    { title: "CONTACT", href: "contact", offset: -70 }
  ];

  return (
    <div
      className={`${
        hasScroll.scrolling ? "-translate-y-full" : "translate-y-0"
      } ${
        !hasScroll.isEscaped
          ? "-translate-y-full text-white"
          : "translate-y-0 bg-white text-black shadow-md"
      } transition-transform duration-300 fixed z-50 w-full top-0 max-920:backdrop-blur-lg max-920:border-b border-white/10`}
    >
      <nav
        className={`w-[min(1520px,100%-4rem)] font-FjallaOne tracking-wide  mx-auto flex justify-between items-center ${
          hasScroll.isEscaped ? "py-2" : "py-5"
        } max-920:flex-col`}
      >
        <div
          className={`max-920:block hidden absolute left-12 max-500:left-8 max-[400px]:left-5 ${
            hasScroll.isEscaped ? "top-4" : "top-7"
          } cursor-pointer`}
          onClick={() => setToggle((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={`${hasScroll.isEscaped ? "black" : "white"}`}
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                toggle
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              }
            />
          </svg>
        </div>
        <div className="">
          <img
            className={`h-full w-full object-contain selection:bg-none ${
              hasScroll.isEscaped &&
              "invert min-[920px]:h-[80%] min-[920px]:w-[80%]"
            }`}
            src="assets/logo.png"
            alt="logo"
            draggable={false}
          />
        </div>
        <motion.ul
          animate={toggle ? { height: "auto" } : ""}
          className="flex gap-4 overflow-hidden max-920:text-center max-920:flex-col max-920:h-0 nav-ul"
        >
          {tabs.map((tab, i) => (
            <Link
              className={`cursor-pointer hover:text-orange-300 transition-colors max-920:p-1 ${
                tab.title === "HOME" && "max-920:mt-8"
              }`}
              key={i}
              to={tab.href}
              smooth
              offset={tab.offset}
              duration={400}
              onClick={() => setToggle(false)}
            >
              <motion.li
                initial={toggle ? { y: 20, opacity: 0, scale: 0.5 } : null}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ type: "tween", delay: 0.03 * i }}
                key={toggle}
              >
                {tab.title}
              </motion.li>
            </Link>
          ))}
        </motion.ul>
      </nav>
    </div>
  );
}

export default Navbar;
