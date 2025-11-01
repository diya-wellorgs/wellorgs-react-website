import { cn } from '../lib/utils';

export const BlueWave = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 930 358"
      className={cn('w-full h-auto', className)}
    >
      <path
        d="M 459 0 C 712.499 0 918 34.474 918 77 C 918 119.526 712.499 154 459 154 C 205.501 154 0 119.526 0 77 C 0 34.474 205.501 0 459 0 Z"
        transform="translate(6.309 102.112) rotate(-13 459 77)"
        fill="rgb(0, 48, 96)"
      />
    </svg>
  );
};

//analyze.jsx
export const SystemCheckIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    color="var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))"
    style={{
      userSelect: 'none',
      width: '100%',
      height: '100%',
      display: 'inline-block',
      fill: 'var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))',
      color:
        'var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))',
      flexShrink: 0,
    }}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19 23.06 18.86 46 25.27 47 25.53a8 8 0 0 0 4.2 0c1-.26 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16Zm0 72c0 37.07-13.66 67.16-40.6 89.42a129.3 129.3 0 0 1-39.4 22.2 128.25 128.25 0 0 1-38.92-21.81C61.82 179.51 48 149.3 48 112V56h160Z" />
  </svg>
);

export const ProcessCheckIconIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    color="var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))"
    style={{
      userSelect: 'none',
      width: '100%',
      height: '100%',
      display: 'inline-block',
      fill: 'var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))',
      color:
        'var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))',
      flexShrink: 0,
    }}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M152 96h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8Zm-8 48h-32v-32h32Zm88 0h-16v-32h16a8 8 0 0 0 0-16h-16V56a16 16 0 0 0-16-16h-40V24a8 8 0 0 0-16 0v16h-32V24a8 8 0 0 0-16 0v16H56a16 16 0 0 0-16 16v40H24a8 8 0 0 0 0 16h16v32H24a8 8 0 0 0 0 16h16v40a16 16 0 0 0 16 16h40v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h40a16 16 0 0 0 16-16v-40h16a8 8 0 0 0 0-16Zm-32 56H56V56h144v144Z" />
  </svg>
);
export const SpeedCheckIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    color="var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))"
    style={{
      userSelect: 'none',
      width: '100%',
      height: '100%',
      display: 'inline-block',
      fill: 'var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))',
      color:
        'var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))',
      flexShrink: 0,
    }}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="m114.34 154.34 96-96a8 8 0 0 1 11.32 11.32l-96 96a8 8 0 0 1-11.32-11.32ZM128 88a63.9 63.9 0 0 1 20.44 3.33 8 8 0 1 0 5.11-15.16 80 80 0 0 0-105.06 84.71 8 8 0 0 0 7.94 7.12c.29 0 .59 0 .89-.05a8 8 0 0 0 7.07-8.83A64.92 64.92 0 0 1 64 152a64.07 64.07 0 0 1 64-64Zm99.74 13a8 8 0 0 0-14.24 7.3 96.27 96.27 0 0 1 5 75.71l-181.1-.07A96.24 96.24 0 0 1 128 56h.88a95 95 0 0 1 42.82 10.5 8 8 0 1 0 7.3-14.23 112 112 0 0 0-156.66 137A16.07 16.07 0 0 0 37.46 200h181.07a16 16 0 0 0 15.11-10.71 112.35 112.35 0 0 0-5.9-88.3Z" />
  </svg>
);

export const ManualWorkIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    color="var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))"
    style={{
      userSelect: 'none',
      width: '100%',
      height: '100%',
      display: 'inline-block',
      fill: 'var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))',
      color:
        'var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))',
      flexShrink: 0,
    }}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M168 104H88a40 40 0 0 0-40 40v8a40 40 0 0 0 40 40h80a40 40 0 0 0 40-40v-8a40 40 0 0 0-40-40Zm24 48a24 24 0 0 1-24 24H88a24 24 0 0 1-24-24v-8a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24Zm16-112a32.06 32.06 0 0 0-31 24H79a32 32 0 0 0-63 8v80a72.08 72.08 0 0 0 72 72h80a72.08 72.08 0 0 0 72-72V72a32 32 0 0 0-32-32Zm16 112a56.06 56.06 0 0 1-56 56H88a56.06 56.06 0 0 1-56-56V72a16 16 0 0 1 32 0 8 8 0 0 0 8 8h112a8 8 0 0 0 8-8 16 16 0 0 1 32 0Zm-120-4a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm72 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
  </svg>
);
export const RepititiveTaskIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    color="var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))"
    style={{
      userSelect: 'none',
      width: '100%',
      height: '100%',
      display: 'inline-block',
      fill: 'var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))',
      color:
        'var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))',
      flexShrink: 0,
    }}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M24 128a72.08 72.08 0 0 1 72-72h108.69l-10.35-10.34a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L204.69 72H96a56.06 56.06 0 0 0-56 56 8 8 0 0 1-16 0Zm200-8a8 8 0 0 0-8 8 56.06 56.06 0 0 1-56 56H51.31l10.35-10.34a8 8 0 0 0-11.32-11.32l-24 24a8 8 0 0 0 0 11.32l24 24a8 8 0 0 0 11.32-11.32L51.31 200H160a72.08 72.08 0 0 0 72-72 8 8 0 0 0-8-8Z" />
  </svg>
);

//develop.jsx

