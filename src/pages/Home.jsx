import GradientText from '../components/GradientText';
import Hero from '../components/Hero';
import ServicesSection from '../components/services/ServicesSection';
import StatisticsSection from '../components/StatisticsSection';
import TrustedBrands from '../components/TrustedBrands';

function Home() {
  return (
    <div>
      <Hero />
      <TrustedBrands />
      <StatisticsSection />
      <ServicesSection />
    </div>
  );
}

export default Home;
