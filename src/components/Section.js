"use client";

import Image from "next/image";

const Section = ({ title }) => {
  return (
    <div className="w-full border-4 relative border-nosk-yellow bg-nosk-green p-3 sm:py-4 xl:py-5 text-center flex justify-between items-center">
      <div className="absolute xs:-left-44 sm:-left-32 md:-left-28 lg:-left-12 xl:-left-0">
        <Image
          src="assets/svg/Wire_Long.svg"
          width={300}
          height={50}
          alt="Left Wire"
          className="transform"
        />
      </div>

      <h1 className="text-nosk-white mx-auto font-bold max-sm:mt-1 max-sm:mb-1">
        {title}
      </h1>
      <div className="absolute xs:-right-44 sm:-right-32 md:-right-28 lg:-right-12 xl:-right-0">
        <Image
          src="assets/svg/Wire_Long.svg"
          width={300}
          height={50}
          alt="Right Wire"
          className="transform scale-x-[-1]"
        />
      </div>
    </div>
  );
};

export default Section;
