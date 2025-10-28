import ServiceTag from './ServiceTag';

export default function ServiceCard({
  tag,
  title,
  description,
  tags = [],

  reverse,
}) {
  return (
    <section
      className={`flex flex-col md:flex-row ${
        reverse ? 'md:flex-row-reverse' : ''
      } items-center justify-between gap-10 py-20`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="bg-[#0c0c0c] rounded-2xl p-6 shadow-lg border border-white/5"></div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2">
        <div className="mb-3">
          <span className="text-xs bg-[#111] text-white/80 px-3 py-1 rounded-md border border-white/10">
            {tag}
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          {title}
        </h3>
        <p className="text-white/70 text-base md:text-lg mb-6 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {tags.map((t, i) => (
            <ServiceTag
              key={i}
              label={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
