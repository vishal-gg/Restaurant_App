import React from "react";

const OurMenu = () => {
  return (
    <div id="menu" className="my-28">
      <div className="text-center space-y-2">
        <img
          src="assets/Artemio Lily Stamp.png"
          className="mx-auto h-12 w-12 object-contain"
        />
        <h2 className="font-FjallaOne text-5xl">OUR MENU</h2>
        <p className="font-Courgette text-lg flex justify-center items-center gap-2">
          <span className="h-[1px] w-8 bg-gray-400/80"></span>
          <span>Choose & Taste</span>
          <span className="h-[1px] w-8 bg-gray-400/80"></span>
        </p>
      </div>
      <p className="w-[min(578px,100%-4rem)] mx-auto text-center mt-10 text-black/80">
        Royal is a collaborative effort of Royal Restaurant & Cafe. We strive
        to elevate the culinary industry through the outlets we establish, and
        the innovative dishes we craft. By blending diverse cultures, we fuse
        both cherished Eastern and Western recipes together. Our mission
        embodies unity, taste, and the art of gourmet dining.
      </p>
    </div>
  );
}

export default OurMenu;
