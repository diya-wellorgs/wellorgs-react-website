export default function ServiceTag({ label }) {
  return (
    <span className="text-xs md:text-sm bg-[#111] text-white/90 border border-white/10 rounded-md px-3 py-1">
      {label}
    </span>
  );
}
