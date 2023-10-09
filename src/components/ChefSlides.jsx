import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect } from "react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

const ChefSlides = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  const slides = [
    {
      href: "assets/chef2.jpg",
      professinal: "Head Chef",
      name: "Heston Blumenthal",
    },
    {
      href: "assets/chef5.jpg",
      professinal: "Sous chef",
      name: "Julia Child",
    },
    {
      href: "assets/chef1.jpg",
      professinal: "Commis Chef",
      name: "Gordon Ramsay",
    },
    {
      href: "assets/chef4.jpg",
      professinal: "Pastry Chef",
      name: "Isabella Cortez",
    },
    {
      href: "assets/chef3.jpg",
      professinal: "Station Chef",
      name: "Jamie Oliver",
    },
  ];

  useEffect(() => {
    const handleWindowResize = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth <= 1181 && currentWidth >= 800) setSlidesPerView(2);
      else if (currentWidth <= 800) setSlidesPerView(1);
      else setSlidesPerView(3);
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div
      className={`absolute w-full h-full ${
        slidesPerView === 1 && "px-20 max-600:px-0"
      }`}
    >
      <Swiper
        slidesPerView={slidesPerView}
        className="w-full h-full"
        loop={false}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="group selection:bg-none">
            <img src={slide.href} className="h-full w-full object-cover" />
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "tween" }}
              className="absolute h-[30%] bottom-0 left-0 right-0 z-10 bg-[#18181b] text-white grid place-content-center text-center"
            >
              <motion.h2
                initial={{ opacity: 0, y: "-10px", scaleY: 0 }}
                whileInView={{ opacity: 1, y: 0, scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ type: "tween", delay: 0.2 }}
                className="font-FjallaOne text-3xl"
              >
                {slide.name}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "tween", delay: 0.3 }}
                className="text-lg text-zinc-500"
              >
                {slide.professinal}
              </motion.p>
            </motion.span>
            <span className="absolute inset-0 bg-black/50 top-[100%] group-hover:top-0 transition-all duration-700 ease-in-out flex justify-center items-start gap-5 pt-32">
              <span className="w-12 h-12 rounded-full backdrop-blur-md hover:opacity-100 opacity-80 transition-all active:scale-95">
                <img src="assets/linkedin.svg" />
              </span>
              <span className="w-12 h-12 rounded-full backdrop-blur-md hover:opacity-100 opacity-80 transition-all bg-black active:scale-95">
                <img src="assets/tiktok.svg" />
              </span>
              <span className="w-12 h-12 rounded-full backdrop-blur-md hover:opacity-100 opacity-80 transition-all active:scale-95">
                <img src="assets/x.svg" />
              </span>
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ChefSlides;
