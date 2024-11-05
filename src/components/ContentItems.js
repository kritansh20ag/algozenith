import React from 'react';
import { Clock } from 'lucide-react';

const ContentItems = ({ items }) => {
  return (
    <div className="mt-2 space-y-2">
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col">
          <div className="flex items-center p-2 rounded-lg hover:bg-blue-50 cursor-pointer">
            {item.icon}
            <div className="ml-2 flex justify-between w-full">
              <div className="text-sm font-medium">{item.title}</div>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="w-3 h-3 mr-1" />
                {item.duration}
              </div>
            </div>
          </div>

          {idx < items.length - 1 && (
            <div
              className="h-[0.7px] w-full mt-1"
              style={{
                backgroundImage: "linear-gradient(to right, rgba(23, 43, 77, 0), #172B4D, rgba(23, 43, 77, 0))",
              }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContentItems;
