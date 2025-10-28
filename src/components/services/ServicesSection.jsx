import GradientText from '../GradientText';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const services = [
    {
      tag: 'Project Lifecycle',
      title: 'From Contract to Launch',
      description:
        'We craft end-to-end platforms – AI SaaS dashboards, AI-Feedback systems, Intelligent softwares, and Education systems, so you can launch confidently and grow without limits.',
      tags: ['Contract Signed', 'Development', 'Deployment'],

      reverse: false,
    },
    {
      tag: 'Smart Assistant',
      title: 'Delegate Your Day-to-Day Tasks',
      description:
        'From managing calendars to drafting emails and summarizing meetings, we can build AI assistants that work around the clock to keep your business running smarter and faster.',
      tags: ['Chatbots', 'Persona Bots', 'Many more'],

      reverse: true,
    },
    {
      tag: 'Sales & Marketing',
      title: 'Accelerate Sales Growth',
      description:
        'AI tools for personalized outreach and automated content creation that scale your sales efforts and build a stronger brand presence.',
      tags: ['Auto-Emailer', 'Content', 'Smart Auto-reply'],

      reverse: false,
    },
    {
      tag: 'Custom Projects',
      title: 'Build Smarter Systems',
      description:
        "Whether you're starting from scratch or enhancing an existing system, we offer strategic consulting and develop custom AI projects aligned with your unique goals.",
      tags: ['Custom AI', 'System Design', 'Consulting'],

      reverse: true,
    },
  ];

  return (
    <div className="bg-black text-white px-6 md:px-16 lg:px-28 py-28">
      <div className="text-center mb-24">
        <button className="text-sm bg-[#111] text-white/80 border border-white/10 px-4 py-1 rounded-md mb-6">
          Our Services
        </button>
        <GradientText text="AI Solutions That Take Your Business to the Next Level" />
        <p className="mt-4 text-white/60 text-lg">
          We design, develop, and implement automation tools that help you work
          smarter, not harder.
        </p>
      </div>

      {/* Services Cards */}
      <div className="flex flex-col gap-24">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
          />
        ))}
      </div>
    </div>
  );
}
