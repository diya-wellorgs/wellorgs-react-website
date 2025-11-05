import { cn } from '../../lib/utils';

export const Spotlight = ({ className, ref }) => {
  return (
    <div
      ref={ref}
      className={cn(
        'absolute z-10 pointer-events-none -top-34 left-34 bg-radial from-white/50 via-transparent to-transparent rounded-full h-68 aspect-square transition-all trasnform-gpu duration-200 will-change-transform -translate-x-full opacity-0',
        className,
      )}
    />
  );
};
