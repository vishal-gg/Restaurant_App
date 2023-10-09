import { BiLogoFacebook } from "react-icons/bi";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineGoogle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div className="bg-zinc-900 text-white w-full">
        <div className="flex gap-10 items-start py-10 px-16 flex-wrap">
          <div className="flex-grow min-[500px]:min-w-[350px]">
            <h1 className="font-semibold text-2xl uppercase font-serif mb-10">
              our location
            </h1>
            <span className="text-slate-500">Majesty Head Office:</span>
            <p className="mb-8">1422 1st St. Santa Rosat, CA 94559. USA</p>
            <p>
              <span className="text-slate-500">Call for Reservations:</span>{" "}
              (001) 123-4567
            </p>
            <p className="mb-8">
              <span className="text-slate-500">E-mail:</span> admin@e-mail.com
            </p>
            <div className="flex gap-2">
              <p className="text-2xl rounded-full p-2 w-10 bg-gray-600">
                <AiOutlineGoogle />
              </p>
              <p className="text-2xl rounded-full p-2 w-10 bg-gray-600">
                <AiOutlineInstagram />
              </p>
              <p className="text-2xl rounded-full p-2 w-10 bg-gray-600">
                <AiOutlineTwitter />
              </p>
              <p className="text-2xl rounded-full p-2 w-10 bg-gray-600">
                <BiLogoFacebook />
              </p>
            </div>
          </div>
          <div className="flex-grow min-[500px]:min-w-[350px]">
            <h1 className="font-semibold text-2xl uppercase mb-10 font-serif">
              latest post
            </h1>
            <div>
              <div className="flex mb-4 gap-4">
                <div className="h-[60px] w-[84px]">
                  <img
                    className="rounded-xl h-[64px]"
                    src="https://html.miraclestudio.design/majesty/img/post_thumb.jpg"
                    alt="img"
                  />
                </div>

                <div className="top-0">
                  <h3 className="text-lg font-medium">Thai Tanic</h3>
                  <p className="text-sm leading-4 text-slate-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex mb-4 gap-4">
                <div className="h-[60px] w-[84px]">
                  <img
                    className="rounded-xl h-[64px]"
                    src="https://html.miraclestudio.design/majesty/img/post_thumb2.jpg"
                    alt="img"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Thai Tanic</h3>
                  <p className="text-sm leading-4 text-slate-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-[60px] w-[84px]">
                  <img
                    className="rounded-xl  h-[64px]"
                    src="https://html.miraclestudio.design/majesty/img/post_thumb.jpg"
                    alt="img"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-medium">Thai Tanic</h3>
                  <p className="text-sm leading-4 text-slate-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow min-[500px]:min-w-[350px]">
            <h1 className="font-semibold text-2xl uppercase font-serif mb-10">
              opening times
            </h1>
            <div className="flex gap-16 max-[400px]:gap-5">
              <div className="flex flex-col text-slate-500">
                <span>Monday</span>
                <span>Tuesday</span>
                <span>Webnesday</span>
                <span>Thursday</span>
                <span>Friday</span>
                <span>Saturday</span>
                <span>Sunday</span>
              </div>
              <div className="flex flex-col">
                <span>1pm - 10pm</span>
                <span>1pm - 10pm</span>
                <span>1pm - Midnight</span>
                <span>1pm - 10pm</span>
                <span>1pm - Minnight</span>
                <span>1pm - 10pm</span>
                <span className="ml-[2px]">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-44 bg-black grid place-content-center">
        <img src="assets/logo-dark.png" className="mx-auto" />
        <p className="text-zinc-600 text-center mt-4">2015 ALL RIGHT RESERVED. DESIGNED BY <span className="text-orange-300">CREATIVE WP</span></p>
      </div>
    </div>
  )
}

export default Footer;
