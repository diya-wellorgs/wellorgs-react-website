'use client';

import { useEffect, useMemo, useRef } from 'react';

import { debounce } from '../../lib/utils';
import Button from '../ui/Button';
import Chip from '../ui/Chip';
import { Card } from './Card';
import ParticleBackground from './ParticleBackground';
import { SplineScene } from './Splite';
import { Spotlight } from './Spotlight';

// import { Card } from '@/components/ui/card';
// import { SplineScene } from '@/components/ui/splite';
// import { Spotlight } from '@/components/ui/spotlight';

export function SplineSceneBasic() {
  const spotlightRef = useRef(null);

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
      className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden contain-paint"
    >
      <ParticleBackground />
      <Spotlight ref={spotlightRef} />

      <div className="flex h-full">
        {/* Left content */}
        <div className="flex  relative z-10 pl-40 max-w-3xl  flex-col items-center  justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pl-25">
            Intelligent Automation for Modern Businesses.
          </h1>
          <p className="mt-4 text-neutral-300 pl-18">
            Wellorgs brings AI automation to your fingertips & streamline tasks.
          </p>
          <div className="flex gap-3 items-center justify-center pt-4 pl-15">
            <Button
              text="Get in touch"
              className="py-1"
            />
            <Chip text="View services" />
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
