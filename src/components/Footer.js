"use client"


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

  
  <footer className="bg-nosk-green shadow-md w-full bottom-0 relative">
    <div className="flex flex-col text-2xl md:text-xl lg:text-lg text-nosk-white font-semibold text-center pt-16">
      <span>Opening minds</span>
      <span>through OPEN SOURCE</span>

      <span className="text-nosk-white text-2xl md:text-xl lg:text-lg font-semibold text-center mt-8">Links</span>
      <div className="flex flex-row justify-center items-center">
        {footerItems.map((item) => (
          <button
            key={item.label}
            onClick={() => scrollToSection(item.id)}
            className="text-nosk-white opacity-60 hover:text-gray-200 px-3 py-2 text-lg font-lar transition-transform hover:scale-105"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex flex-row justify-between items-center bg-nosk-white px-8 mt-8 mb-[-5px]">
        <Image
          src="/assets/svg/NOSK_Logo_with_Tagline 1.svg"
          width={100}
          height={100}
          alt="nosk logo"
          className="max-w-[100px] h-auto"
        />

        <div className="flex flex-row space-x-4">
          <a href="https://www.facebook.com/nosklub/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/21/21155.png" width={20} height={20} alt="Nosk Facebook" />
          </a>
          <a href="https://www.instagram.com/officialnosk/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png" width={20} height={20} alt="Nosk Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/officialnosk" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384088.png" width={20} height={20} alt="Nosk LinkedIn" />
          </a>
          <a href="https://x.com/OfficialNosk" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png" width={20} height={20} alt="Nosk X" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</div>



  )
}

export default Footer
