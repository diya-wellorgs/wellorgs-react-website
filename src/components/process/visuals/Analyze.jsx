// import {
//   ManualWorkIcon,
//   ProcessCheckIconIcon,
//   RepititiveTaskIcon,
//   SpeedCheckIcon,
//   SystemCheckIcon,
// } from '../../../icons';

import { Bot, Cpu, Gauge, RefreshCw, Shield } from 'lucide-react';

export default function Analyze() {
  const checks = [
    { icon: Shield, label: 'System check' },
    { icon: Cpu, label: 'Process check' },
    { icon: Gauge, label: 'Speed check' },
    { icon: Bot, label: 'Manual work' },
    { icon: RefreshCw, label: 'Repetative task' },
  ];

  return (
    <div className="flex  gap-2 ">
      <div className="flex flex-col  w-full h-fit border border-neutral-800 rounded-sm px-[5px] py-3 gap-3 items-center ">
        {/* Radar Animation */}
        <div className="relative w-30 h-30  rounded-full border border-neutral-800 flex items-center justify-center overflow-hidden ">
          {/* Concentric Circles */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full border border-neutral-800`}
              style={{
                width: `${(i + 1) * 25}%`,
                height: `${(i + 1) * 25}%`,
              }}
            ></div>
          ))}

          {/* Radar Sweep */}
          <div className="absolute w-full h-full animate-spin-slow">
            <div
              className="w-1/2 h-full origin-bottom-left bg-linear-to-r from-blue-500/60 to-transparent"
              style={{
                clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
              }}
            ></div>
          </div>
        </div>

        {/* Footer Text */}
        <div>
          <p className="text-center  text-sm">Analyzing current workflow..</p>
        </div>
      </div>

      {/* Status Checks */}
      <div className="flex flex-col gap-1 w-full h-fit border border-neutral-800 rounded-sm px-[5px] py-2.5 ">
        {checks.map(({ icon: Icon, label }, index) => (
          <div
            key={index}
            className="flex items-start gap-3 border border-neutral-800 rounded-sm px-2 py-1 bg-[#0a0a0a] hover:bg-[#111] transition-all"
          >
            <Icon className="w-4 h-4 text-gray-300" />
            <span className="text-sm text-gray-200">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
