"use client";

import Image from "next/image";

const Section = ({ title, id }) => {
  return (
    <div
      className="w-full border-4 relative bg-nosk-green p-3 sm:py-4 xl:py-5 text-center flex justify-between items-center"
      id={id}
    >
      <div className="absolute -left-56 xs:-left-36 sm:-left-32 md:-left-28 lg:-left-12 xl:-left-0">
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
      <div className="absolute -right-56 xs:-right-36 sm:-right-32 md:-right-28 lg:-right-12 xl:-right-0">
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
