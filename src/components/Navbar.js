import React from 'react';
import { Menu, Bell } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white ">
        <div className="flex items-center space-x-3">
          <Menu className="w-[32px] h-[32px]" />
          <h1 className="text-[#172b4d] w-[144px] h-[28px] font-bold">
            AlgoZenith
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-[52px] h-[50px] p-[12px] px-[15px] bg-blue-50 rounded-lg flex items-center">
            <Bell className="text-blue-600" />
          </div>
          <div className="w-[63px] h-[63px] bg-gray-200 rounded-full"></div>
        </div>
      </div>
  );
};

export default Navbar;
