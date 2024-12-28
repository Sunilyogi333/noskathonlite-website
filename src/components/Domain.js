"use client";
import React, { useState } from "react";
import Section from "./Section";

const Domain = () => {
  const [activeSection, setActiveSection] = useState(1); // Initially expand the first card

  // Sections data
  const sections = [
    { id: 1, title: "Open Source", image: "/assets/domain/open_souce.jpg" },
    { id: 2, title: "AI for Good", image: "/assets/domain/AI.jpg" },
    {
      id: 3,
      title: "Climate Change Through Technology",
      image: "/assets/domain/climate.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-5">
      <div className="w-full">
        <Section title="Theme" />
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex flex-wrap md:flex-nowrap space-x-2 bg-black p-4 h-[300px]">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`relative h-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${
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
              {/* Expandable Content */}
              {activeSection === section.id && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-nosk-white bg-opacity-30 backdrop-blur-md text-white text-sm md:text-base flex items-center transition-all duration-500">
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
                  <span className="font-medium text-nosk-white">{section.title}</span>
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