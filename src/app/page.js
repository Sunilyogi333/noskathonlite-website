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
      <div className="fixed top-0 left-0 w-full z-50 overflow-hidden">
        <Header />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto mt-38 overflow-hidden">
        <Hero />

        <Section title="ABOUT" />
        <About />

        <Section title="DOMAINS" />
        <Domain />

        <Section title="FAQs" />
        <div className="mx-8">
          <Faq
            question={"which is the Best team from OC??"}
            answer={"Tech Team"}
          />
        </div>

        <Section title="OUR TEAM" />
        <TeamSection />

        <Footer />
      </div>

      {/* Fixed Countdown */}
      <div className="sticky bottom-0 w-full z-50 ">
        <CountDown />
      </div>
    </div>
  );
}
