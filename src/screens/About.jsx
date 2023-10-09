import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const About = () => {
  const [translateText, setTranslateText] = useState(false);
  const [isTextTranslating, setIsTextTranslating] = useState(false);

  const handleToggleText = () => {
    if (!isTextTranslating) {
      setIsTextTranslating(true);
      setTranslateText(prev => !prev);
    }
  };

  return (
    <div
      id="about"
      className="h-[clamp(600px,100vh,auto)] my-20 max-w-[min(1220px,100%-4rem)] mx-auto flex justify-center items-center gap-8"
    >
      <div className="flex-1 text-xl">
        <h1 className="text-center text-5xl font-FjallaOne mb-10">
          CHEF MESSAGE
        </h1>
        <h2
          onClick={handleToggleText}
          className="max-1200:px-20 max-920:px-0 font-Courgette cursor-help text-gray-600 selection:bg-none"
        >
          <AnimatePresence mode="wait" onExitComplete={()=> setIsTextTranslating(false)}>
            {!translateText ? (
              <motion.div
                key="japanese"
                initial={{ scale: 1.05, filter: "blur(.8rem)" }}
                animate={{ scale: 1, filter: "blur(0)" }}
                exit={{ scale: 1.05, filter: "blur(.8rem)" }}
              >
                「この
                <span className="relative">
                  サンジ
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-teal-300 -z-10"
                  ></motion.span>
                </span>
                の料理の技は、一流だぜ。おいしいレシピやサンジ流の料理の秘密を知りたいなら、オレのウェブサイトをチェックしてくれ！待ってるぜ、美味しい料理の世界への誘いだ！伝統と
                <span className="relative">
                  革新
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-rose-300 -z-10"
                  ></motion.span>
                </span>
                を組み合わせ、オレの料理は常に新しいホリゾンを追求している。何年もの経験と、世界中の旅から学んだ秘密がオレのレシピに詰まってるんだ。この旅路をウェブサイトで一緒に楽しもうじゃないか。興味があれば、待ってるぞ。オレの熱い料理の心を感じてくれ！」
                <br />
                <br />
                「麦わらの一味とともに航海し、
                <span className="relative">
                  オールブルー
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-yellow-300 -z-10"
                  ></motion.span>
                </span>
                を求める夢。私のウェブサイトで料理の世界へ飛び込んで。ここでは、味、
                <span className="relative">
                  冒険
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-slate-300 -z-10"
                  ></motion.span>
                </span>
                、そして騎士道が交差する。」
              </motion.div>
            ) : (
              <motion.div
                key="english"
                initial={{ scale: 1.05, filter: "blur(.8rem)" }}
                animate={{ scale: 1, filter: "blur(0)" }}
                exit={{ scale: 1.05, filter: "blur(.8rem)" }}
                className="text-xl"
              >
                "This
                <span className="relative">
                  {" "}
                  Sanji's{" "}
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-teal-300 -z-10"
                  ></motion.span>
                </span>
                cooking skill is top-notch. If you want to know delicious
                recipes and the secrets of Sanji's cooking, check out my
                website! I'll be waiting for you, it's an invitation to the
                world of delicious cuisine! Combining tradition and
                <span className="relative">
                  {" "}
                  innovation,{" "}
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-rose-300 -z-10"
                  ></motion.span>
                </span>
                my cooking is always pursuing a new horizon. My recipes are
                packed with secrets learned from many years of experience and
                travels around the world. Let's enjoy this journey together on
                my website. If you're interested, I'll be waiting. Feel the
                passion of my cooking!" <br />
                <br />
                "Sailing with the Straw Hat Crew and dreaming of the
                <span className="relative">
                  {" "}
                  All Blue.{" "}
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-yellow-300 -z-10"
                  ></motion.span>
                </span>
                Dive into the
                <span className="relative">
                  {" "}
                  world{" "}
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-slate-300 -z-10"
                  ></motion.span>
                </span>
                of cooking on my website. Here, taste, Adventure , and chivalry
                intersect."
              </motion.div>
            )}
          </AnimatePresence>
        </h2>
        <div
          className="-rotate-12 font-Courgette text-lg text-center mt-10 text-gray-500"
        >
          - Vinsmoke Sanji
          <motion.span
            initial={{ scale: 0, x: -10 }}
            whileInView={{ scale: 1, x: 0, transition: { delay: 2 } }}
            viewport={{ once: true }}
            className="ml-2 inline-block"
          >
            ❤
          </motion.span>
        </div>
      </div>
      <div className="flex-1 max-1200:hidden">
        <img
          src="assets/chef.jpg"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default About;
