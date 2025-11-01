import React, { useEffect } from 'react';

import { cn } from '../../lib/utils';

export const Spotlight = ({ className, ref }) => {
  return (
    <div
      ref={ref}
      className={cn(
        'fixed top-0 left-0 bg-radial from-white/50 via-transparent to-transparent rounded-full h-68 aspect-square transition-all trasnform-gpu duration-200 will-change-transform -translate-x-full ',
        className,
      )}
    />
  );
};
