import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ onSelect }) => {
  const [selectedItem, setSelectedItem] = useState("Upskill"); 
  const location = useLocation();

  const sidebarItems = [
    { icon: <img src='./dashboardside.png' alt='dashboard' className="w-8 h-8" />, text: "Dashboard" },
    { icon: <img src='./learn.png' alt='learn' className="w-8 h-8" />, text: "Learn" },
    { icon: <img src='./formus.png' alt='Forums' className="w-8 h-8" />, text: "Forums" },
    { icon: <img src='./upskill.png' alt='upskill' className="w-8 h-8" />, text: "Upskill", id: 'upskill' },
    { icon: <img src='./contest.png' alt='Contest' className="w-8 h-8" />, text: "Contest" },
    { icon: <img src='./leaderboard.png' alt='Leaderboard' className="w-8 h-8" />, text: "Leaderboard" },
  ];

  return (
    <div className="hidden lg:block h-[88.5vh] overflow-hidden w-64 bg-gradient-to-t from-[#F2FBFF] to-white">
      <nav className="p-4">
        {sidebarItems.map((item, index) => (
          <Link
            key={index}
            to={`/${item.text.toLowerCase()}`}
            onClick={() => setSelectedItem(item.text)}
            className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer h-[40px] transition-colors duration-200 mb-2
              ${selectedItem === item.text || location.pathname.includes(item.text.toLowerCase()) ? 'bg-[#D6F4FF]' : ''}`}
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
