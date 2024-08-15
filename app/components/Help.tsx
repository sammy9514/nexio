import React, { useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";

const Help = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "Do you offer startup discounts?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor labore et dolore magna aliqua.",
    },
    {
      question: "What services do you provide?",
      answer:
        "We offer a wide range of services to help businesses grow, including marketing, consulting, and technology solutions.",
    },
    {
      question: "How can I get started?",
      answer:
        "You can get started by contacting us through our website or by phone. We will guide you through the process.",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[70%] h-auto mt-[120px] flex justify-between items-center">
        <div className="w-[50%] text-[17px]">
          <p className="text-[60px]">
            <IoPlayCircleOutline />
          </p>
          <h3 className="text-[60px] font-bold leading-[70px] w-[80%] my-6">
            We help your business grow
          </h3>
          {accordionData.map((item, index) => (
            <div key={index} className="my-6">
              <div
                className="flex gap-5 text-[18px] font-semibold cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="text-gray-500">
                  {activeIndex === index ? "-" : "+"}
                </div>
                <h3>{item.question}</h3>
              </div>
              {activeIndex === index && (
                <p className="text-gray-700 mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
        <div className="w-[30%]">
          <div className="w-[500px] h-[550px] rounded-[15px] bg-slate-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Help;
