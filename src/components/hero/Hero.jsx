'use client';

import { useEffect, useMemo, useRef } from 'react';

import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

import { debounce } from '../../lib/utils';
import Button from '../ui/Button';
import Chip from '../ui/Chip';
import GradientGlow from '../ui/GradientEffect';
import { Card } from './Card';
import ParticleBackground from './ParticleBackground';
import { SplineScene } from './Splite';
import { Spotlight } from './Spotlight';

// import { Card } from '@/components/ui/card';
// import { SplineScene } from '@/components/ui/splite';
// import { Spotlight } from '@/components/ui/spotlight';

export function SplineSceneBasic({ onChipClick }) {
  const navigate = useNavigate();

  return (
    <Card
      // onMouseMove={handleMouseMove}
      // onMouseLeave={() => mouseStateHandler('mouseleave')}
      // onMouseEnter={() => mouseStateHandler('mouseenter')}
      className="w-full bg-black/[0.96] relative overflow-hidden contain-paint"
    >
      <div className="relative min-h-screen overflow-visible">
        {/* Left content */}
        <div className="flex relative pt-20 max-w-4xl mx-auto  flex-col items-center  justify-center gap-5 z-60 pointer-events-none">
          <div className="flex bg-[#0d0e13] border border-neutral-800 p-px rounded-full items-center justify-center pointer-events-none">
            <p className="bg-tertiary rounded-xl px-3 text-12  py-0.5">New</p>
            <motion.p
              className="text-12 text-white whitespace-nowrap overflow-hidden"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.6,
                ease: 'easeOut',
              }}
            >
              <span className="px-3">Welcome to Wellorgs AI</span>
            </motion.p>
          </div>
          <div className="*:pointer-events-none flex flex-col items-center justify-center gap-4 z-10">
            <h1 className="text-4xl md:text-[72px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
              Intelligent Automation for Modern Businesses.
            </h1>
            <p className="text-[18px] font-medium text-neutral-300">
              Wellorgs brings AI automation to your fingertips & streamline
              tasks.
            </p>
          </div>
          <div className="flex gap-32 items-center justify-center pt-4 pointer-events-auto">
            <Button
              text="Get in touch"
              className="py-1"
              onClick={() => navigate('/contact')}
            />
            <Chip
              className="cursor-pointer hover:brightness-150"
              text="View services"
              onClick={onChipClick}
            />
          </div>
        </div>

        {/* <div className="isolate"> */}
        {/* Right content */}
        <div className=" absolute bottom-0 h-screen w-full z-50 overflow-hidden gradient-mask">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            // className="bg-red-400"
          />
        </div>

        <div className="absolute translate-y-1/2 -bottom-6 left-0 right-0 w-full h-[80%]">
          <GradientGlow />
          {/* </div> */}
        </div>
      </div>
    </Card>
  );
}
