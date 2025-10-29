export default function RotatingOrb() {
  return (
    <div className="relative blur-[1px] opacity-100 w-15 h-15 flex items-center justify-center">
      <div className="absolute w-full h-full bg-gradient-tertiary rounded-full animate-[rotate_4s_linear_infinite]" />
      <div className="absolute w-2/3 h-2/3 bg-gradient-secondary rounded-full animate-[rotate-reverse_4s_linear_infinite]" />
    </div>
  );
}
