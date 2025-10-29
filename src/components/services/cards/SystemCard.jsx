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
    <div className="bg-primary border border-white/10 rounded-t-xl p-7 w-full  text-white ">
      <p className="text-lg font-semibold text-white/90">Hey David!</p>
      <p className="text-white/70 text-sm mb-6">
        Here is your Custom project & schedule
      </p>

      <div className="bg-[#111] rounded-xl p-4 border border-white/10 mb-4">
        <div className="flex items-center gap-2 text-sm text-white/80 mb-4">
          <SlidersHorizontal size={16} />
          <p>On going project:</p>
        </div>
        <div className="flex items-center justify-between bg-black/30 border border-white/10 rounded-lg p-3">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-md">
              <Bot size={16} />
            </div>
            <div>
              <p className="text-white text-sm font-medium">
                Social Intelligence Bot
              </p>
              <span className="text-xs text-white/60">90% Finished</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#111] rounded-xl p-4 border border-white/10">
        <div className="flex items-center gap-2 text-sm text-white/80 mb-3">
          <Calendar size={16} />
          <p>Schedule</p>
        </div>
        <div className="flex gap-2 mb-4">
          {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d, i) => (
            <span
              key={i}
              className={`text-xs w-8 h-8 flex items-center justify-center rounded-md border border-white/10 ${
                i === 0 ? 'bg-blue-500/20 border-blue-500/50 text-blue-400' : ''
              }`}
            >
              {d}
            </span>
          ))}
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
