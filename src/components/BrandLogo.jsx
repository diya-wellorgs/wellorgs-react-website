const heights = {
  // 1: ' h-50 ',
  // 2: ' h-50 ',
  // 3: 'h-50',
  // 2: 'h-30',
  2: 'h-22.5 -mt-1.5',
  3: 'h-12',
  4: 'invert h-23 ',
  5: 'h-10.5 mt-2',
  6: 'h-12.5 -mt-4.5',
  7: 'h-13',
  8: 'h-20',
  9: 'h-11.5 mt-1.5',
  10: 'h-10.5 -mt-2',
  11: 'h-11.5',
  12: 'h-20',
  13: 'h-12 -mt-4',

  14: 'h-9.5 mt-1.5',
  15: 'h-17 mt-1',
  16: 'h-23',

  // 6: 'h-20',
  // 8: 'h-20',

  // 9: 'h-10',
  // 8: 'h-26',
  // 6: 'h-26',
};

// { id: 1, logo: movingMiles },
// { id: 2, logo:  raya},
// { id: 3, logo: employoAi },
// { id: 4, logo: punjabGovtLogo },
// { id: 5, logo: bold },
// { id: 6, logo: shadicom },
// { id: 7, logo: synthesia },
// { id: 8, logo: doorloop },
// { id: 9, logo: neyuAI },
// { id: 10, logo: studybot },
// { id: 11, logo: linkedIn },
// { id: 12, logo: medhoco },
// { id: 13, logo: toyHotel },
// { id: 14, logo: omg },
// { id: 15, logo: Emerkit },
// { id: 16, logo: llu},

export default function BrandLogo({ logo, id }) {
  return (
    <div className="shrink-0 ">
      <img
        src={logo}
        alt="img"
        className={`h-8 ${heights[id]} w-auto hover:grayscale-0`}
      />
    </div>
  );
}
