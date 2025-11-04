import {
  Bot,
  Calendar,
  ChevronRight,
  CircleDashed,
  MoreHorizontal,
  SlidersHorizontal,
  Video,
  Wrench,
} from 'lucide-react';
import { MdOutlineMoreVert } from 'react-icons/md';

const tasks = [
  {
    icon: <Video size={12} />,
    title: 'Discovery call',
    status: '10:00 to 10:30 am',
  },
  {
    icon: <Wrench size={12} />,
    title: 'Custom automation',
    status: '06:00 to 06:30 pm',
  },
  // {
  //   icon: <CircleDashed size={12} />,
  //   title: 'App Tutorial',
  //   status: '06:00 to 06:30 pm',
  // },
  // {
  //   icon: <CircleDashed size={12} />,
  //   title: 'Efficiency testing',
  //   status: '10:00 to 10:30 am',
  // },
];

export default function SystemCard() {
  return (
    <div className="bg-primary border border-white/10 rounded-t-xl px-4 py-2 pb-0 w-full  text-white ">
      <p className="text-12 font-semibold text-white/90">Hey David!</p>
      <p className="text-white/70 text-[10px] mb-2">
        Here is your Custom project & schedule
      </p>

      <div className="bg-bg-secondary  rounded-t-xl p-2.5 border border-white/10 ">
        <div className="flex items-center gap-2 text-sm mb-2.5 text-white ">
          <SlidersHorizontal size={12} />
          <p className="text-12">On going project:</p>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className=" p-1 bg-bg-primary border border-white/10 rounded-sm ">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-1 rounded-sm">
                <Bot size={18} />
              </div>
              <div className="flex flex-col gap-0">
                <p className="text-white text-12 font-medium">
                  Social Intelligence Bot
                </p>
                <span className="text-xs text-[10px] text-white/60">
                  90% Finished
                </span>
              </div>
            </div>
          </div>
          <div className="  gradient-border h-px"></div>
          <div className="p-1 flex flex-col gap-[7px] bg-bg-primary border border-white/10 rounded-sm ">
            <div className="flex items-center gap-2 text-sm text-white/80 ">
              <Calendar size={14} />
              <p className="text-12">Schedule</p>
            </div>
            <div className="flex gap-2 ">
              {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d, i) => (
                <span
                  key={i}
                  className={`text-[10px] w-5 h-5 flex items-center justify-center  ${
                    i === 0 ? 'bg-tertiary rounded-sm ' : ''
                  }`}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-3 text-sm text-white/70">
          {tasks.map((task, i) => (
            <div
              key={i}
              className="flex justify-between items-center  rounded-md hover:bg-white/5"
            >
              <div className="flex items-center gap-2">
                {task.icon}
                <div>
                  <p className="text-white/80 text-[10px]">{task.title}</p>
                  <p className="text-[10px] text-white/50">{task.status}</p>
                </div>
              </div>
              <MdOutlineMoreVert size={16} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
