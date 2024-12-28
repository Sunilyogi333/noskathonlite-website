"use client";
import Image from "next/image";
import Participants from "./Participants";
import Section from "./Section";
import TextBox from "./TextBox";

const About = () => {
  const content =
    "lorems ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo. lorems ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.lorems ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.  Duis vulputate commodo.lorems ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.  Duis vulputate commodo.lorems ipsum dolor sit amet, consectetur adipiscing elit.";
  return (
    <div className="px-8 md:px-10 lg:px-16 mt-14">
      <div className="flex flex-wrap justify-center gap-4 w-full lg:px-4">
        <div className="flex flex-col xl:flex-row gap-2 lg:justify-between lg:px-20 items-center w-full  overflow-hidden">
          <TextBox
            title={"Event"}
            bgcolor={"bg-nosk-black"}
            content={content}
          />
          <div className="flex items-center justify-center lg:min-w-lg xl:max-w-xl xl:justify-start h-full w-full">
            <Participants />
          </div>
        </div>

        <div className="flex flex-col-reverse xl:flex-row gap-2 lg:justify-between lg:px-20 items-center w-full overflow-hidden">
          <div className="flex items-center justify-center lg:min-w-lg xl:max-w-xl  h-full w-full">
            <Image
              src="/assets/svg/NOSK_Logo_with_Tagline 1.svg"
              alt="NOSKATHON Logo"
              width={442}
              height={341.02}
              className="w-1/2 object-contain w-57 min-w-96"
            />
          </div>
          <TextBox title={"NOSk"} bgcolor={"bg-nosk-green"} content={content} />
        </div>
      </div>
    </div>
  );
};
export default About;
