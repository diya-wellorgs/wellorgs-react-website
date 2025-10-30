import { cn } from '../../lib/utils';

function Button({ text, className, ...props }) {
  return (
    <button
      className={cn(
        'px-[13px] py-[9px] text-[14px] bg-tertiary rounded-md',
        className,
      )}
      {...props}
    >
      {text}
    </button>
  );
}

export default Button;
