export default function GradientText({
  title,
  subheading,
  policies = false,
  legal = false,
}) {
  return (
    <div>
      <h2
        className={`text-[38px] md:text-[74px] font-instrument font-semibold leading-[1.1em] text-center text-gradient text-transparent pb-3 bg-clip-text ${legal ? 'legal-text-gradient' : ''}`}
      >
        {title}
      </h2>
      <p
        className={`text-[18px] max-w-[600px] mx-auto text-center font-medium leading-[1.5em] tracking-[-0.02em]  ${policies ? 'text-[#febe31]' : 'text-[#cccccc]'}`}
      >
        {subheading}
      </p>
    </div>
  );
}
