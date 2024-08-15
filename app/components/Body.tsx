import React from "react";
import Float from "./Float";
import Welcome from "./Welcome";

const Body = () => {
  return (
    <div className="w-full h-full  flex justify-center mt-[120px] ">
      <div className="w-[70%] ">
        <div className="w-full flex items-center flex-col h-auto ">
          <h1 className="text-[70px] font-bold text-center leading-[70px] ">
            A simple ticketing system <br /> for a team{" "}
            <span className="text-[#3d62f4] ">like yours</span>{" "}
          </h1>
          <p className="mt-8 font-light ">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore
          </p>
          <button className="bg-[#70af68] w-[200px] h-[50px] rounded-[50px] flex justify-center items-center mt-[50px] text-white ">
            Get Started
          </button>
        </div>
        <Float />
        <Welcome />
      </div>
    </div>
  );
};

export default Body;
