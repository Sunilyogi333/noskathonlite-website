import Image from "next/image";
import { Button } from "./Button.js";

const HeroSection = () => {
  return (
    <div className="h-screen hero-section text-white w-full flex items-center justify-center min-h-screen text-center px-8 md:px-16 lg:px-20 ">
      <div className="flex flex-col lg:flex-col xl:flex-row sm:mt-4 lg:gap-20 items-center justify-between max-w-9xl lg:mt-8 w-full">
        <div className="text-center lg:text-left flex-col items-center justify-center">
          <div className="mb-4 gap-2 w-full flex flex-col items-center justify-center lg:flex-row">
            <h1 className="text-nosk-black font-bold text-center">NOSKATHON</h1>
            <h1 className="bg-nosk-green inline-block font-bold text-nosk-white p-2 text-center">
              LITE
            </h1>
          </div>

          <h1 className="mb-6 text-nosk-black font-light text-center">2025</h1>
          <h5 className="text-center text-nosk-green font-bold mb-8">
            12<sup>th</sup> January, 2025 - 13<sup>th</sup> January, 2025
          </h5>

          <div className="relative flex items-center justify-center">
            <Button
              value="REGISTER NOW"
              link="https://docs.google.com/forms/d/e/1FAIpQLSd4PAg-Tk1kVkIv9a6nWZO9mYsb6p3-G3JxTstzWiduUBlaxQ/viewform"
              className="bg-nosk-green text-nosk-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:font-bold py-4 px-6 relative z-10"
            />

            {/* <div className="absolute right-28 top-0 transform translate-x-1/2 ">
              <Image
                src={"/assets/svg/Wire_LongG.svg"}
                alt="wire image"
                height={146}
                width={74}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute left-28 top-0 transform -translate-x-1/2 scale-x-[-1]">
              <Image
                src={"/assets/svg/Wire_LongG.svg"}
                alt="wire image"
                height={146}
                width={74}
                className="w-full h-full object-cover"
              />
            </div> */}
          </div>
        </div>

        {/* Adding the SVG image below the header */}
        <div className="flex items-center justify-center w-full lg:w-auto mt-12 lg:mt-2">
          <Image
            src="/assets/svg/NOSKATHON_LOGO.svg"
            alt="NOSKATHON Logo"
            width={442}
            height={341.02}
            className="h-28 w-auto sm:h-28 md:h-40 lg:h-52 xl:h-60 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
