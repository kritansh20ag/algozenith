import React from 'react';
import { BarChart2, BookOpen, Files, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = ({ onSelect }) => {
  const sidebarItems = [
    { icon: <BarChart2 className="w-5 h-5" />, text: "Dashboard" },
    { icon: <BookOpen className="w-5 h-5" />, text: "Learn" },
    { icon: <Files className="w-5 h-5" />, text: "Forums" },
    { icon: <FileText className="w-5 h-5" />, text: "Upskill", id: 'upskill' },
    { icon: <BarChart2 className="w-5 h-5" />, text: "Contest" },
    { icon: <BarChart2 className="w-5 h-5" />, text: "Leaderboard" },
  ];

  return (
    <div className="hidden lg:block h-[88.5vh] overflow-hidden w-64 bg-gradient-to-t from-[#F2FBFF] to-white">
          <nav className="p-4">
            {sidebarItems.map((item, index) => (
              <Link
                key={index}
                className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer h-[40px] hover:bg-[#D6F4FF] transition-colors duration-200 mb-2"
                to={`/${item.text.toLowerCase()}`}
              >
                {item.icon}
                <p>{item.text}</p>
              </Link>
            ))}
          </nav>
        </div>
  );
};

export default Sidebar;
