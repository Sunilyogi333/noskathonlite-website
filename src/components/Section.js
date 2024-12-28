"use client"

import Image from "next/image"

const Section = ({title}) => {
    return (
<div className="w-full border-4 border-nosk-yellow bg-nosk-green p-2 text-center flex justify-between items-center max-sm:flex-col">
<div className="max-sm:hidden">
  <Image
    src="assets/svg/Wire_Long.svg"
    width={300}
    height={50}
    alt="Left Wire"
    className="transform translate-x-[-30px]"
  />
  </div>

  <span className="text-nosk-white text-3xl sm:text-6xl font-bold max-sm:mt-1 max-sm:mb-1">{title}</span>
  <div className="max-sm:hidden">
  <Image
    src="assets/svg/Wire_Long.svg"
    width={300}
    height={50}
    alt="Right Wire"
    className="transform scale-x-[-1] translate-x-[30px]"
  />
</div>
</div>



    )
}

export default Section