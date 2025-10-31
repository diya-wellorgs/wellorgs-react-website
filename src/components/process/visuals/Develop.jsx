import React from 'react';

// import {
//   ArrowLeft,
//   ArrowRight,
//   FileText,
//   PuzzlePiece,
//   Search,
// } from 'lucide-react';
import {
  BackArrowIcon,
  FileIcon,
  ForwardArrowIcon,
  MiniMizeicon,
  MinimizeTabIcon,
  PuzzleIcon,
  SearchIcon,
} from '../../../icons';

/**
 * A reusable component that renders a code editor UI window,
 * styled with Tailwind CSS to match the provided image.
 */
export function Develop() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-[#ffffff0d] border border-neutral-800 shadow-2xl overflow-hidden">
      {/* --- Title Bar --- */}
      <div className="flex justify-between w-full items-center py-1 px-4 ">
        <div className="flex items-center ">
          <BackArrowIcon className=" text-zinc-500" />
          <ForwardArrowIcon className=" text-zinc-500" />
        </div>

        {/* <div className="flex items-center h-4 bg-red-400  rounded-md">
          {' '}
          hello
        </div> */}
        <div className="flex items-center justify-end gap-2">
          <MiniMizeicon className=" text-zinc-500" />
          <MinimizeTabIcon className=" text-zinc-500" />
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="flex">
        {/* --- Sidebar --- */}
        <div className="flex flex-col items-center w-10 pt-5 gap-3  ">
          <FileIcon className=" text-white" />
          <SearchIcon className=" text-zinc-500 hover:text-white transition-colors" />
          <PuzzleIcon className=" text-zinc-500 hover:text-white transition-colors" />
        </div>

        {/* --- Code Editor --- */}
        <div className="flex-1 p-6 bg-black h-fit">
          <pre className="font-mono text-sm text-gray-300">
            <code>
              <div>
                <span className="text-yellow-400">class</span>{' '}
                <span className="text-white">AutomationTrigger:</span>
              </div>

              <div className="pl-4 mt-1">
                <span className="text-yellow-400">def</span>{' '}
                <span className="text-white">__init__</span>(self, threshold):
              </div>

              <div className="pl-8 mt-1">self.threshold = threshold</div>

              <div className="pl-8 mt-1">self.status = "inactive"</div>

              {/* Empty line */}
              <div className="h-4"></div>

              <div className="pl-4 text-yellow-400">
                def check_trigger(self, value):
              </div>

              <div className="pl-8 mt-1 ">if value &gt; self.threshold:</div>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
