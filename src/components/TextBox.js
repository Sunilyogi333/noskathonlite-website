"use client"
import React from 'react';
import Image from 'next/image';

const TextBox = ({ title, content, bgcolor }) => {
    return (
        <div className="max-w-md mx-4 my-6 relative">
            <div className={`bg-${bgcolor} text-white rounded-3xl p-8 flex flex-col space-y-4`}>
                <Image
                    src="/assets/png/Wire.png"
                    alt="Wire Image"
                    width={100}
                    height={100}
                    className="absolute top-0 left-[-20px] transform scale-x-[-1]"
                />
                <div>
                    <h2 className="text-white text-4xl font-bold mb-4 uppercase text-center">
                        {title}
                    </h2>
                </div>

                <div>

                    <p className="font-mono text-sm mb-10">
                        {content}
                    </p>
                    <Image
                        src="/assets/png/Wire.png"
                        alt="Wire Image"
                        width={100}
                        height={100}
                        className="absolute bottom-0 right-[-20px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default TextBox;