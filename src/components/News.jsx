import {motion} from 'framer-motion'
import { FaImage, FaVideo } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";

const News = () => {
  const news = [
    {
      img: "assets/event (3).jpg",
      icon: (
        <FaImage className="mx-auto text-5xl opacity-0 group-hover:opacity-100 duration-500 h-0 group-hover:h-8 transition-all" />
      ),
      title: "HAPPY CHRISTMAS",
      date: "25 December 2023",
      event: "Event",
    },
    {
      img: "assets/event (2).jpg",
      icon: (
        <FaVideo className="mx-auto text-5xl opacity-0 group-hover:opacity-100 duration-500 h-0 group-hover:h-8 transition-all" />
      ),
      title: "VALENTINE",
      date: "14 Feburary 2024",
      event: "News",
    },
    {
      img: "assets/event.jpg",
      icon: (
        <HiSpeakerWave className="mx-auto text-5xl opacity-0 group-hover:opacity-100 duration-500 h-0 group-hover:h-8 transition-all" />
      ),
      title: "GLOBAL ORCHESTRA",
      date: "14 March 2023",
      event: "Event",
    },
  ];

  return (
    <div className="pt-20 pb-10">
      <div className="text-center space-y-3 mb-16">
        <img
          src="assets/Artemio Lily Stamp.png"
          className="h-12 w-12 object-contain mx-auto"
        />
        <h2 className="font-FjallaOne text-5xl">LATEST NEWS</h2>
        <p className="font-Courgette text-lg flex justify-center items-center gap-2">
          <span className="h-[1px] w-8 bg-gray-300"></span>
          <span>Stay up to Date</span>
          <span className="h-[1px] w-8 bg-gray-300"></span>
        </p>
      </div>
      <div className="flex max-[1100px]:flex-wrap items-center gap-8 max-[1100px]:gap-10 justify-center w-[min(1220px,100%-4rem)] mx-auto">
        {news.map((event, i) => (
          <motion.div
            initial={{y: "30%", opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{amount: .3, once: true}}
            transition={{delay: 0.05*i, duration: .4}}
            key={i}
            style={{ aspectRatio: 1 }}
            className="w-[370px] relative rounded-xl group"
          >
            <img
              className="h-full w-full object-cover rounded-xl"
              src={event.img}
            />
            <div className="absolute left-0 bottom-0 w-full h-1/3 group-hover:h-full transition-all duration-500 bg-black/50 grid place-content-center text-white">
              <div className="text-center overflow-hidden">
                {event.icon}
                <h5 className="font-FjallaOne text-2xl mt-5 max-920:text-lg">
                  {event.title}
                </h5>
                <p className="font-Courgette text-lg max-920:text-md">
                  {event.event}
                </p>
                <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro, neque.
                </p>
              </div>
            </div>
            <button className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-1/2 py-2 bg-[#c59d5f] rounded-lg text-center text-white hover:shadow-lg hover:scale-[1.01] active:scale-95 transition-all">
              {event.date}
            </button>
          </motion.div>
        ))}
      </div>
      <div className="w-full mt-36">
        <iframe
          title="Google Map"
          width="100%"
          height="450"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20gurugram,%20delhi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/population/">Population mapping</a>
        </iframe>
      </div>
    </div>
  );
};

export default News;
