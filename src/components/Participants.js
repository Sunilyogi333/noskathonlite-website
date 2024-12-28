"use static"

import { useState, useEffect, useRef} from 'react';

const Participants = () => {

    const [count, setCount] = useState(1);
    const [isVisible, setIsVisible] = useState(false); //trigger the counter once 20% of the section is visible
    const componentRef = useRef(null);

    useEffect(() => {
      if (isVisible && count < 100) {
        const timer = setTimeout(() => {
          setCount(prev => prev + 1);
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
        { threshold: 0.2 } //can change the threshold here, 0.2=20% visibility
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
      
      <div ref={componentRef} className="flex flex-col items-center w-full max-w-2xl mx-auto p-4">
      
        <div className="mb-6">
          <span className="text-xl font-normal border-b-8 border-nosk-green px-2">
            Expected Participants
          </span>
        </div>
  
      
        <div className="flex justify-center gap-8 w-full">
      
          <div className="text-center">
            <div className="text-4xl font-bold mb-1">2-4</div>
            <div className="text-xs  text-nosk-grey">Per Team</div>
          </div>
  
         
          <div className="text-center">
            <div className="text-4xl font-bold mb-1">

            {count >= 100 ? '100+' : count}
            </div>
            <div className="text-xs text-nosk-grey">Total Participants</div>
          </div>
  
        
          <div className="text-center">
            <div className="text-4xl font-bold mb-1">25+</div>
            <div className="text-xs text-nosk-grey">Total Teams</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Participants;