import { div } from 'motion/react-client';
import {
  BsFillBarChartLineFill,
  BsFillLightningChargeFill,
} from 'react-icons/bs';
import { IoTime } from 'react-icons/io5';

import Chip from '../ui/Chip';
import GradientText from '../ui/GradientText';

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
      'Companies have streamlined their workflows with Wellorgs AI solutions.',
  },
];

const WhoWeAre = () => {
  return (
    <div className="max-w-4xl w-full flex flex-col items-center justify-center gap-15 py-[100px] text-center mx-auto ">
      <div className="w-full flex flex-col items-center justify-center gap-7">
        <Chip text=" Who We Are" />
        {/* Gradient Heading & subheading*/}
        <GradientText
          title="Who We Are "
          subheading="Wellorgs is a team of innovators dedicated to making AI automation simple and effective. We help businesses streamline workflows, boost efficiency, and scale with smart, AI-driven solutions."
        />
      </div>
      {/* Who We Are Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 ">
        {WhoWeAreData.map((data, index) => (
          <div
            key={index}
            className="whoweare-bg-gradient border border-neutral-800 rounded-md py-5 px-7.5 text-left hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300"
          >
            <div className="flex gap-2">
              <div className="">{data.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
            </div>
            <p className=" text-sm leading-relaxed">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
