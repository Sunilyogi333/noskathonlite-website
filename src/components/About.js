"use client";
import Image from "next/image";
import Participants from "./Participants";
import Section from "./Section";
import TextBox from "./TextBox";

const About = () => {
  const content =
    "lorems ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo. lorems ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.lorems ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.";
  return (
    <div className="px-8 md:px-10 lg:px-16">
      <div className="flex flex-wrap justify-center gap-4 w-full">
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between w-full h-full overflow-hidden">
          <TextBox title={"Event"} bgcolor={"nosk-black"} content={content} />
          <div className="flex items-center justify-center w-full">
            <Participants />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 justify-around items-center w-full overflow-hidden">
          <div className="flex items-center justify-center h-full w-full mt-12">
            <Image
              src="/assets/svg/NOSK_Logo_with_Tagline 1.svg"
              alt="NOSKATHON Logo"
              width={442}
              height={341.02}
              className="w-1/2 object-contain"
            />
          </div>
          <TextBox title={"NOSk"} bgcolor={"nosk-green"} content={content} />
        </div>
      </div>
    </div>
  );
};
export default About;
