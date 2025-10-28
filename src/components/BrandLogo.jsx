export default function BrandLogo({ logo, alt }) {
  return (
    <div className="shrink-0  duration-600">
      <img
        src={logo}
        alt={alt}
        className="h-40   hover:grayscale-0 transition-all duration-600"
      />
    </div>
  );
}
