import { useRef } from 'react';

import { Spline } from 'lucide-react';

import BenefitsSection from '../components/BenefitsSection';
import CallBanner from '../components/CallBanner';
import FaqSection from '../components/faq/FaqSection';
import Footer from '../components/footer/Footer';
import { SplineSceneBasic } from '../components/hero/Hero';
import ParticleBackground from '../components/hero/ParticleBackground';
import Navbar from '../components/Navbar';
import ProcessSection from '../components/process/ProcessSection';
import ServicesSection from '../components/services/ServicesSection';
import StatisticsSection from '../components/StatisticsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TrustedBrands from '../components/TrustedBrands';
import GradientText from '../components/ui/GradientText';
import WorkflowIntegrations from '../components/workflow/WorkflowIntegrations';

function Home() {
  const servicesRef = useRef(null);

  const handleScrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="">
      <div className="relative max-w-screen">
        <Navbar />
        <ParticleBackground />
      </div>
      <SplineSceneBasic onChipClick={handleScrollToServices} />

      <TrustedBrands />

      <StatisticsSection />
      <div ref={servicesRef}>
        <div ref={servicesRef}>
          <ServicesSection />
        </div>
      </div>
      <WorkflowIntegrations />
      <ProcessSection />
      <BenefitsSection />
      <TestimonialsSection />
      <div className="min-h-screen bg-black text-white">
        <FaqSection />
        <CallBanner />
      </div>
    </div>
  );
}

export default Home;
