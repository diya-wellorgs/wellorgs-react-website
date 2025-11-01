const heights = {
  // 1: ' h-50 ',
  // 2: ' h-50 ',
  // 3: 'h-50',
  // 2: 'h-30',
  // 2: 'h-20',
  5: 'h-10',
  6: 'h-10',
  3: 'h-12',
  4: 'invert h-23 ',
  8: 'h-20',
  12: 'h-20',
  16: 'h-23',
  2: 'h-18',
  13: 'h-12',
  14: 'h-12',
  15: 'h-12',

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
    <div className="shrink-0  ">
      <img
        src={logo}
        alt="img"
        className={`${heights[id]}  h-8 w-auto hover:grayscale-0`}
      />
    </div>
  );
}
