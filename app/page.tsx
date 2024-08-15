"use client";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Testimonial from "./components/Testimonial";
import Help from "./components/Help";

const page = () => {
  return (
    <div className="w-full h-full ">
      <Header />
      <Body />
      <Testimonial />
      <Help />
    </div>
  );
};

export default page;
