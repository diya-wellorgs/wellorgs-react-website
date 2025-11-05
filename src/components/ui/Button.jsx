import { cn } from '../../lib/utils';
import { ShimmerButton } from './ShimmerButton';

function Button({ text, className, ...props }) {
  return (
    <ShimmerButton
      borderRadius="6px"
      className={cn(
        'px-[13px] py-[9px]  text-[14px] cursor-pointer box-shadow border border-[#ffffff1a] bg-tertiary roumd pointer-cursor hover:brightness-120',
        className,
      )}
      {...props}
    >
      {text}
    </ShimmerButton>
  );
}

export default Button;
