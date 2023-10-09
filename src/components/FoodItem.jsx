import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { useEffect } from "react";
import { useState, useRef } from "react";

const FoodItem = ({ category, title, titleBg }) => {
  const [backgrounSize, setBackgroundSize] = useState(null);
  const [motionValue, setMotionValue] = useState(0);
  const headingRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) =>
    setMotionValue(Number(value * 200))
  );

  useEffect(() => {
    const handleWindowResize = () => {
      const currentWidth = window.innerWidth;
      setBackgroundSize(currentWidth);
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="text-white text-center pb-20">
      <h1
        ref={headingRef}
        style={{
          backgroundSize: `${backgrounSize + motionValue}px`,
          backgroundImage: `url(${titleBg})`,
        }}
        className={`font-FjallaOne bg-slate-600 bg-blend-multiply bg-center bg-no-repeat text-5xl py-10 relative`}
      >
        <span className="absolute inset-0 backdrop-blur-sm"></span>
        <span className="relative z-10">{title}</span>
      </h1>
      <div className="grid grid-cols-3 max-1200:grid-cols-2 max-600:grid-cols-1 gap-7 py-10 w-[min(1220px,100%-5rem)] mx-auto">
        {category.map((item, i) => (
          <motion.div
            key={i}
            initial={{y: "30%", opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{amount: .3, once: true}}
            transition={{delay: 0.05*i, duration: .4}}
            style={{ aspectRatio: 1 }}
            className="relative rounded-3xl overflow-hidden group"
          >
            <img src={item.img} className="h-full w-full object-cover" />
            <div className="absolute left-0 right-0 bottom-0 h-[30%] group-hover:h-full transition-all duration-500 ease-in-out bg-black/70 text-2xl max-920:text-lg max-600:text-2xl font-FjallaOne grid place-content-center justify-items-center space-y-2 max-920:space-y-0">
              <h4>FOOD NAME</h4>
              <p>$79.99</p>
              <div className="h-0 opacity-0 group-hover:h-[75px] group-hover:opacity-100 duration-500 ease-in-out overflow-hidden transition-all">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={i !== 5 ? "#c59d5f" : "white"}
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke={i !== 5 ? "#c59d5f" : "white"}
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <span className="border border-[#c59d5f] w-16 h-9 rounded-lg grid place-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#c59d5f"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </span>
                  <span className="border border-[#c59d5f] w-16 h-9 rounded-lg grid place-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#c59d5f"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FoodItem;
