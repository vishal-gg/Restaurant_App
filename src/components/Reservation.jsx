import {useRef, useState, useEffect} from 'react'
import {useMotionValueEvent, useScroll} from 'framer-motion'

const Reservation = () => {

  const input = [
    {placeholder: "YOUR NAME*" },
    {placeholder: "EMAIL" },
    {placeholder: "OCCASION*" },
    {placeholder: "PREFERRED FOOD*" },
    {placeholder: "BRANCH NAME*" },
    {placeholder: "NUMBER OF PERSON" },
    {placeholder: "PHONE NO." },
    {placeholder: "DATE" }
  ]

  const [backgrounSize, setBackgroundSize] = useState(null);
  const [motionValue, setMotionValue] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
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
  }, [])

  return (
    <div
    style={{
      backgroundSize: `${backgrounSize + motionValue}px`,
      backgroundImage: `url('assets/reservation3.jpg')`,
    }}
    id="reservation"
    ref={containerRef} className="text-white text-center bg-center bg-black/70 bg-blend-multiply py-20 relative">
      <div className="w-[min(1220px,100%-4rem)] mx-auto relative z-10">
        <div className="text-center space-y-3">
            <img
              src="assets/Artemio Lily Stamp.png"
              className="h-12 w-12 object-contain mx-auto"
            />
            <h2 className="font-FjallaOne text-5xl">RESERVATION</h2>
            <p className="font-Courgette text-lg flex justify-center items-center gap-2">
              <span className="h-[1px] w-8 bg-white"></span>
              <span>Book your table</span>
              <span className="h-[1px] w-8 bg-white"></span>
            </p>
          </div>
          <div className="flex gap-5 mt-16 max-920:flex-col">
            <div className="flex-1 grid grid-cols-2 max-[450px]:grid-cols-1 gap-7">
              {
                input.map((placeholder, i) => (
                  <input
                  key={i}
                  type="text" placeholder={placeholder.placeholder}
                  className="border max-920:p-2 border-white focus-visible:border-[#bb955a] bg-transparent outline-none rounded-lg px-3"
                  />
                ))
              }
            </div>
            <div className="flex-1 h-64">
              <textarea placeholder="MESSAGE"
              className="p-3 bg-transparent border border-white focus-visible:border-[#bb955a] outline-none rounded-lg h-full w-full max-920:h-52" />
            </div>
          </div>
          <button className="border border-[#bb955a] text-sm rounded-lg px-5 py-[10px] hover:bg-[#bb955a] transition-colors duration-300 mt-10">BOOK YOUR TABLE</button>
      </div>
      <span style={{backdropFilter: `blur(${20-(motionValue.toFixed()/5)}px)`}} className={`absolute inset-0`}></span>
    </div>
  )
};

export default Reservation;
