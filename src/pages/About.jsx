import {
  BsFillBarChartLineFill,
  BsFillLightningChargeFill,
} from 'react-icons/bs';
import { IoTime } from 'react-icons/io5';

import WhoWeAre from '../components/about/WhoWeAre';
import WhyUs from '../components/about/WhyUs';
import FaqSection from '../components/faq/FaqSection';
import TrustedBrands from '../components/TrustedBrands';
import Chip from '../components/ui/Chip';
import GradientText from '../components/ui/GradientText';
import Values from './Values';

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

      <WhoWeAre />

      {/* values */}
      <Values />
      <WhyUs />

      <FaqSection />
    </section>
  );
}

export default About;
