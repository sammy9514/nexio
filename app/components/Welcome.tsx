import React from "react";
import { CiMenuKebab } from "react-icons/ci";

const Welcome = () => {
  return (
    <div className="w-full h-full flex items-center mt-[120px] flex-col  ">
      <div className="w-[70%]   ">
        <div className="w-full flex items-center flex-col h-auto ">
          <h4 className="mb-[10px] ">Welcome</h4>
          <h2 className="text-[60px] font-semibold text-center leading-[70px] w-[75%]  ">
            The main thing for us is your result!
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 gap-4 justify-center  w-full h-auto mt-10  ">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            className="w-[300px] h-[300px] shadow-lg bg-[#fbfbfb] rounded-[15px] "
            key={index}
          >
            <div className="flex justify-center items-center flex-col h-full ">
              {/* <img src="" alt="mic  " className=" mb-6" /> */}
              <div className="text-[60px] mb-6 text-[#70af68] ">mf</div>
              <h3 className="text-[20px] text-center text-black font-bold ">
                Leveraging
              </h3>
              <p>Lorem ipsum dolor sit amet .</p>
              <div className=" rotate-90 text-[30px] mt-5 ">
                <CiMenuKebab />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-[#70af68] w-[200px] h-[50px] rounded-[50px] flex justify-center items-center mt-[50px] text-white ">
        Get Quote
      </button>

      <div className="w-full h-auto  mt-[80px] flex justify-center items-center">
        <div className="w-[50%]   ">
          <div className="w-[500px] h-[700px] rounded-[15px] bg-slate-500"></div>
        </div>
        <div className="w-[50%] text-[17px] ">
          <p className="font-semibold  ">corporate service</p>
          <h3 className="text-[60px] font-bold leading-[70px] w-[80%] my-6 ">
            Manage customer requests easily
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
            tempor labore et dolore magna aliqua.
          </p>

          <div className="flex gap-5 text-[25px] my-6 ">
            <div className="text-[gray] ">01.</div>
            <h3 className="font-semibold ">Endless possibilities</h3>
          </div>
          <hr />
          <div className="flex gap-5 text-[25px] mt-6 ">
            <div className="text-[gray] ">02.</div>
            <h3 className="font-semibold ">Process optimization</h3>
          </div>
          <button className="bg-[#3d62f4] w-[200px] h-[50px] rounded-[50px] flex justify-center items-center mt-[50px] text-white ">
            see features
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
