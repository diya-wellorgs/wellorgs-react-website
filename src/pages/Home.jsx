import { Spline } from 'lucide-react';

import BenefitsSection from '../components/BenefitsSection';
import CallBanner from '../components/CallBanner';
import FaqSection from '../components/faq/FaqSection';
import Footer from '../components/footer/Footer';
import GradientText from '../components/GradientText';
import { SplineSceneBasic } from '../components/hero/Demo';
import Hero from '../components/hero/Hero';
import ProcessSection from '../components/process/ProcessSection';
import ServicesSection from '../components/services/ServicesSection';
import StatisticsSection from '../components/StatisticsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TrustedBrands from '../components/TrustedBrands';
import WorkflowIntegrations from '../components/workflow/WorkflowIntegrations';

function Home() {
  return (
    <div className="pt-40">
      <SplineSceneBasic />
      <TrustedBrands />
      <StatisticsSection />
      <ServicesSection />
      <WorkflowIntegrations />
      <ProcessSection />
      <BenefitsSection />
      <TestimonialsSection />
      <div className="min-h-screen bg-black text-white">
        <FaqSection />
        <CallBanner />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
