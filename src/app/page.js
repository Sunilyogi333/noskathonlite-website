"use client";

import { useState, useEffect } from "react";
import CountDown from "@/components/CountDown";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import About from "@/components/About";
import Section from "@/components/Section";
import Domain from "../components/Domain";
import TeamSection from "../components/TeamSection";

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Header */}
      <div className="flex-none">
        <Header />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto mt-38 overflow-hidden">
        <Hero />

        <Section title="ABOUT" />
        <About />

        <Section title="FAQs" />
        <div className="px-4">
          <Faq
            question={"Which is the best team from OC?"}
            answer={"Tech Team"}
          />
        </div>
        <Section title="OUR DOMAIN" />
        <Domain />
        <Section title="OUR TEAM" />
        <TeamSection />
        

        <Footer />
        
      </div>

      {/* Fixed Countdown */}
      <div className="flex-none">
        <CountDown />
      </div>

      
    </div>
  );
}
