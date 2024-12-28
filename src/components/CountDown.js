"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const CountDown = () => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTime = () => {
    const targetDate = new Date("2025-01-11T00:00:00");
    const diff = targetDate - new Date();

    if (diff < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTime());

    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative flex flex-col items-center p-1 bg-nosk-green text-nosk-white w-full overflow-hidden">
      <img
        src="/assets/png/Wire.png"
        alt="Wire Image"
        className="absolute top-1  left-[-50px] w-[130px] md:w-[180px] transform scale-x-[-1]"
      />

      <div className="flex flex-col items-center lg:flex-row gap-0 lg:gap-10 space-y-2 md:space-y-3">
        <p className="text-base text-nosk-white md:text-lg font-semibold text-center">
          LIVE IN:
        </p>
        <div className="flex flex-wrap space-x-2 md:space-x-3 text-2xl md:text-3xl md:pt-3 md:pb-2">
          <div className="text-center">
            <p className="font-bold text-3xl m-0 leading-none text-nosk-white">
              {timeLeft.days}
            </p>
            <p className="text-[0.5rem] text-nosk-white opacity-50 m-1 leading-none">DAYS</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-3xl m-0 leading-none text-nosk-white">
              {timeLeft.hours}
            </p>
            <p className="text-[0.5rem] text-nosk-white opacity-50 m-1 leading-none">HOURS</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-3xl m-0 leading-none text-nosk-white">
              {timeLeft.minutes}
            </p>
            <p className="text-[0.5rem] text-nosk-white opacity-50 m-1 leading-none">MINUTES</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-3xl m-0 leading-none text-nosk-white">
              {timeLeft.seconds}
            </p>
            <p className="text-[0.5rem] text-nosk-white opacity-50 m-1 leading-none">SECONDS</p>
          </div>
        </div>
      </div>

      <img
        src="/assets/png/Wire.png"
        alt="Wire Image"
        className="absolute top-1 right-[-50px] w-[130px] md:w-[180px]"
      />
    </div>
  );
};

export default CountDown;
