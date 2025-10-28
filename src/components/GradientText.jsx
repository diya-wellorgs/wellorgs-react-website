export default function GradientText({ text }) {
  return (
    <h2 className="text-5xl md:text-6xl font-bold text-center text-gradient text-transparent bg-clip-text">
      {text}
    </h2>
  );
}
