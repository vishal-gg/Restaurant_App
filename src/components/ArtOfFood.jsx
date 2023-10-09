import { motion } from "framer-motion";
import { useRef } from "react";

const ArtOfFood = () => {
  const containerDivRef = useRef(null);

  return (
    <div ref={containerDivRef}>
      <div className="flex flex-wrap w-[min(1500px,100%)] mx-auto">
        <div
          style={{ aspectRatio: 1 }}
          className="flex-1 basis-[394px] bg-lime-300 overflow-hidden relative"
        >
          <motion.img
            initial={{ scale: 1.3 }}
            whileInView={{ scale: 1 }}
            viewport={{ amount: 0.35, once: true }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            src="assets/card3.jpg"
            className="h-full w-full object-cover"
            draggable={false}
          />
          <motion.span
            whileInView={{ left: "100%" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ amount: 0.6, once: true }}
            className="absolute inset-0 bg-black z-10 origin-right"
          ></motion.span>
        </div>
        <div
          style={{ aspectRatio: 1 }}
          className="flex-1 basis-[394px] bg-slate-100 bg-blend-overlay bg-[url('assets/artoffood1.jpg')] bg-cover bg-center grid place-content-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "easeInOut" }}
            viewport={{ amount: 0.8, once: true }}
            className="h-full text-center space-y-5"
          >
            <div className="space-y-2">
              <div className="w-[10%] h-[10%] mx-auto">
                <img
                  src="assets/Artemio Lily Stamp.png"
                  className="h-full w-full object-contain"
                  draggable={false}
                />
              </div>
              <h2 className="text-5xl font-FjallaOne">ART OF FOOD</h2>
              <p className="font-Courgette text-lg">Welmcom to Royal</p>
            </div>
            <p className="px-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem, rem perferendis et aperiam quas tempora illo
              doloremque repellendus unde consequatur cupiditate distinctio
              libero fuga minus sed earum quos temporibus reprehenderit?
            </p>
            <button
              onClick={() =>
                window.scrollTo({
                  top:
                    containerDivRef.current.offsetTop +
                    containerDivRef.current.clientHeight,
                  behavior: "smooth",
                })
              }
              className="py-1 font-medium px-2 border-[2px] border-[#c59d5f] hover:bg-[#c59d5f] hover:text-white transition-colors duration-300 rounded-lg active:scale-95"
            >
              continue
            </button>
          </motion.div>
        </div>
        <div
          style={{ aspectRatio: 1 }}
          className="flex-1 basis-[394px] bg-rose-300 overflow-hidden relative"
        >
          <motion.img
            initial={{ scale: 1.3 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            viewport={{ amount: 0.35, once: true }}
            src="assets/card2.jpg"
            className="h-full w-full object-cover"
            draggable={false}
          />
          <motion.span
            whileInView={{ right: "100%" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ amount: 0.6, once: true }}
            className="absolute inset-0 bg-black z-10 origin-left"
          ></motion.span>
        </div>
      </div>
    </div>
  );
};

export default ArtOfFood;
