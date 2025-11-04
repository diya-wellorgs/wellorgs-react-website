import Chip from '../ui/Chip';
import GradientText from '../ui/GradientText';
import AssistantCard from './cards/AssistantCard';
import ContractCard from './cards/ContractCard';
import SalesCard from './cards/SalesCard';
import SystemCard from './cards/SystemCard';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const services = [
    {
      tag: 'Project Lifecycle',
      title: 'From Contract to Launch',
      description:
        'We craft end-to-end platforms – AI SaaS dashboards, AI-Feedback systems, Intelligent softwares, and Education systems, so you can launch confidently and grow without limits.',
      tags: ['Contract Signed', 'Development', 'Deployment'],
      cardComponent: <ContractCard />,
      reverse: false,
    },
    {
      tag: 'Smart Assistant',
      title: 'Delegate Your Day-to-Day Tasks',
      description:
        'From managing calendars to drafting emails and summarizing meetings, we can build AI assistants that work around the clock to keep your business running smarter and faster.',
      tags: ['Chatbots', 'Persona Bots', 'Many more'],
      cardComponent: <AssistantCard />,
      reverse: true,
    },
    {
      tag: 'Sales & Marketing',
      title: 'Accelerate Sales Growth',
      description:
        'AI tools for personalized outreach and automated content creation that scale your sales efforts and build a stronger brand presence.',
      tags: ['Auto-Emailer', 'Content', 'Smart Auto-reply'],
      cardComponent: <SalesCard />,
      reverse: false,
    },
    {
      tag: 'Custom Projects',
      title: 'Build Smarter Systems',
      description:
        "Whether you're starting from scratch or enhancing an existing system, we offer strategic consulting and develop custom AI projects aligned with your unique goals.",
      tags: ['Custom AI', 'System Design', 'Consulting'],
      cardComponent: <SystemCard />,
      reverse: true,
    },
  ];

  return (
    <div className=" w-full flex flex-col  gap-20 px-6  py-[100px]  mx-auto ">
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <Chip text="Our Services" />

        <GradientText
          title="AI Solutions That Take Your Business to the Next  Level"
          subheading=" We design, develop, and implement automation tools that help you work
          smarter, not harder."
        />
      </div>

      {/* Services Cards */}
      <div className="flex flex-col gap-24 max-w-5xl w-full mx-auto">
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
