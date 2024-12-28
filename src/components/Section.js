"use client"

import Image from "next/image"

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

  <p className="text-nosk-white text-6xl font-bold">{title}</p>

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