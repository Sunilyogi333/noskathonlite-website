"use client";

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
            question={"which is the Best team from OC??"}
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
