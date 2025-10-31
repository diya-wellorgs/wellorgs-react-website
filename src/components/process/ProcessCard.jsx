export default function ProcessCard({ step, title, description, Visual }) {
  return (
    <div className="bg-[#0d0d0dcc] border border-neutral-800 rounded-md p-6 text-left hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300">
      <span className="inline-block text-xs  border border-neutral-800 px-2 py-1 rounded-sm  mb-3">
        Step {step}
      </span>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-[#cccccc] text-[16px] tracking-[-0.02em] leading-[1.4em] mb-5 ">
        {description}
      </p>

      {/* Render visual component */}
      {Visual && (
        <div className="overflow-hidden ">
          <Visual />
        </div>
      )}
    </div>
  );
}
