import {
  BsFillBarChartLineFill,
  BsFillLightningChargeFill,
} from 'react-icons/bs';
import { IoTime } from 'react-icons/io5';

import WhyUs from '../components/about/WhyUs';
import FaqSection from '../components/faq/FaqSection';
import TrustedBrands from '../components/TrustedBrands';
import Chip from '../components/ui/Chip';
import GradientText from '../components/ui/GradientText';

const WhoWeAreData = [
  {
    icon: <BsFillLightningChargeFill className="w-6 h-6 text-white" />,
    title: '95% Faster',
    description:
      'Clients see improved efficiency within the first three months of usage.',
  },

  {
    icon: <IoTime className="w-6 h-6 text-white" />,
    title: '1M+ Hours',
    description:
      'Reducing manual work and boosting productivity through automation.',
  },

  {
    icon: <BsFillBarChartLineFill className="w-6 h-6 text-white" />,
    title: '1.5K Clients',
    description:
      'AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.',
  },
];

const valuesData = [
  {
    icon: <BsFillLightningChargeFill className="w-6 h-6 text-white" />,
    title: '95% Faster',
    description:
      'Clients see improved efficiency within the first three months of usage.',
  },

  {
    icon: <IoTime className="w-6 h-6 text-white" />,
    title: '1M+ Hours',
    description:
      'Reducing manual work and boosting productivity through automation.',
  },

  {
    icon: <BsFillBarChartLineFill className="w-6 h-6 text-white" />,
    title: '1.5K Clients',
    description:
      'AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.',
  },
];

function About() {
  return (
    <section className="min-h-screen text-white flex flex-col items-center justify-center px-4 py-16 pt-30">
      <div className="w-full flex flex-col items-center justify-center gap-7">
        <Chip text=" About Us" />
        {/* Gradient Heading & subheading*/}
        <GradientText
          title="Helping Businesses Grow"
          subheading="Wellorgs helps businesses streamline operations and grow faster with AI-powered solutions."
        />
        <TrustedBrands showParticleBackground={false} />
      </div>
      <div className="max-w-6xl w-full flex flex-col items-center justify-center gap-15 px-6 text-center mx-auto ">
        <div className="w-full flex flex-col items-center justify-center gap-7">
          <Chip text=" Who We Are" />
          {/* Gradient Heading & subheading*/}
          <GradientText
            title="Who We Are "
            subheading="Wellorgs is a team of innovators dedicated to making AI automation simple and effective. We help businesses streamline workflows, boost efficiency, and scale with smart, AI-driven solutions."
          />
        </div>
        {/* Who We Are Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {WhoWeAreData.map((data, index) => (
            <div
              key={index}
              className="bg-gradient-benefit border border-neutral-800 rounded-md p-6 text-left hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300"
            >
              <div className="mb-3">{data.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* values */}
      <div className="max-w-6xl w-full flex flex-col items-center justify-center gap-15 px-6 text-center mx-auto ">
        <div className="w-full flex flex-col items-center justify-center gap-7">
          <Chip text=" our values" />
          {/* Gradient Heading & subheading*/}
          <GradientText
            title="The Values Behind Wellorgs AI "
            subheading="Our values shape everything we do at Wellorgs. From innovation to integrity, we’re committed to building AI solutions that empower businesses and drive real impact."
          />
        </div>
        {/* values Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {valuesData.map((data, index) => (
            <div
              key={index}
              className="bg-gradient-benefit border border-neutral-800 rounded-md p-6 text-left hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300"
            >
              <div className="mb-3">{data.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <WhyUs />

      <FaqSection />
    </section>
  );
}

export default About;
