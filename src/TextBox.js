"use client"
import React from 'react';

const TextBox = ({ title, content, bgcolor }) => {
  return (
    <div className="max-w-md mx-4 my-6">
     <div className={`bg-${bgcolor} text-white rounded-3xl p-8 flex flex-col space-y-4`}>
        <div>
      <h2 className="text-white text-4xl font-bold mb-4 uppercase text-center">
        {title}
      </h2>
      </div>

      <div>
  
        <p className="font-mono text-sm mb-10">
          {content}
        </p>
        </div>
      </div>
    </div>
  );
};

export default TextBox;