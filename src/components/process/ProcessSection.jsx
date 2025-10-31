import Chip from '../ui/Chip';
import GradientText from '../ui/GradientText';
import ProcessCard from './ProcessCard';
import processData from './ProcessData';

export default function ProcessSection() {
  return (
    <section className="bg-black text-white pt-20">
      <div className="w-full flex flex-col items-center justify-center gap-15 px-6 text-center mx-auto">
        {/* Badge */}

        <div className="w-full flex flex-col items-center justify-center gap-7">
          <Chip text="Our Process" />

          {/* Gradient Title */}
          <GradientText
            title="Our Simple, Smart, and Scalable Process"
            subheading=" We design, develop, and implement automation tools that help you work
          smarter, not harder."
          />
        </div>

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
