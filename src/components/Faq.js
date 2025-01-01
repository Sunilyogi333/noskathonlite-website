"use client";
import { useState } from "react";

const Faq = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="w-full max-w-4xl mx-auto my-6 rounded-lg overflow-hidden border hover:border-nosk-green shadow-md transition-all duration-200 relative cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="bg-nosk-white transition-shadow duration-300 hover:shadow-lg">
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-nosk-green"></div>

        <div className="flex justify-between items-center p-6 relative">
          <h4 className="font-semibold text-nosk-black text-left ml-6 md:text-xl md:mr-32">
            {question}
          </h4>

          <img
            src="assets/svg/Wire - Variant 2.svg"
            alt="Wire"
            className="hidden md:block absolute right-[90px] top-1/2 transform -translate-y-1/2 w-32 h-20"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="text-nosk-green text-2xl font-bold transition-max-height md:text-3xl"
          >
            {isExpanded ? "-" : "+"}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "md:max-h-12 max-h-20" : "max-h-0"
          }`}
          style={{ transitionProperty: "max-height" }}
        >
          <div className="px-8 pb-6 ml-4 md:ml-0 text-nosk-black md:px-12 md:pb-8">
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqList = () => {
  return (
    <div>
      <Faq question="Team size for NOSKATHON Lite?" answer="2-4 members." />
      <Faq
        question="NOSKATHON Lite themes?"
        answer="Open Source for Change, AI for Good, Climate Action through Tech."
      />
      <Faq
        question="How to register?"
        answer="Register via the official website with team and project details."
      />
      <Faq
        question="NOSKATHON Lite duration?"
        answer="48 hours, starting from the opening session."
      />
      <Faq
        question="Allowed tools?"
        answer="Any open-source tools, frameworks, and platforms."
      />
    </div>
  );
};
export default FaqList;
