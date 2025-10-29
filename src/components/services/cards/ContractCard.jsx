import {
  Calendar,
  Check,
  Clock,
  FileText,
  ListChecks,
  Loader,
  X,
} from 'lucide-react';

const tasks = [
  {
    icon: <FileText size={16} />,
    title: 'Development',
    status: 'In Progress (60%)',
    actionIcon: (
      <X
        size={14}
        className="text-yellow-400"
      />
    ),
  },
  {
    icon: <ListChecks size={16} />,
    title: 'QA Testing',
    status: 'Scheduled',
    actionIcon: (
      <Loader
        size={14}
        className="text-yellow-400"
      />
    ),
  },
  {
    icon: <Clock size={16} />,
    title: 'Bug Fixing',
    status: 'In Progress (25%)',
    actionIcon: (
      <Check
        size={14}
        className="text-yellow-400"
      />
    ),
  },
  {
    icon: <Calendar size={16} />,
    title: 'Contract Signed',
    status: 'Completed',
    actionIcon: (
      <Clock
        size={14}
        className="text-yellow-400"
      />
    ),
  },
];

export default function ContractCard() {
  return (
    <div className="bg-black border border-white/10 rounded-t-xl p-3 w-full max-w-sm ">
      <div className="flex items-center  bg-[#0d0d0d] font-medium border border-white/10 rounded-xs p-[3px] mb-4">
        <button className="p-[3px] text-12 bg-bg-primary   border border-white/10 text-white rounded-xs  ">
          All Tasks
        </button>
        <h1 className="px-[5px] text-12  leading-[1em] ">
          Waiting for approval
        </h1>
      </div>

      <div className="space-y-2 ">
        {tasks.map((task, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-primary rounded-xs  border border-white/10 p-[5px]"
          >
            <div className="flex items-center gap-2">
              <div className="text-white/70 p-[5px] rounded-xs bg-[#191919] ">
                {task.icon}
              </div>
              <div>
                <p className="text-white font-medium text-12">{task.title}</p>
                <p className="text-[10px] text-white/50">{task.status}</p>
              </div>
            </div>
            <div className="bg-[#191919] rounded-xs p-px border border-white/10">
              {task.actionIcon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
