"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Participants from "./Participants";
import TextBox from "./TextBox";

const About = () => {
  const content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.";

  return (
    <div className="px-1 md:px-10 lg:px-16 mt-14">
      <div className="flex flex-wrap justify-center gap-4 w-full lg:px-4">
        {/* First Section */}
        <div className="flex flex-col xl:flex-row gap-2 lg:justify-between lg:px-20 items-center w-full overflow-hidden">
          {/* Animated TextBox */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <TextBox
              title={"Event"}
              bgcolor={"bg-nosk-black"}
              content={content}
            />
          </motion.div>

          {/* Animated Participants */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex items-center justify-center lg:min-w-lg xl:max-w-xl xl:justify-start h-full w-full"
          >
            <Participants />
          </motion.div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col-reverse xl:flex-row gap-2 lg:justify-between lg:px-20 items-center w-full overflow-hidden">
          {/* Animated Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex items-center justify-center lg:min-w-lg xl:max-w-xl h-full w-full"
          >
            <Image
              src="/assets/svg/NOSK_Logo_with_Tagline 1.svg"
              alt="NOSKATHON Logo"
              width={442}
              height={341.02}
              className="w-1/2 object-contain"
            />
          </motion.div>

          {/* Animated TextBox */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <TextBox
              title={"NOSK"}
              bgcolor={"bg-nosk-green"}
              content={content}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
