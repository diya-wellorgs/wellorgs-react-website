import { ArrowRight, FileText, ImageIcon, Plus, Search } from 'lucide-react';

import RotatingOrb from '../../ui/RotatingOrb';

export default function AssistantCard() {
  const buttons = [
    {
      icon: (
        <Search
          size={12}
          className="text-tertiary"
        />
      ),
      label: 'Analyze',
    },
    {
      icon: (
        <ImageIcon
          size={12}
          className="text-tertiary"
        />
      ),
      label: 'Generate Image',
    },
    {
      icon: (
        <FileText
          size={12}
          className="text-tertiary"
        />
      ),
      label: 'Research',
    },
  ];

  return (
    <div className="bg-primary border border-white/10 rounded-t-xl p-7 text-white w-full backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <RotatingOrb />
        </div>
        <p className=" mb-3">What can I help with?</p>

        <div className="border border-white/10 flex gap-2.5 flex-col items-start  rounded-sm w-full p-2.5 mb-3">
          <div className="px-1 w-full items-center flex justify-between bg-bg-primary ">
            <p className="text-12">Images of Microgreen</p>
            <ArrowRight
              size={14}
              className="text-tertiary"
            />
          </div>

          <button className="flex items-center  text-xs   border border-white/10  text-[10px] rounded-lg">
            <Plus
              size={14}
              className="text-tertiary"
            />
            Add document
          </button>
        </div>

        {/* <div className="flex flex-col w-full"> */}
        <div className="flex flex-wrap gap-3 items-center text-xs">
          {buttons.map(({ icon, label }, i) => (
            <button
              key={i}
              className=" px-1 text-[10px] rounded-xl border border-white/10 flex items-center "
            >
              {icon} {label}
            </button>
          ))}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
