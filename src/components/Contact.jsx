
const Contact = () => {

  const input = [
    {placeholder: "NAME" },
    {placeholder: "EMAIL" },
    {placeholder: "WEBSITE" }
  ]

  return (
    <div
    id="contact"
    className="text-center py-20 relative">
      <div className="w-[min(1120px,100%-4rem)] mx-auto relative z-10">
        <div className="text-center space-y-3">
            <img
              src="assets/Artemio Lily Stamp.png"
              className="h-12 w-12 object-contain mx-auto"
            />
            <h2 className="font-FjallaOne text-5xl">GET IN TOUCH</h2>
            <p className="font-Courgette text-lg flex justify-center items-center gap-2">
              <span className="h-[1px] w-8 bg-gray-500"></span>
              <span>Connect from heart</span>
              <span className="h-[1px] w-8 bg-gray-500"></span>
            </p>
          </div>
          <div className="flex gap-5 mt-16 max-920:flex-col text-black">
            <div className="flex-1 grid grid-cols-1 max-[450px]:grid-cols-1 gap-7">
              {
                input.map((placeholder, i) => (
                  <input
                  key={i}
                  type="text" placeholder={placeholder.placeholder}
                  className="border max-920:p-2 border-gray-400 focus-visible:border-[#bb955a] bg-transparent outline-none rounded-lg px-3"
                  />
                ))
              }
            </div>
            <div className="flex-1 h-48">
              <textarea placeholder="MESSAGE"
              className="resize-none p-3 bg-transparent border border-gray-400 focus-visible:border-[#bb955a] outline-none rounded-lg h-full w-full max-920:h-52" />
            </div>
          </div>
          <button className="border border-[#bb955a] text-sm rounded-lg px-6 py-[9px] hover:bg-[#bb955a] transition-colors duration-300 mt-10 text-black hover:text-white">SEND</button>
      </div>
    </div>
  )
};

export default Contact;
