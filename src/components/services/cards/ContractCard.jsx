import {
  Calendar,
  Check,
  Clock,
  FileText,
  ListChecks,
  Loader,
  X,
} from 'lucide-react';

import {
  BugFixingIcon,
  ContractSignedIcon,
  DevelopmentIcon,
  QaTestingIcon,
  TeamOnBoardingIcon,
} from '../../../icons';
import { Develop } from '../../process/visuals/Develop';

const tasks = [
  {
    icon: <DevelopmentIcon className="w-4.5 h-4.5" />,
    title: 'Development',
    status: 'In Progress (60%)',
    actionIcon: (
      <X
        size={16}
        className="text-[#febe31]"
      />
    ),
  },
  {
    icon: <QaTestingIcon className="w-4.5 h-4.5" />,
    title: 'QA Testing',
    status: 'Scheduled',
    actionIcon: (
      <Loader
        size={16}
        className="text-[#febe31]"
      />
    ),
  },
  {
    icon: <BugFixingIcon className="w-4.5 h-4.5" />,
    title: 'Bug Fixing',
    status: 'In Progress (25%)',
    actionIcon: (
      <Check
        size={16}
        className="text-[#febe31]"
      />
    ),
  },
  {
    icon: <ContractSignedIcon className="w-4.5 h-4.5" />,
    title: 'Contract Signed',
    status: 'Completed',
    actionIcon: (
      <Clock
        size={16}
        className="text-[#febe31]"
      />
    ),
  },
  {
    icon: <TeamOnBoardingIcon className="w-4.5 h-4.5" />,
    title: 'Team Onboarding',
    status: 'Completed',
    actionIcon: (
      <Check
        size={16}
        className="text-[#febe31]"
      />
    ),
  },
];

export default function ContractCard() {
  return (
    <div className="bg-black border border-white/10 rounded-t-xl p-3 w-full max-w-sm ">
      <div className="flex items-center  bg-[#0d0d0d] font-medium border border-white/10 rounded-xs p-[3px] mb-4">
        <button className="flex items-center justify-center px-px text-12 bg-bg-primary   border border-white/10 text-white rounded-xs  ">
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
            className="flex items-center justify-between bg-primary rounded-sm  border border-border px-[3px]"
          >
            <div className="flex items-center gap-2">
              <div className="text-white/70 flex items-center justify-center p-[5px] rounded-sm bg-bg-primary ">
                {task.icon}
              </div>
              <div>
                <p className="text-white font-medium text-12">{task.title}</p>
                <p className="text-[10px] text-white/50">{task.status}</p>
              </div>
            </div>
            <div className="bg-bg-primary flex items-center justify-center rounded-sm  border border-white/10">
              {task.actionIcon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
