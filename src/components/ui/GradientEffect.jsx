import * as React from 'react';

const GradientGlow = (props) => (
  //   <svg
  //     style={{ height: '100%', width: '100%' }}
  //     height="100%"
  //     width="100%"
  //     preserveAspectRatio="none"
  //     viewBox="0 0 1200 286"
  //   >
  <svg
    style={{
      '--gradient-glow-blur': '34px',
      height: '100%',
      width: '100%',
    }}
    width={1200}
    height={286}
    viewBox="0 -100 1200 586"
    fill="none"
    preserveAspectRatio="none"
    {...props}
  >
    <g
      opacity={0.8}
      style={{
        mixBlendMode: 'plus-lighter',
      }}
    >
      <g
        filter="blur(var(--gradient-glow-blur))"
        style={{
          mixBlendMode: 'lighten',
        }}
      >
        <path
          fill="var(--color-tertiary)"
          d="m997.135 75.614 193.385 43.027-18.58 98.075H990.747l-405.358-55.049 411.746-86.053Z"
        />
      </g>
      <g
        filter="blur(var(--gradient-glow-blur))"
        style={{
          mixBlendMode: 'lighten',
        }}
      >
        <rect
          width={325.216}
          height={286}
          x={694.568}
          fill="var(--color-tertiary)"
          rx={143}
        />
      </g>
      <g
        filter="blur(var(--gradient-glow-blur))"
        style={{
          mixBlendMode: 'lighten',
        }}
      >
        <rect
          width={180.03}
          height={205.009}
          x={430.91}
          y={67.07}
          fill="var(--color-tertiary)"
          rx={90.015}
        />
      </g>
      <g
        filter="blur(var(--gradient-glow-blur))"
        style={{
          mixBlendMode: 'lighten',
        }}
      >
        <rect
          width={179.888}
          height={232.14}
          x={319.021}
          y={40.318}
          fill="var(--color-tertiary)"
          rx={89.944}
        />
      </g>
      <g
        filter="blur(var(--gradient-glow-blur))"
        style={{
          mixBlendMode: 'lighten',
        }}
      >
        <path
          fill="var(--color-tertiary)"
          d="M550.543 40.813h155.639v182.23H550.543z"
        />
      </g>
      <g
        filter="blur(var(--gradient-glow-blur))"
        style={{
          mixBlendMode: 'plus-lighter',
        }}
      >
        <path
          fill="var(--color-tertiary)"
          d="m20.907 167.994 17.423-41.761 188.741-17.716-90.874 89.246 159.982 15.92-262.495 3.981-12.777-49.67Z"
        />
      </g>
      <g
        filter="blur(var(--gradient-glow-blur))"
        style={{
          mixBlendMode: 'lighten',
        }}
      >
        <path
          fill="var(--color-tertiary)"
          d="M98.727 83.522h295.017v154.389H98.727z"
        />
      </g>
      <g
        filter="blur(var(--gradient-glow-blur))"
        style={{
          mixBlendMode: 'plus-lighter',
        }}
      >
        <path
          fill="#fff"
          d="M474.466 145.532C288.869 145.271 0 175.271 0 175.271h938.479s-282.491-29.484-464.013-29.739Z"
        />
      </g>
      <g
        filter="blur(var(--gradient-glow-blur))"
        style={{
          mixBlendMode: 'plus-lighter',
        }}
      >
        <path
          fill="#fff"
          d="M1002.26 145.532c-79.014-.267-201.998 30.37-201.998 30.37h399.548s-120.27-30.109-197.55-30.37Z"
        />
      </g>
    </g>
  </svg>
  //   </svg>
);
export default GradientGlow;
