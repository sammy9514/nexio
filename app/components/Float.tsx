"use client";
import React, { useRef, useState } from "react";

const Float = () => {
  const [mouseMove, setMouseMove] = useState({ x: 0, y: 0 });
  const move = (e: any) => {
    setMouseMove({ x: e.clientX, y: e.clientY });
  };
  return (
    <div
      className="w-full h-[499px] flex justify-center items-center bg-black mt-[80px] "
      onMouseMove={(e) => {
        move(e);
        console.log(mouseMove, "f");
      }}
    >
      pics
    </div>
  );
};

export default Float;
