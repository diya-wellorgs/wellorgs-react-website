const heights = {
  1: 'invert h-16',
  3: 'h-16',
  5: 'h-28',
  6: 'h-16',
  7: 'h-28',
  13: 'h-18',
  14: 'h-16',
};

export default function BrandLogo({ logo, id }) {
  return (
    <div className="shrink-0">
      <img
        src={logo}
        alt="img"
        className={`${heights[id] ?? 'h-35'} w-auto hover:grayscale-0`}
      />
    </div>
  );
}
