import React from 'react';
import { ChevronDown, ChevronUp, Clock, BarChart2, FileText } from 'lucide-react';

const Part = ({ part, openPart, onToggle }) => {
  return (
    <div className="border border-[#a4e6ff] rounded-lg p-4 relative">
      <div className="flex justify-between items-center mb-2">
        <div>
          <div className="text-xs text-gray-500">PART {part.id}</div>
          <div className="text-sm font-medium">{part.title}</div>
        </div>
        <div className="flex items-center space-x-3 text-sm">
          <div className="flex items-center text-gray-500">
            <Clock className="w-3 h-3 mr-1" />
            {part.duration}
          </div>
          <div className="flex items-center text-gray-500">
            <BarChart2 className="w-3 h-3 mr-1" />
            {part.difficulty}
          </div>
          <div className="flex items-center text-gray-500">
            <FileText className="w-3 h-3 mr-1" />
            {part.points}
          </div>
          <div className="cursor-pointer" onClick={onToggle}>
            {openPart ? <ChevronUp /> : <ChevronDown />}
          </div>
        </div>
      </div>

      <div className="flex justify-end mb-2">
        <button className="text-xs text-gray-500 bg-[#EFF5FF] border border-[#99E4FF] rounded-lg py-1 px-2">
          {part.completion}% Completed
        </button>
      </div>

      <div className="relative -mx-4">
        <div className="w-full h-2 bg-[#EFF5FF] rounded-full overflow-hidden">
          <div className="h-full bg-[#172B4D] rounded-full" style={{ width: `${part.completion}%` }} />
        </div>
      </div>
    </div>
  );
};

export default Part;
