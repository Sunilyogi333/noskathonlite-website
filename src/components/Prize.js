import React from "react";

const Prize = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Winner Section */}
      <div className="relative rounded-lg p-8 mx-auto flex justify-center items-center">
        <div className="relative flex flex-col items-center">
          <img
            src="/assets/png/Asset 1.png"
            alt="First Place Medal"
            className="absolute bottom-8 left-6 w-28 h-28 object-contain"
          />
          <div className="flex flex-col justify-center items-center min-h-[5rem] pl-24">
            <h2 className="text-nosk-green font-bold text-3xl mb-3">Winner</h2>
            <p className="text-nosk-green font-semibold text-xl tracking-wider">
              NPR 30,000
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* 1st Runner Up Section */}
        <div className="relative rounded-lg p-8 mx-auto flex justify-center items-center">
          <div className="relative flex flex-col items-center">
            <img
              src="/assets/png/Asset 2.png"
              alt="Second Place Medal"
              className="absolute bottom-12 left-8 w-28 h-28 object-contain"
            />
            <div className="flex flex-col justify-center items-center min-h-[4rem] pl-24">
              <h2 className="text-nosk-green font-bold text-3xl mb-3 whitespace-nowrap">
                1st Runner Up
              </h2>
              <p className="text-nosk-green font-semibold text-xl tracking-wider">
                NPR 20,000
              </p>
            </div>
          </div>
        </div>

        {/* 2nd Runner Up Section */}
        <div className="relative rounded-lg p-8 mx-auto flex justify-center items-center">
          <div className="relative flex flex-col items-center">
            <img
              src="/assets/png/Asset 3.png"
              alt="Third Place Medal"
              className="absolute bottom-12 left-8 w-28 h-28 object-contain"
            />
            <div className="flex flex-col justify-center items-center min-h-[4rem] pl-24">
              <h2 className="text-nosk-green font-bold text-3xl mb-3 whitespace-nowrap">
                2nd Runner Up
              </h2>
              <p className="text-nosk-green font-semibold text-xl tracking-wider">
                NPR 10,000
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-right text-lg text-nosk-green font-normal">
        cash prizes are exclusive of tax<sup>*</sup>
      </p>

      {/* <div className="flex items-center justify-center space-x-6 mt-6">
        <img 
          src="/assets/png/ncitlogo.png" 
          alt="Supporter Logo" 
          className="h-32 object-contain"
        />
        <div className="w-1 h-32 bg-nosk-black"></div>
        <div className="flex flex-col items-start text-nosk-black text-xl font-bold space-y-2">
          <span>SUPPORTED</span>
          <span>BY</span>
        </div>
      </div> */}
    </div>
  );
};

export default Prize;
