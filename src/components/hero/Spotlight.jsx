import { cn } from '../../lib/utils';

export const Spotlight = ({ className, ref }) => {
  return (
    <div
      ref={ref}
      className={cn(
        'fixed -z-50 -top-34 left-34 bg-radial from-white/50 via-transparent to-transparent rounded-full h-68 aspect-square transition-all trasnform-gpu duration-200 will-change-transform -translate-x-[100%]',
        className,
      )}
    />
  );
};
