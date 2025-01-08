import React from "react";

const Prize = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Winner Section */}
      <div className="relative rounded-lg p-8 mx-auto flex justify-center items-center ">
        <div className="relative flex flex-col items-center">
        <div className="bg-nosk-grey/5 rounded-lg p-8">
          <img 
            src="/assets/png/Asset 1.png" 
            alt="First Place Medal" 
            className="absolute bottom-6 md:bottom-8 left-2 md:left-6 w-20 md:w-28 h-20 md:h-28 object-contain"
          />
            <div className="flex flex-col justify-center items-center min-h-[4rem] md:min-h-[5rem] pl-16 md:pl-24">
              <h2 className="text-nosk-green font-bold text-2xl md:text-3xl mb-2 md:mb-3">Winner</h2>
              <p className="text-nosk-green font-semibold text-lg md:text-xl tracking-wider">NPR 30,000</p>
            </div>
        </div>
        </div>
        </div>
      

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* 1st Runner Up Section */}
        <div className="relative rounded-lg bg-nosk-grey/5 p-6 mx-auto flex  justify-center items-center ">
          <div className="relative flex flex-col items-center">
            
            <img 
              src="/assets/png/Asset 2.png" 
              alt="Second Place Medal" 
              className="absolute bottom-8 md:bottom-12 left-2 md:left-8 w-20 md:w-28 h-20 md:h-28 object-contain"
            />
              <div className="flex flex-col justify-center items-center min-h-[3rem] md:min-h-[4rem] pl-16 md:pl-24">
                <h2 className="text-nosk-green font-bold text-xl md:text-3xl mb-2 md:mb-3 whitespace-nowrap">1st Runner Up</h2>
                <p className="text-nosk-green font-semibold text-lg md:text-xl tracking-wider">NPR 20,000</p>
            </div>
          </div>
        </div>

        {/* 2nd Runner Up Section */}
        <div className="relative rounded-lg bg-nosk-grey/5 p-6 mx-auto flex justify-center items-center ">
          <div className="relative flex flex-col items-center">
            <img 
              src="/assets/png/Asset 3.png" 
              alt="Third Place Medal" 
              className="absolute bottom-8 md:bottom-12 left-2 md:left-8 w-20 md:w-28 h-20 md:h-28 object-contain"
            />
            <div className="flex flex-col justify-center items-center min-h-[3rem] md:min-h-[4rem] pl-16 md:pl-24">
            <h2 className="text-nosk-green font-bold text-xl md:text-3xl mb-2 md:mb-3 whitespace-nowrap">2nd Runner Up</h2>
              <p className="text-nosk-green font-semibold text-lg md:text-xl tracking-wider">NPR 10,000</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-right text-base md:text-lg text-nosk-green font-normal">
        cash prizes are exclusive of tax<sup>*</sup>
      </p>

    </div>
  );
};

export default Prize;
