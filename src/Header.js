import React from 'react';
import { useState } from 'react';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Prizes", id: "prizes" },
    { label: "FAQs", id: "faqs" },
    { label: "Contact Us", id: "contact" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-custom-green shadow-md fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 sm:absolute sm:left-3 sm:top-[10px] sm:mx-0 mx-auto">
            <img
              src="https://nosk.org.np/site/images/nosk-logo.png"
              alt="Nosk Logo"
              className="h-14 w-14 bg-white rounded-full object-cover"
            />
          </div>

          <div className="hidden sm:flex flex-grow justify-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-gray-200 px-3 py-2 text-xl font-lar transition-transform hover:scale-105"
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
              />
            </button>
          </div>
        </div>

        {showDropdown && (
          <div className="sm:hidden absolute left-0 right-0 mt-2 mx-4 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-200 ease-in-out">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => {
                  scrollToSection(item.id);
                  setShowDropdown(false);
                }}
                className="block w-full text-left text-gray-700 hover:bg-green-50 px-6 py-3 text-base font-medium transition-colors duration-150
                  "
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;