export const BackArrowIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    color="var(--token-2cf088f3-ce85-4dcc-af29-885125de2d17, rgba(255, 255, 255, 0.75))"
    style={{
      userSelect: 'none',
      width: '6%',
      height: '6%',
      display: 'inline-block',
      fill: 'var(--token-2cf088f3-ce85-4dcc-af29-885125de2d17, rgba(255, 255, 255, 0.75))',
      color:
        'var(--token-2cf088f3-ce85-4dcc-af29-885125de2d17, rgba(255, 255, 255, 0.75))',
      flexShrink: 0,
    }}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M222 128a6 6 0 0 1-6 6H54.49l61.75 61.76a6 6 0 1 1-8.48 8.48l-72-72a6 6 0 0 1 0-8.48l72-72a6 6 0 0 1 8.48 8.48L54.49 122H216a6 6 0 0 1 6 6Z" />
  </svg>
);

export const ForwardArrowIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    color="var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))"
    style={{
      userSelect: 'none',
      width: '6%',
      height: '6%',
      display: 'inline-block',
      fill: 'var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))',
      color:
        'var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))',
      flexShrink: 0,
    }}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="m220.24 132.24-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48Z" />
  </svg>
);

export const MinimizeTabIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    color="var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))"
    style={{
      userSelect: 'none',
      width: '5%',
      height: '5%',
      display: 'inline-block',
      fill: 'var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))',
      color:
        'var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))',
      flexShrink: 0,
    }}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M184 74H40a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14Zm2 126a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2Zm44-144v120a6 6 0 0 1-12 0V56a2 2 0 0 0-2-2H64a6 6 0 0 1 0-12h152a14 14 0 0 1 14 14Z" />
  </svg>
);

export const MiniMizeicon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    color="var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))"
    style={{
      userSelect: 'none',
      width: '7%',
      height: '7%',
      display: 'inline-block',
      fill: 'var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))',
      color:
        'var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))',
      flexShrink: 0,
    }}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6Z" />
  </svg>
);

export const FileIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    color="var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))"
    style={{
      userSelect: 'none',
      width: '40%',
      height: '15%',
      display: 'inline-block',
      fill: 'var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))',
      color:
        'var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))',
      flexShrink: 0,
    }}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="m212.24 83.76-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24ZM158 46.48 193.52 82H158ZM200 218H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2Z" />
  </svg>
);

export const SearchIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    color="var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))"
    style={{
      userSelect: 'none',
      width: '40%',
      height: '15%',
      display: 'inline-block',
      fill: 'var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))',
      color:
        'var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))',
      flexShrink: 0,
    }}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="m228.24 219.76-51.38-51.38a86.15 86.15 0 1 0-8.48 8.48l51.38 51.38a6 6 0 0 0 8.48-8.48ZM38 112a74 74 0 1 1 74 74 74.09 74.09 0 0 1-74-74Z" />
  </svg>
);

export const PuzzleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    color="var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))"
    style={{
      userSelect: 'none',
      width: '40%',
      height: '15%',
      display: 'inline-block',
      fill: 'var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))',
      color:
        'var(--token-d072d1f5-ef86-4b7c-bae1-6c9f6238e10b, rgba(255, 255, 255, 0.75))',
      flexShrink: 0,
    }}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M219.21 160.24a6 6 0 0 0-5.78-.35 22 22 0 1 1-11.05-41.83 22.15 22.15 0 0 1 11.05 2.06 6 6 0 0 0 8.57-5.42V72a14 14 0 0 0-14-14h-38.52a35 35 0 0 0 .52-6 34.1 34.1 0 0 0-10.73-24.78 33.64 33.64 0 0 0-25.45-9.15A34 34 0 0 0 102.54 58H64a14 14 0 0 0-14 14v34.53a34 34 0 0 0-30.79 10.2 34 34 0 0 0 22.31 57.18 34.34 34.34 0 0 0 8.48-.44V208a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14v-42.69a6 6 0 0 0-2.79-5.07ZM210 208a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2v-42.69a6 6 0 0 0-6-6 5.92 5.92 0 0 0-2.57.58 22 22 0 0 1-31.38-18.46 22 22 0 0 1 31.38-21.31A6 6 0 0 0 62 114.7V72a2 2 0 0 1 2-2h46.69a6 6 0 0 0 5.42-8.57 22.25 22.25 0 0 1-2-11 22 22 0 1 1 41.83 11A6 6 0 0 0 161.3 70H208a2 2 0 0 1 2 2v34.54a34 34 0 0 0-39.93 31.28 33.71 33.71 0 0 0 9.14 25.45A34.15 34.15 0 0 0 210 173.48Z" />
  </svg>
);

export const MailIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    color="var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))"
    style={{
      userSelect: 'none',
      width: '10%',
      height: '10%',
      display: 'inline-block',
      fill: 'var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))',
      color:
        'var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))',
      flexShrink: 0,
    }}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8Zm-8 144H40V74.19l82.59 75.71a8 8 0 0 0 10.82 0L216 74.19V192Z" />
  </svg>
);

export const CheckMarkIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    color="var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))"
    style={{
      userSelect: 'none',
      width: '6%',
      height: '6%',
      display: 'inline-block',
      fill: 'var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))',
      color:
        'var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))',
      flexShrink: 0,
    }}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="m232.49 80.49-128 128a12 12 0 0 1-17 0l-56-56a12 12 0 1 1 17-17L96 183 215.51 63.51a12 12 0 0 1 17 17Z" />
  </svg>
);
