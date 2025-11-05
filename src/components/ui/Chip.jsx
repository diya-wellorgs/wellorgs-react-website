// import  ShimmerButton  from './ShimmerButton';

import { cn } from '../../lib/utils';

export default function Chip({ text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'text-sm bg-[#111] text-white/80 border border-white/10 px-4 py-1 rounded-md ',
        className,
      )}
    >
      {text}
    </button>
  );
}
