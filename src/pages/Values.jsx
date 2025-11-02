import {
  PiHandshakeFill,
  PiLightbulbFill,
  PiRocketLaunchFill,
} from 'react-icons/pi';

import Chip from '../components/ui/Chip';
import GradientText from '../components/ui/GradientText';
import { CustomersIcon } from '../icons';

const valuesData = [
  {
    icon: <PiLightbulbFill className="w-7 h-7 text-white" />,
    title: 'Driving Innovation Forward',
    description:
      'We embrace cutting-edge AI to create smarter, more efficient automation solutions.',
  },

  {
    icon: <PiHandshakeFill className="w-7 h-7 text-white" />,
    title: 'Committed to Integrity & Trust',
    description:
      'Trust and transparency are at the core of everything we do for our clients.',
  },

  {
    icon: <PiRocketLaunchFill className="w-7 h-7 text-white" />,
    title: 'Empowering Business Growth',
    description:
      'We help businesses scale faster with AI-driven efficiency, reducing manual tasks and unlocking new opportunities.',
  },
  {
    icon: <CustomersIcon className="w-7 h-7 text-white" />,
    title: ' Putting Customers First',
    description:
      'Your success is our priority—we build solutions that truly make an impact.',
  },
];

const Values = () => {
  return (
    <div className="max-w-6xl w-full flex flex-col items-center justify-center gap-15 px-6 text-center mx-auto  ">
      <div className="w-full flex flex-col items-center justify-center gap-7">
        <Chip text=" our values" />
        {/* Gradient Heading & subheading*/}
        <GradientText
          title="The Values Behind Wellorgs AI "
          subheading="Our values shape everything we do at Wellorgs. From innovation to integrity, we’re committed to building AI solutions that empower businesses and drive real impact."
        />
      </div>
      {/* values Cards */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 values-bg-gradient max-w-4xl">
        {valuesData.map((data, index) => (
          <div
            key={index}
            className="bg-[#0d0d0dcc] border border-neutral-800 rounded-md py-5 px-7.5 text-left hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] flex flex-col  gap-5"
          >
            <div className="flex gap-2">
              <div className="">{data.icon}</div>
              <h3 className="text-xl font-semibold ">{data.title}</h3>
            </div>
            <p className=" text-sm leading-relaxed">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Values;
