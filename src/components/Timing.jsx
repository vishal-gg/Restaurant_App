import {motion, useScroll, useMotionValueEvent} from 'framer-motion';
import { useState } from 'react';
import {useRef} from 'react';

const Timing = () => {

  const [motionValue, setMotionValue] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) =>
  setMotionValue(Number(value * 200)))


  const restaurantTiming = [
    { img: "breakfast.png", event: "BREAKFAST", time: "6.00 am 10.00 am" },
    { img: "lunch.png", event: "LUNCH", time: "10.00 am 02.00 am" },
    { img: "dinner.png", event: "DINNER", time: "4.00 pm 12.00 pm" },
    { img: "dessert.png", event: "DESSERT", time: "All Day" },
  ];

  const eventVariants = {
    hidden: {opacity: 0, y: "30%"},
    show: {opacity: 1, y: 0},
    transition: {duration: .4, ease: 'easeInOut'}
  }

  return (
    <>
      <div id="service">
        <div
        style={{ backgroundPositionY: -motionValue, backgroundImage: 'url("assets/timing.jpg")'}}
        ref={containerRef} className="bg-cover bg-center text-white py-28 max-1200:py-20 relative">
          <motion.div
          variants={{hidden: {}, show: {}}}
          initial="hidden"
          whileInView="show"
          transition={{staggerChildren: .1}}
          viewport={{amount: .7, once: true}}
          className="flex justify-center max-1200:flex-wrap gap-8 text-center px-8 z-10 relative">
            {restaurantTiming.map((event) => (
              <motion.div
                variants={eventVariants}
                whileHover={{scale: 1.05}}
                whileTap={{scale: .95}}
                transition="transition"
                key={event.event}
                className="basis-[270px] h-[300px] border-4 rounded-3xl flex justify-center items-center flex-col space-y-3 group"
                >
                <img
                  src={event.img}
                  alt={event.event}
                  className='group-hover:scale-110 transition-transform duration-500'
                />
                <h1 className="text-2xl font-semibold">{event.event}</h1>
                <p>{event.time}</p>
              </motion.div>
            ))}
          </motion.div>
          <span className='absolute inset-0 bg-black/50 backdrop-blur-md'></span>
        </div>
      </div>
    </>
  );
}

export default Timing;
