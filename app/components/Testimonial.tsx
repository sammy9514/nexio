import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";

const Testimonial = () => {
  const [count, setCount] = useState(0);
  const testimonials = Array.from({ length: 6 }, (_, index) => ({
    id: index,
    initial: "mf",
    title: "Leveraging",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }));

  const change = (index: number) => {
    setCount(index);
  };
  return (
    <div className="w-full h-[80vh] bg-[#3d62f4] mt-[100px] flex items-center justify-center">
      <div className="w-full h-[80%]">
        <div className="w-full flex items-center h-auto flex-col">
          <h2 className="text-white font-semibold mb-6">Testimonials</h2>
          <h1 className="text-[40px] md:text-[60px] font-semibold text-white text-center leading-tight md:leading-[70px]">
            What clients say <br /> about us
          </h1>
        </div>
        <div className="w-full mt-10 overflow-x-auto overflow-y-auto scrollbar-hide">
          <div
            className="flex space-x-4 justify-center w-max ease-in"
            style={{
              transform: `translateX(-${count * 10}%)`,
              width: `3*100%`,
            }}
          >
            {testimonials.map((tes, index) => (
              <div
                className={`min-w-[500px] md:w-[400px] lg:w-[500px] h-[400px] shadow-lg bg-white rounded-[15px] p-8 flex flex-col items-center ${
                  count === index ? "h-[430px] w-[550px] " : null
                }`}
                key={index}
              >
                <div className="w-[80px] h-[80px] bg-gray-200 rounded-full mb-6 flex items-center justify-center text-[#70af68] text-[40px]">
                  {tes.initial}
                </div>
                <h3 className="text-[20px] text-center text-black font-bold mb-2">
                  {tes.title}
                </h3>
                <p className="text-center text-gray-600 mb-6">
                  {tes.description}
                </p>
                <div className="rotate-90 text-[30px] text-gray-400">
                  <CiMenuKebab />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-6 ">
          {testimonials.map((_, index) => (
            <div
              className={`w-[10px] h-[10px] rounded-full bg-slate-300 ${
                count === index ? "bg-[green]" : "bg-slate-300"
              }`}
              onClick={() => {
                change(index);
              }}
            />
          ))}
        </div>
        {count}
      </div>
    </div>
  );
};

export default Testimonial;
