"use client";
import { useState } from "react";

const Faq = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto my-4 rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-200 relative" onClick={() => setIsExpanded(!isExpanded)}>
      <div className="bg-nosk-white transition-shadow drop-shadow-2xl hover:border-2 border-nosk-green hover:shadow-lg">
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-nosk-green"></div>

        <div className="flex justify-between items-center p-6 relative">
          <h2 className="text-xl font-semibold text-nosk-black text-left ml-6 md:text-xl md:mr-32">
            {question}
          </h2>

          <img
            src="assets/svg/Wire - Variant 2.svg"
            alt="Wire"
            className="hidden md:block absolute right-[90px] top-1/2 transform -translate-y-1/2 w-32 h-20"
          />

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-nosk-green text-2xl font-bold transition-transform md:text-3xl"
          >
            {isExpanded ? "-" : "+"}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-100 ease-in-out ${
            isExpanded ? "max-h-screen" : "max-h-0"
          }`}
          style={{ transitionProperty: "max-height" }}
        >
          <div className="px-8 pb-6 ml-4 md:ml-0 text-nosk-black md:px-12 md:pb-8">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;