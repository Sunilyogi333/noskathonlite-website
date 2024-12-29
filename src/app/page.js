"use client";

import CountDown from "@/components/CountDown";
import Header from "../components/Header";
import HeroSection from "@/components/Hero";
import Domain from "../components/Domain";
import TeamSection from "../components/TeamSection";
export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Header */}
      <div className="flex-none">
        <Header />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-8 md:px-10 lg:px-16">
        <HeroSection />
        <Domain />
        
      </div>

      {/* Fixed Countdown */}
      <div className="flex-none">
        <CountDown />
      </div>
    </div>
  );
}