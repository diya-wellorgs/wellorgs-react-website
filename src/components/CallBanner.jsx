import React from 'react';

import { ArrowUpRight } from 'lucide-react';

import Button from './ui/Button';

const CallBanner = () => {
  return (
    <section className="w-full flex justify-center bg-black text-white">
      <div className="max-w-2xl w-full">
        <div className="rounded-2xl banner-bg-gradient p-12 text-center shadow-[0_0_40px_rgba(0,0,0,0.5)] py-20 gap-3 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-medium ">
            Let AI do the Work so
            <br /> you can <span className="text-gray-100">Scale Faster</span>
          </h2>

          <p className="text-gray-400 mt-1 text-lg">
            Book a Call Today and Start Automating
          </p>

          <Button
            text="Book border a free Call"
            className={'px-3 py-1.5'}
          />
        </div>
      </div>
    </section>
  );
};

export default CallBanner;
