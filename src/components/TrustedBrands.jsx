import { motion } from 'motion/react';

import brandLogo1 from '../assets/brand-logo1.png';
import brandLogo2 from '../assets/brand-logo2.avif';
import brandLogo3 from '../assets/brand-logo3.png';
import brandLogo4 from '../assets/brand-logo4.avif';
import brandLogo5 from '../assets/brand-logo5.png';
import brandLogo6 from '../assets/brand-logo6.avif';
import brandLogo7 from '../assets/brand-logo7.png';
import BrandLogo from './BrandLogo';

const brands = [
  { id: 1, logo: brandLogo1, alt: 'Semaphore' },
  { id: 2, logo: brandLogo2, alt: 'Better Medicare Alliance' },
  { id: 3, logo: brandLogo3, alt: 'LinkedIn' },
  { id: 4, logo: brandLogo4, alt: 'Synthesia' },
  { id: 5, logo: brandLogo5, alt: 'Shaadi' },
  { id: 6, logo: brandLogo6, alt: 'AmplifyAI' },
  { id: 7, logo: brandLogo7, alt: 'EmployoAI' },
];

export default function TrustedBrands() {
  return (
    <section className="relative flex flex-col items-center text-center overflow-hidden bg-primary text-secondary py-20">
      {/* Heading */}
      <h3 className="text-sm text-gray-300 z-10 ">
        Over <span className="font-semibold">150+</span> business trust us
      </h3>

      {/* Logos Slider */}
      <div className="relative w-full max-w-3xl overflow-hidden z-10">
        <motion.div
          className="flex gap-16 justify-center items-center"
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: 'linear',
          }}
        >
          {brands.map((brand, index) => (
            <BrandLogo
              key={index}
              logo={brand.logo}
              alt={brand.alt}
            />
          ))}
          {brands.map((brand, index) => (
            <BrandLogo
              key={index}
              logo={brand.logo}
              alt={brand.alt}
            />
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black via-transparent to-black"></div>
      </div>
    </section>
  );
}
