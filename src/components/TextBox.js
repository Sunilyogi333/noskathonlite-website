"use client";
import React from "react";
import Image from "next/image";

const TextBox = ({ title, content, bgcolor }) => {
  return (
    <div className="max-w-2xl mx-4 my-6 relative">
      <div
        className={`${bgcolor} text-nosk-white rounded-3xl p-8 flex flex-col space-y-4`}
      >
        <Image
          src="/assets/png/Wire.png"
          alt="Wire Image"
          width={100}
          height={100}
          className="absolute top-0 left-[-20px] transform scale-x-[-1]"
        />
        <div>
          <h2 className="text-nosk-white font-bold mb-4 uppercase text-center">
            {title}
          </h2>
        </div>

        <div>
          <p className="font-mono text-nosk-white mb-10">{content}</p>
          <Image
            src="/assets/png/Wire.png"
            alt="Wire Image"
            width={100}
            height={100}
            className="absolute bottom-0 right-[-20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TextBox;
