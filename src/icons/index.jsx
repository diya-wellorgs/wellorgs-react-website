import { cn } from '../lib/utils';

export const BlueWave = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 930 358"
      className={cn('w-full h-auto', className)}
    >
      <path
        d="M 459 0 C 712.499 0 918 34.474 918 77 C 918 119.526 712.499 154 459 154 C 205.501 154 0 119.526 0 77 C 0 34.474 205.501 0 459 0 Z"
        transform="translate(6.309 102.112) rotate(-13 459 77)"
        fill="rgb(0, 48, 96)"
      />
    </svg>
  );
};
