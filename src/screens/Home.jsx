import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const containerRef = useRef(null);

  const headingTexts = [
    "From Farm to Your Feast",
    "A Journey of Flavor",
    "Travel the World on a Plate",
    "Every Bite a New Chapter",
  ]

  const cards = [
    { src: "di3.jpg", content: "menu", id: 1 },
    { src: "di4.jpg", content: "some text teal", id: 2 },
    { src: "di8.jpg", content: "some text slate", id: 3 }
  ];

  const cardItemAnimationVariants = {
    hidden: { opacity: 0, x: "-100%" },
    show: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    let interval;
    if (selectedItem === null) {
      interval = setInterval(() => {
        setCurrentHeadingIndex((prev) => (prev + 1) % headingTexts.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [selectedItem]);

  return (
    <div
      id="home"
      className="bg-zinc-900 h-[clamp(600px,100vh,700px)]"
      ref={containerRef}
    >
      <div className="flex h-full w-[min(1700px,100%)] mx-auto relative overflow-hidden">
        <div className="basis-[10%] h-full text-white max-[1200px]:hidden"></div>
        <div style={{backgroundImage: 'url("assets/bg.jpg")'}} className="basis-[55%] max-920:grow bg-slate-500 h-full bg-cover bg-center bg-no-repeat bg-blend-multiply relative">
          <div
            className={`text-white text-center space-y-5 max-[1055px]:space-y-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-[1055px]:-translate-y-[70%] max-500:-translate-y-1/2 ${
              selectedItem && "opacity-0 scale-90"
            } transition-all`}
          >
            <div>
              <AnimatePresence mode="wait">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  key={currentHeadingIndex}
                  className="text-[2.5rem] font-FjallaOne whitespace-nowrap max-500:whitespace-normal"
                >
                  {headingTexts[currentHeadingIndex].toLocaleUpperCase()}
                </motion.h1>
              </AnimatePresence>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="h-16 w-16 mx-auto"
            >
              <path
                d="M38.91 32.48 35.63 36l14.44 13.8c2.83 2.83-1.42 7.07-4.25 4.25L32.5 39.32 17.69 55.11c-2.82 2.82-7.07-1.42-4.24-4.25l16-15-2.24-2.47-2.83 2.83-1.87-2.47L9.68 16.91A12 12 0 0 1 7.37 8L30 30.6l2.51 2.4 3.57-3.35a5 5 0 0 1 0-7.07L48.81 9.85a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.42l-9.9 9.89a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l9.9-9.9a1 1 0 0 1 1.41 0 1 1 0 0 1 .29.7 1 1 0 0 1-.29.71L43.15 24a1 1 0 0 0 .71 1.71 1 1 0 0 0 .7-.29l9.9-9.9a1 1 0 0 1 1.42 0 1 1 0 0 1 .29.71 1 1 0 0 1-.29.7L46 26.82a1 1 0 0 0 0 1.42 1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29l9.9-9.9a1 1 0 0 1 1.42 0A1 1 0 0 1 59 19a1 1 0 0 1-.29.71L46 32.48a5 5 0 0 1-7.09 0Z"
                fill="currentColor"
              ></path>
            </svg>
            <p className="font-Courgette text-xl tracking-widest">
              we create sweet memories
            </p>
          </div>
          <button
            className="absolute bottom-[9%] left-1/2 -translate-x-1/2 animate-pulse cursor-pointer hover:animate-none hover:scale-110 transition-transform max-1200:hidden max-500:block"
            onClick={() =>
              window.scrollTo({
                top: containerRef.current.clientHeight + 8,
                behavior: "smooth",
              })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          {selectedItem && (
            <motion.img
              layoutId={selectedItem}
              className="w-full h-full"
              src={cards.find((card) => card.id === selectedItem)?.src}
            />
          )}
        </div>
        <div className="grow max-920:hidden bg-zinc-900 h-full relative">
          <div className="space-y-5 mt-[22%] ml-[5%]">
            <h1 className="font-bold text-6xl text-white">
              <span className="relative">
                NEW
                <span className="text-xs font-normal border border-[#e5ba61] text-[#e5ba61] px-1 py-[1px] absolute top-7 -right-20">
                  HOT STUFF
                </span>
              </span>
              <br /> BREAKFAST
              <br /> MENU
            </h1>
            <button className="bg-[#e5ba61] text-black rounded font-semibold text-sm px-5 py-3 active:scale-95">
              BOOK A TABLE
            </button>
          </div>
        </div>
        <div className="flex gap-6 absolute bottom-10 max-920:bottom-0 max-[430px]:flex-col max-[430px]:gap-2 max-[430px]:bottom-20 right-7 h-[30%]">
          {cards.map((card, i) => (
            <motion.div
              initial={{ x: "50%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.05 * i,
                duration: 0.5,
              }}
              key={card.id}
              className={`h-full max-920:h-[70%] max-500:hidden bg-black/70 bg-cover bg-no-repeat bg-center bg-blend-multiply p-2 relative cursor-pointer`}
              style={{ aspectRatio: 1, backgroundImage: 'url("assets/bg-card-3.jpg")' }}
            >
              <div className="absolute inset-0 -z-10 backdrop-blur-[2px]"></div>
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.5 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 60 }}
                layoutId={card.id}
                onClick={() => {
                  setSelectedItem(null);
                  setTimeout(() => setSelectedItem(card.id));
                }}
                src={card.src}
                className="w-full h-full"
              />
              <AnimatePresence>
                {selectedItem === card.id && (
                  <div
                    onClick={() => setSelectedItem(null)}
                    className="absolute inset-0 overflow-hidden"
                  >
                    <motion.div
                      variants={{
                        hidden: { transition: { staggerChildren: 0.2 } },
                        show: { transition: { staggerChildren: 0.2 } },
                        exit: { opacity: 0, scale: 1.5, filter: "blur(2rem)" },
                      }}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="h-full w-full text-white flex flex-col justify-center items-center"
                    >
                      <motion.h4
                        className="text-xl max-920:text-lg font-FjallaOne"
                        variants={cardItemAnimationVariants}
                      >
                        FOOD NAME
                      </motion.h4>
                      <motion.p
                        className="font-FjallaOne text-lg"
                        variants={cardItemAnimationVariants}
                      >
                        $79.99
                      </motion.p>
                      <motion.p
                        className="font-Courgette text- leading-5"
                        variants={cardItemAnimationVariants}
                      >
                        some text
                      </motion.p>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <div className="border-b w-1/3 max-[1200px]:w-[20%] max-920:hidden border-white/50 text-white text-4xl font-Courgette absolute bottom-20 left-0 pb-2">
          <span
            className={`ml-[32%] max-[1200px]:ml-[20%] flex items-end text-gray-400 ${selectedItem && "backdrop-blur-lg"} w-fit px-2 rounded-md`}>
            0
            <motion.span
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={selectedItem}
              className="text-white"
            >
              {selectedItem ? selectedItem : 0}
            </motion.span>
            <span className="text-2xl">
              /<span className="ml-[5px]">03</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
