import React from 'react';
import { Clock } from 'lucide-react';

const ChapterList = ({ chapters, activeChapter, onSelect }) => {
  return (
    <div className="space-y-2">
      {chapters.map((chapter) => (
        <div
          key={chapter.id}
          className={`p-3 rounded-lg cursor-pointer ${
            activeChapter === chapter.id ? "bg-blue-50" : "bg-white"
          }`}
          onClick={() => onSelect(chapter.id)}
        >
          <div className="flex justify-between items-center">
            <span className="text-sm">{chapter.title}</span>
            {chapter.duration && (
              <div className="flex items-center text-gray-500 text-xs">
                <Clock className="w-3 h-3 mr-1" />
                {chapter.duration}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChapterList;
