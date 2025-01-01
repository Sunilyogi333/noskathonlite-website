"use client";
import React, { useState } from "react";
import Section from "./Section";

const Domain = () => {
  const [activeSection, setActiveSection] = useState(1); // Initially expand the first card

  // Sections data
  const sections = [
    { id: 1, title: "Open Source", image: "/assets/theme1.jpg" },
    { id: 2, title: "AI for Good", image: "/assets/theme2.jpg" },
    {
      id: 3,
      title: "Climate Change Through Technology",
      image: "/assets/theme3.jpg",
    },
  ];

  return (
    <div className="flex flex-col mx-auto items-center max-w-9xl space-y-5 my-8">
      <div className="w-full md:w-2/3">
        <div className="flex flex-wrap md:flex-nowrap space-x-2 p-4 h-[600px]">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`relative h-full rounded-3xl overflow-hidden transition-all duration-700 ease-in-out ${
                activeSection === section.id ? "flex-[4]" : "flex-[0.7]"
              }`}
              onClick={() =>
                setActiveSection(
                  activeSection === section.id ? null : section.id
                )
              }
              style={{
                backgroundImage: `url(${section.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Number on Unexpanded Div */}
              {activeSection !== section.id && (
                <div className="absolute bottom-4 left-2">
                  <span
                    className="flex items-center justify-center font-bold"
                    style={{
                      borderRadius: "50%",
                      border: "3px solid white",
                      color: "white",
                      width: "3rem",
                      height: "3rem",
                      lineHeight: "3rem",
                      textAlign: "center",
                    }}
                  >
                    {section.id}
                  </span>
                </div>
              )}
              {/* Expandable Content */}
              {activeSection === section.id && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-nosk-black bg-opacity-35 backdrop-blur-md text-white text-sm md:text-base flex items-center transition-all duration-1000">
                  {/* Number and Title */}
                  <span
                    className="flex items-center justify-center font-bold"
                    style={{
                      borderRadius: "50%",
                      border: "2px solid white",
                      color: "white",
                      width: "2rem",
                      height: "2rem",
                      lineHeight: "2rem",
                      textAlign: "center",
                      marginRight: "0.5rem",
                    }}
                  >
                    {section.id}
                  </span>
                  <span className="font-bold text-nosk-white text-lg md:text-xl">
                    {section.title}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Domain;
