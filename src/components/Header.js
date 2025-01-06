import React from "react";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Prizes", id: "prizes" },
    { label: "FAQs", id: "faqs" },
    { label: "Contact Us", id: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-transparent shadow-md fixed w-full top-0 z-50">
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 sm:absolute sm:left-3 sm:top-[10px] sm:mx-0 mx-auto w-14 h-14 bg-nosk-white rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/assets/svg/NOSK_Logo_with_Tagline 1.svg"
              alt="Nosk Logo"
              height={318}
              width={318}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="hidden sm:flex flex-grow justify-center space-x-1 md:space-x-3 lg:space-x-6 xl:space-x-10">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-gray-200 px-3 py-2 text-base sm:text-lg md:text-xl lg:text-2xl font-lar transition-transform hover:scale-110 hover:font-extrabold"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="sm:hidden flex items-center">
            <button
              className="text-white hover:text-gray-200 p-2 rounded-lg transition-colors"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img
                className="h-6 w-6"
                src="https://cdn-icons-png.flaticon.com/128/13958/13958298.png"
                alt="DropDownIcon"
              />
            </button>
          </div>
        </div>

        {showDropdown && (
          <div className="sm:hidden absolute z-20 left-0 right-0 mt-2 mx-4 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-200 ease-in-out">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => {
                  scrollToSection(item.id);
                  setShowDropdown(false);
                }}
                className="block w-full text-left text-gray-700 hover:bg-green-50 px-6 py-3 text-base font-medium transition-colors duration-150"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
      <div className="absolute w-full top-0 h-[170px] -z-10">
  <img 
    src="/assets/svg/navbar2.svg" 
    alt="Zagged Line" 
    className="w-full h-full object-cover"
  />
</div>
    </header>
  );
};

export default Header;
