"use client";

import CountDown from "@/components/CountDown";
import Header from "../components/Header";
import HeroSection from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto mt-4"> 
        <HeroSection />
      </div>

      {/* Fixed Countdown */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <CountDown />
      </div>
    </div>
  );
}
