import Image from "next/image";
import { Button } from "./Button.js";

const HeroSection = () => {
  return (
    <div className="h-screen hero-section text-white w-full flex items-center justify-center min-h-screen text-center">
      <div className="flex flex-col md:flex-row md:12 max-w-8xl lg:gap-20 items-center justify-between lg:mt-8 w-full">
        {/* The content section */}
        <div className="text-center lg:text-left flex-col items-center justify-center">
          <div className="font-bold mb-4 gap-2 w-full flex flex-col items-center justify-center lg:flex-row">
            <h1 className="text-nosk-black text-center">NOSKATHON</h1>
            <h1 className="bg-nosk-green inline-block p-2 text-nosk-white text-center">
              LITE
            </h1>
          </div>

          <h1 className="mb-6 font-normal text-center">2025</h1>
          <h5 className="text-center text-nosk-green font-bold mb-8">
            10<sup>th</sup> January, 2025 - 11<sup>th</sup> January, 2025
          </h5>

          <div className="relative flex items-center justify-center">
            <Button
              value="REGISTER NOW"
              link="/register"
              className="bg-nosk-green text-nosk-white text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:font-bold py-4 px-6 relative z-10"
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
        <div className="flex items-center justify-center w-3/6 lg:w-auto lg:mt-0">
          <Image
            src="/assets/svg/NOSKATHON.png"
            alt="Zagged Line"
            width={442} // Original width of the image
            height={341.02} // Original height of the image
            className="w-3/4 md:w-3/4/ h-3/6 lg:h-44 lg:w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
