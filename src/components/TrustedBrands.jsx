import { motion } from 'motion/react';

// import brandLogo1 from '../assets/brand-logo1.png';
// import brandLogo2 from '../assets/brand-logo2.avif';
// import brandLogo3 from '../assets/brand-logo3.png';
// import brandLogo4 from '../assets/brand-logo4.avif';
// import brandLogo5 from '../assets/brand-logo5.png';
// import brandLogo6 from '../assets/brand-logo6.avif';
// import brandLogo7 from '../assets/brand-logo7.png';
// import brandLogo8 from '../assets/brand-logo8.png';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';
import logo8 from '../assets/logo8.png';
import logo9 from '../assets/logo9.png';
import logo10 from '../assets/logo10.png';
import logo11 from '../assets/logo11.png';
import logo12 from '../assets/logo12.png';
import logo13 from '../assets/logo13.png';
import logo14 from '../assets/logo14.png';
import logo15 from '../assets/logo15.png';
import BrandLogo from './BrandLogo';

const brands = [
  // { id: 1, logo: brandLogo1, alt: 'Semaphore' },
  // { id: 2, logo: brandLogo2, alt: 'Better Medicare Alliance' },
  // { id: 3, logo: brandLogo3, alt: 'LinkedIn' },
  // { id: 4, logo: brandLogo4, alt: 'Synthesia' },
  // { id: 5, logo: brandLogo5, alt: 'Shaadi' },
  // { id: 6, logo: brandLogo6, alt: 'AmplifyAI' },
  // { id: 7, logo: brandLogo7, alt: 'EmployoAI' },
  // {
  //   id: 8,
  //   logo: brandLogo8,
  //   alt: 'Wellorgs',
  //   className: 'invert',
  // },
  { id: 1, logo: logo1 },
  { id: 2, logo: logo2 },
  { id: 3, logo: logo3 },
  { id: 4, logo: logo4 },
  { id: 5, logo: logo5 },
  { id: 6, logo: logo6 },
  { id: 7, logo: logo7 },
  { id: 8, logo: logo8 },
  { id: 9, logo: logo9 },
  { id: 10, logo: logo10 },
  { id: 11, logo: logo11 },
  { id: 12, logo: logo12 },
  { id: 13, logo: logo13 },
  { id: 14, logo: logo14 },
  { id: 15, logo: logo15 },
  { id: 1, logo: logo1 },
  { id: 2, logo: logo2 },
  { id: 3, logo: logo3 },
  { id: 4, logo: logo4 },
  { id: 5, logo: logo5 },
  { id: 6, logo: logo6 },
  { id: 7, logo: logo7 },
  { id: 8, logo: logo8 },
  { id: 9, logo: logo9 },
  { id: 10, logo: logo10 },
  { id: 11, logo: logo11 },
  { id: 12, logo: logo12 },
  { id: 13, logo: logo13 },
  { id: 14, logo: logo14 },
  { id: 15, logo: logo15 },
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
          className="flex gap-16 w-fit items-center px-12"
          animate={{ x: '-165%' }}
          transition={{
            repeat: Infinity,
            duration: 20,
            delay: 1,
            ease: 'linear',
          }}
        >
          {brands.map((brand, index) => (
            <BrandLogo
              id={brand.id}
              key={index}
              logo={brand.logo}
            />
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black via-transparent to-black"></div>
      </div>
    </section>
  );
}
