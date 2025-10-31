const heights = {
  1: 'invert h-35 ',
  4: 'h-25',
  9: 'h-25',
  10: 'h-23',
  14: 'h-18 w-18',
};

export default function BrandLogo({ logo, id }) {
  return (
    <div className="shrink-0 ">
      <img
        src={logo}
        alt="img"
        className={`${heights[id]} ${id === 1 && 'invert'} h-18 w-auto hover:grayscale-0`}
      />
    </div>
  );
}
