import { useEffect, useMemo, useRef } from 'react';

import { Spotlight } from './hero/Spotlight';

export function SpotlightContainer() {
  const containerRef = useRef(null);
  const spotlightRef = useRef(null);

  const mousePosition = useRef({ x: 0, y: 0 });
  const intervalRef = useRef(null);

  const updateElementPosition = (x, y) => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;
    spotlight.style.setProperty('transform', `translate(${x}px, ${y}px)`);
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const spotlight = spotlightRef.current;

    if (!spotlight) return;

    const mouseX = clientX;
    const mouseY = clientY + window.scrollY;

    mousePosition.current.x = mouseX;
    mousePosition.current.y = mouseY;

    if (intervalRef.current === null && mouseY < window.innerHeight) {
      intervalRef.current = window.setInterval(
        () =>
          updateElementPosition(
            mousePosition.current.x,
            mousePosition.current.y,
          ),
        100,
      );

      spotlightRef.current.style.setProperty('opacity', '1');
    }

    if (mouseY >= window.innerHeight && intervalRef.current !== null) {
      console.log('removeEventListener');
      window.clearInterval(intervalRef.current);
      spotlightRef.current.style.setProperty('opacity', '0');
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-screen h-screen z-60 overflow-clip pointer-events-none gradient-mask">
      <Spotlight ref={spotlightRef} />
    </div>
  );
}
