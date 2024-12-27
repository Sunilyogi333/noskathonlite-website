import Image from "next/image";
import { Button } from "./Button.js";

const HeroSection = () => {
  return (
    <div className="h-screen hero-section text-white w-full flex items-center justify-center min-h-screen text-center">
      <div className="flex flex-col lg:flex-row gap-20 items-center justify-center lg:mt-8 lg:items-start w-full">
        <div className="text-center lg:text-left flex-col items-center justify-center">
          <h1 className="text-4xl lg:text-5xl text-nosk-black font-bold mb-4">
            NOSKATHON{" "}
            <span className="bg-nosk-green text-nosk-white px-2">LITE</span>
          </h1>
          <p className="text-2xl lg:text-7xl mb-6 font-normal text-center">
            2025
          </p>
          <p className="text-sm  lg:text-xl text-nosk-green font-bold mb-8">
            10<sup>th</sup> January, 2025 - 11<sup>th</sup> January, 2025
          </p>

          <div className="relative flex items-center justify-center">
            <Button
              value="REGISTER NOW"
              link="/register"
              className="bg-nosk-green text-nosk-white text-2xl lg:text-4xl font-bold py-4 px-6 relative z-10"
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
        <div className="flex items-center justify-center w-full lg:w-auto lg:mt-0">
          <Image
            src="/assets/svg/NOSKATHON.png"
            alt="Zagged Line"
            width={442} // Original width of the image
            height={341.02} // Original height of the image
            className="w-3/4 object-fit lg:h-44 lg:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
