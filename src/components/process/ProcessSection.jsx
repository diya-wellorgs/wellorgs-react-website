import ProcessCard from './ProcessCard';
import processData from './ProcessData';

export default function ProcessSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-block mb-4">
          <span className="bg-neutral-900 border border-neutral-800 text-sm px-4 py-1 rounded-md">
            Our Process
          </span>
        </div>

        {/* Gradient Title */}
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gradient text-transparent bg-clip-text leading-tight">
          Our Simple, Smart, and Scalable Process
        </h2>

        <p className="text-gray-300 text-lg mb-16 max-w-2xl mx-auto">
          We design, develop, and implement automation tools that help you work
          smarter, not harder.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 max-w-4xl mx-auto">
          {processData.map((item) => (
            <ProcessCard
              key={item.step}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
