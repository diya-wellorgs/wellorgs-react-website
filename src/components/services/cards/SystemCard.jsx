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

export default function SystemCard() {
  return (
    <div className="bg-primary border border-white/10 rounded-t-xl p-4 pb-0 w-full  text-white ">
      <p className="text-12 font-semibold text-white/90">Hey David!</p>
      <p className="text-white/70 text-[10px] mb-2">
        Here is your Custom project & schedule
      </p>

      <div className="bg-bg-secondary  rounded-t-xl p-4 border border-white/10 ">
        <div className="flex items-center gap-2 text-sm text-white mb-4">
          <SlidersHorizontal size={12} />
          <p className="text-12">On going project:</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className=" p-1 bg-bg-primary border border-white/10 rounded-sm ">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-2 rounded-sm">
                <Bot size={16} />
              </div>
              <div>
                <p className="text-white text-12 font-medium">
                  Social Intelligence Bot
                </p>
                <span className="text-xs text-white/60">90% Finished</span>
              </div>
            </div>
          </div>
          <div className="  gradient-border h-px"></div>
          <div className="p-1 flex flex-col gap-1 bg-bg-primary border border-white/10 rounded-sm ">
            <div className="flex items-center gap-2 text-sm text-white/80 ">
              <Calendar size={12} />
              <p className="text-12">Schedule</p>
            </div>
            <div className="flex gap-2 ">
              {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d, i) => (
                <span
                  key={i}
                  className={`text-[10px] w-5 h-5 flex items-center justify-center  ${
                    i === 0 ? 'bg-blue-500/20 border-blue-500/50 ' : ''
                  }`}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-1 text-sm text-white/70">
          <div className="flex justify-between items-center p-2 rounded-md hover:bg-white/5">
            <div className="flex items-center gap-3">
              <Video size={16} />
              <div>
                <p className="text-white/80">Discovery call</p>
                <p className="text-xs text-white/50">10:00 to 10:30 am</p>
              </div>
            </div>
            <MoreHorizontal size={16} />
          </div>
          <div className="flex justify-between items-center p-2 rounded-md hover:bg-white/5">
            <div className="flex items-center gap-3">
              <Wrench size={16} />
              <div>
                <p className="text-white/80">Custom automation</p>
                <p className="text-xs text-white/50">06:00 to 06:30 pm</p>
              </div>
            </div>
            <MoreHorizontal size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
