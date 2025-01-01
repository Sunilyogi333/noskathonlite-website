"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Image from "next/image";
const footerItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Prizes", id: "prizes" },
  { label: "FAQs", id: "faqs" },
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer = () => {
  return (
    <div>
      <footer className="shadow-md w-full relative flex flex-col items-center justify-center">
        {/* Adding the SVG image above the footer */}
        {/* <div className="w-full">
          <Image
            src="/assets/svg/ZaggedLine_G_Y.svg"
            alt="Zagged Line"
            width={1920}
            height={120}
            className="object-cover w-full"
          />
        </div> */}
        <div className="flex flex-col text-nosk-white w-full font-semibold text-center relative bg-nosk-green">
          <div className="px-8 md:px-10 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-2 justify-center items-center mb-4">
              <h4 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                Opening minds through OPEN SOURCE
              </h4>
            </div>

            <h4 className="text-nosk-white font-semibold text-center mt-8">
              Links
            </h4>
            <div className="flex flex-row justify-center items-center">
              {footerItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="text-nosk-white opacity-60 hover:text-gray-200 px-3 py-2 text-base sm:text-lg md:text-xl lg:text-2xl font-lar transition-transform hover:scale-105"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-row justify-between items-center bg-nosk-white mb-[-5px] relative mt-8 px-8 md:px-10 lg:px-16">
            <Image
              src="/assets/svg/NOSK_Logo_with_Tagline 1.svg"
              width={100}
              height={100}
              alt="nosk logo"
              className="max-w-[100px] h-auto"
            />

            <div className="flex flex-row space-x-4">
              <a
                href="https://www.facebook.com/nosklub/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <FontAwesomeIcon 
                  icon={faFacebookF} 
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-nosk-green hover:text-nosk-green"
                />
              </a>
              <a
                href="https://www.instagram.com/officialnosk/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <FontAwesomeIcon 
                  icon={faInstagram} 
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-nosk-green hover:text-nosk-green"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/officialnosk"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <FontAwesomeIcon 
                  icon={faLinkedinIn} 
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-nosk-green hover:text-nosk-green"
                />
              </a>
              <a
                href="https://x.com/OfficialNosk"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <FontAwesomeIcon 
                  icon={faTwitter} 
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-nosk-green hover:text-nosk-green"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
