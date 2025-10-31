const heights = {
  1: 'invert h-25',
  2: 'h-45',
  4: 'h-45',
  5: 'h-35',
  6: 'h-20',
  7: 'h-35',
  9: 'h-45',
  13: 'h-35',
  14: 'h-30',
  15: 'h-50',
};

export default function BrandLogo({ logo, id }) {
  return (
    <div className="shrink-0">
      <img
        src={logo}
        alt="img"
        className={`${heights[id] ?? 'h-40'} w-auto hover:grayscale-0`}
      />
    </div>
  );
}
