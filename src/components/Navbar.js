import React from 'react';
import { Menu, Bell } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-1.5 bg-white ">
        <div className="flex items-center space-x-3">
          <Menu className="w-[32px] h-[32px]" />
          <h1 className="text-[#172b4d] w-[144px] h-[28px] font-bold">
            AlgoZenith
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-[42px] h-[40px] p-[4px] px-[8px] bg-blue-50 rounded-lg flex items-center">
            <Bell className="text-blue-600" />
          </div>
          <div className="w-[50px] h-[50px] bg-gray-200 rounded-full"></div>
        </div>
      </div>
  );
};

export default Navbar;
