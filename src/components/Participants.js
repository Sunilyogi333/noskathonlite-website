import { useState, useEffect, useRef } from "react";

const Participants = () => {
  const [count, setCount] = useState(1);
  const [isVisible, setIsVisible] = useState(false); // trigger the counter once 20% of the section is visible
  const componentRef = useRef(null);

  useEffect(() => {
    if (isVisible && count < 100) {
      const timer = setTimeout(() => {
        setCount((prev) => prev + 1);
      }, 20);

      return () => clearTimeout(timer);
    }
  }, [count, isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 } // can change the threshold here, 0.2=20% visibility
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={componentRef}
      className="flex flex-col items-center w-full max-w-3xl mx-auto p-6 my-8"
    >
      <div className="mb-8">
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-nowrap font-medium border-b-8 border-nosk-green px-3">
          Expected Participants
        </span>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-16 w-full">
        <div className="text-center">
          <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-2 whitespace-nowrap">
            2&#8209;4
          </div>
          <div className="text-xs sm:text-sm md:text-base text-nosk-grey">
            Per Team
          </div>
        </div>

        <div className="text-center">
          <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-2">
            {count >= 100 ? "100+" : count}
          </div>
          <div className="text-xs sm:text-sm md:text-base text-nosk-grey">
            Total Participants
          </div>
        </div>

        <div className="text-center">
          <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-2">
              50+
          </div>
          <div className="text-xs sm:text-sm md:text-base text-nosk-grey">
            Total Teams
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participants;
