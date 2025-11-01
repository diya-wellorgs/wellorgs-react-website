export default function Chip({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-sm bg-[#111] text-white/80 border border-white/10 px-4 py-1 rounded-md "
    >
      {text}
    </button>
  );
}
