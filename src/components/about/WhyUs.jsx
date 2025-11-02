import React from 'react';

import { CheckMarkIcon } from '../../icons';
import Chip from '../ui/Chip';
import GradientText from '../ui/GradientText';

const WhyUs = () => {
  return (
    <section className=" text-white py-25 flex flex-col items-center justify-center">
      {/* Section Button */}
      <div className="w-full flex flex-col items-center justify-center gap-7">
        <Chip text=" Why us" />
        {/* Gradient Heading & subheading*/}
        <GradientText
          title="What makes us stand out in the industry "
          subheading="Discover how our innovative strategies, data-driven approach, and commitment to results set us apart from the competition"
        />
      </div>

      {/* Cards Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[850px] w-full ">
        {/* Manual Work Card */}
        <div className="border border-neutral-800 rounded-md py-5 px-7.5  shadow-inner">
          <h3 className="text-xl font-semibold mb-6">Manual Work</h3>
          <ul className="space-y-1 text-neutral-300">
            {[
              'Prone to Human Errors',
              'Limited by Work Hours',
              'High Labor Costs & Overhead',
              'Slow & Time-Consuming Tasks',
              'Disconnected & Repetitive Work',
              'Inconsistent & Dependent on Workforce',
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3"
              >
                <span className="text-gray-300 ">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Solution Card */}
        <div className="footer-bg-gradient border border-neutral-800 rounded-md py-5 px-7.5 shadow-inner">
          <h3 className="text-xl font-semibold mb-6">Our Solution</h3>
          <ul className="space-y-1 text-neutral-300">
            {[
              'Smart, AI-Driven Decisions',
              '24/7 Automated Workflows',
              'Scalable & Cost-Effective',
              'Instant Data Processing',
              'Seamless System Integration',
              'Consistent & Reliable Output',
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3"
              >
                <CheckMarkIcon className="w-4.5 h-5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
