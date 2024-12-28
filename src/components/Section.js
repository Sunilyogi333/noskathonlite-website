"use client";

import Image from "next/image";

<<<<<<< HEAD
const Section = ({title}) => {
    return (
<div className="w-full border-4 border-nosk-yellow bg-nosk-green p-2 text-center flex justify-between items-center">
  <Image
    src="assets/svg/Wire_Long.svg"
    width={300}
    height={50}
    alt="Left Wire"
    className="transform translate-x-[-30px]"
  />
=======
const Section = ({ title }) => {
  return (
    <div className="w-full border-4 relative border-nosk-yellow bg-nosk-green p-2 sm:py-4 md:py-5 lg:py-6 text-center flex justify-between items-center">
      <div className="absolute xs:-left-44 sm:-left-32 md:-left-28 lg:-left-12 xl:-left-0">
        <Image
          src="assets/svg/Wire_Long.svg"
          width={300}
          height={50}
          alt="Left Wire"
          className="transform"
        />
      </div>
>>>>>>> 19cadfa02a491318883abc7e88c78f76e4949f95

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

<<<<<<< HEAD
  <Image
    src="assets/svg/Wire_Long.svg"
    width={300}
    height={50}
    alt="Right Wire"
    className="transform scale-x-[-1] translate-x-[30px]"
  />
</div>



    )
}

export default Section
=======
export default Section;
>>>>>>> 19cadfa02a491318883abc7e88c78f76e4949f95
