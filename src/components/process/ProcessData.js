import Analyze from './visuals/Analyze';
import { Develop } from './visuals/Develop';
import Integrate from './visuals/Integrate';
import Optimize from './visuals/optimization/Optimize';

// import Integrate from './visuals/Integrate';
// import Optimize from './visuals/Optimize';

const processData = [
  {
    step: 1,
    title: 'Smart Analyzing',
    description:
      'We assess your needs and identify AI solutions to streamline workflows and improve efficiency.',
    Visual: Analyze,
  },
  {
    step: 2,
    title: 'AI Development',
    description:
      'Our team builds intelligent automation systems tailored to your business processes.',
    Visual: Develop,
  },
  {
    step: 3,
    title: 'Seamless Integration',
    description:
      'We smoothly integrate AI solutions into your existing infrastructure with minimal disruption.',
    Visual: Integrate,
  },
  {
    step: 4,
    title: 'Continuous Optimization',
    description:
      'We refine performance, analyze insights, and enhance automation for long-term growth.',
    Visual: Optimize,
  },
];

export default processData;
