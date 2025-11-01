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
  const spotlightRef = useRef(null);
  const navigate = useNavigate();

  // const mousePosition = useRef({ x: 0, y: 0 });
  const intervalRef = useRef(null);

  const updateElementPosition = (x, y) => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;
    spotlight.style.setProperty('transform', `translate(${x}px, ${y}px)`);
  };

  function handleMouseMoveWrapper() {
    let x = 0,
      y = 0;
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const spotlight = spotlightRef.current;

      if (!spotlight) return;

      const mouseX = clientX - spotlight.offsetWidth / 6;
      const mouseY = clientY - spotlight.offsetHeight;

      x = mouseX;
      y = mouseY;
    };

    if (intervalRef.current === null) {
      intervalRef.current = window.setInterval(
        () => updateElementPosition(x, y),
        100,
      );
    }

    return handleMouseMove;
  }

  const handleMouseMove = useMemo(handleMouseMoveWrapper, []);

  function mouseStateHandler(type) {
    if (type === 'mouseleave') {
      spotlightRef.current.style.setProperty('opacity', '0');
    } else if (type === 'mouseenter') {
      spotlightRef.current.style.setProperty('opacity', '1');
    }
  }

  return (
    <Card
      onMouseMove={handleMouseMove}
      onMouseLeave={() => mouseStateHandler('mouseleave')}
      onMouseEnter={() => mouseStateHandler('mouseenter')}
      className="w-full bg-black/[0.96] relative overflow-hidden contain-paint"
    >
      <Spotlight ref={spotlightRef} />

      <div className="relative min-h-screen overflow-visible">
        {/* Left content */}
        <div className="flex relative z-10 pt-20 max-w-4xl mx-auto  flex-col items-center  justify-center gap-5 ">
          <div className="flex bg-[#0d0e13] border border-neutral-800 p-px rounded-full items-center justify-center">
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
          <h1 className="text-4xl md:text-[72px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
            Intelligent Automation for Modern Businesses.
          </h1>
          <p className="text-[18px] font-medium text-neutral-300">
            Wellorgs brings AI automation to your fingertips & streamline tasks.
          </p>
          <div className="flex gap-32 items-center justify-center pt-4">
            <Button
              text="Get in touch"
              className="py-1"
              onClick={() => navigate('/contact')}
            />
            <Chip
              text="View services"
              onClick={onChipClick}
            />
          </div>
        </div>

        {/* Right content */}
        <div className=" absolute top-[40%] left-1/2 -translate-x-1/2 right-0 w-[60vw] z-10">
          {/* <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" /> */}
        </div>
        {/* <div className="hero-bg-gradient z-20 bottom-0 left-0 right-0 absolute h-30 w-full "></div> */}
        <div className="absolute translate-y-1/2 -bottom-6 left-0 right-0 w-full">
          <GradientGlow />
        </div>
      </div>
    </Card>
  );
}
