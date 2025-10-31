import React from 'react';

import { SiDiscord } from 'react-icons/si'; // Using Discord icon for 'Your stack'

import RotatingOrb from '../../ui/RotatingOrb';

export default function Integrate() {
  return (
    <div className="relative flex items-center justify-center h-[180px]  rounded-md border border-neutral-800 px-8 py-6 w-full max-w-md mx-auto">
      {/* Connection Lines */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[1px] bg-neutral-700"></div>

      <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[55%] h-[1px] bg-neutral-700"></div>

      <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-[55%] h-[1px] bg-neutral-700"></div>

      {/* Content */}
      <div className="flex items-center justify-between w-full">
        {/* Left: Our solution */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-[60px] h-[60px] rounded-xl  flex items-center justify-center shadow-[0_0_15px_#1e1e25_inset]">
            <RotatingOrb />
          </div>
          <p className="text-sm text-gray-300">Our solution</p>
        </div>

        {/* Right: Your stack */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-[60px] h-[60px] rounded-xl  flex items-center justify-center shadow-[0_0_15px_#1e1e25_inset]">
            <SiDiscord className="text-[#5865F2] text-4xl" />
          </div>
          <p className="text-sm text-gray-300">Your stack</p>
        </div>
      </div>
    </div>
  );
}
