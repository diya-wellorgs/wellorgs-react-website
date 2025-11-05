'use client';

import { lazy, Suspense, useEffect, useRef, useState } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

export function SplineScene({ scene, className }) {
  const [show, setShow] = useState(false);

  function onLoad() {
    const canvas = document
      .getElementById('spline-canvas')
      .querySelector('canvas');
    const height = Number(canvas.height);
    const width = Number(canvas.width);
    const scale = 1.6;
    setTimeout(() => {
      canvas.height = height * scale;
      canvas.width = width * scale;
      canvas.style.transform = `translateX(${18.5}%)`;
    }, 100);

    setTimeout(() => {
      setShow(true);
    }, 100);
  }

  // ... (rest of the component) ...

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline
        id="spline-canvas"
        onLoad={onLoad}
        scene={scene}
        style={{
          opacity: show ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
          willChange: 'opacity',
        }}
        className={className}
      />
    </Suspense>
  );
}
