import BenefitsSection from '../components/BenefitsSection';
import CallBanner from '../components/CallBanner';
import FaqSection from '../components/faq/FaqSection';
import GradientText from '../components/GradientText';
import Hero from '../components/Hero';
import ServicesSection from '../components/services/ServicesSection';
import StatisticsSection from '../components/StatisticsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TrustedBrands from '../components/TrustedBrands';

function Home() {
  return (
    <div>
      <Hero />
      <TrustedBrands />
      <StatisticsSection />
      <ServicesSection />
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
