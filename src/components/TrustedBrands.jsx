import { motion } from 'motion/react';
import { li } from 'motion/react-client';

import bold from '../assets/bold.png';
import doorloop from '../assets/doorloop.png';
import Emerkit from '../assets/Emerkit.png';
import employoAi from '../assets/employoAi.png';
import linkedIn from '../assets/linkedIn.png';
import llu from '../assets/llu.png';
import medhoco from '../assets/medhoco.png';
import movingMiles from '../assets/movingMiles.png';
import neyuAI from '../assets/neyuAi.png';
import omg from '../assets/omg.png';
import punjabGovtLogo from '../assets/punjabGov.png';
import raya from '../assets/raya.png';
import shadicom from '../assets/shadicom.png';
import studybot from '../assets/studybot.png';
import synthesia from '../assets/synthesia.png';
import toyHotel from '../assets/toyHotel.png';
import BrandLogo from './BrandLogo';
import ParticleBackground from './hero/ParticleBackground';

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
  { id: 1, logo: raya },
  { id: 2, logo: movingMiles },
  { id: 3, logo: employoAi },
  { id: 4, logo: punjabGovtLogo },
  { id: 5, logo: bold },
  { id: 6, logo: shadicom },
  { id: 7, logo: synthesia },
  { id: 8, logo: doorloop },
  { id: 9, logo: neyuAI },
  { id: 10, logo: studybot },
  { id: 11, logo: linkedIn },
  { id: 12, logo: medhoco },
  { id: 13, logo: toyHotel },
  { id: 14, logo: omg },
  { id: 15, logo: Emerkit },
  { id: 16, logo: llu },

  { id: 1, logo: raya },
  { id: 2, logo: movingMiles },
  { id: 3, logo: employoAi },
  { id: 4, logo: punjabGovtLogo },
  { id: 5, logo: bold },
  { id: 6, logo: shadicom },
  { id: 7, logo: synthesia },
  { id: 8, logo: doorloop },
  { id: 9, logo: neyuAI },
  { id: 10, logo: studybot },
  { id: 11, logo: linkedIn },
  { id: 12, logo: medhoco },
  { id: 13, logo: toyHotel },
  { id: 14, logo: omg },
  { id: 15, logo: Emerkit },
  { id: 16, logo: llu },
];

export default function TrustedBrands() {
  return (
    <section className="relative flex flex-col items-center text-center overflow-hidden bg-primary text-secondary py-20">
      {/* Heading */}

      <h3 className="text-sm text-gray-300 z-10 ">
        Over <span className="font-semibold">150+</span> business trust us
      </h3>

      {/* Logos Slider */}
      <div className="relative w-full pt-8  max-w-4xl overflow-hidden z-10">
        <motion.div
          className="flex gap-14 w-fit items-center px-[170px]"
          animate={{ x: '-190%' }}
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
