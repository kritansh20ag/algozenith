import React, { useState } from "react";
import {
  FileText,
  BookOpen,
} from "lucide-react";

import Learningmaterail from "./Learningmaterail";
import Temp from "./Temp";

const Upskill = () => {
  // Track the selected component and whether it's open or closed
  const [selectedComponent, setSelectedComponent] = useState("learningMaterial");
  const [isOpen, setIsOpen] = useState(true); // State to control the dropdown open/close

  const toggleComponent = (component) => {
    setSelectedComponent(component);
    setIsOpen(true); // When switching to another component, open it by default
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown (open/close)
  };

  return (
    <div
      className={`flex-1 p-4 border-t border-l border-r border-[#99E4EF] rounded-lg m-4 overflow-y-auto transition-all duration-300 ${
        isOpen ? "h-auto" : "h-[160px]"
      }`}
    >
      <div className="flex justify-between items-center mb-0.2">
        <div className="flex space-x-4 bg-gradient-to-b from-[#EFF5FF] to-transparent rounded-lg p-2 w-[563px] h-[82px]">
          {/* Mentor Sessions Button */}
          <button
            className="w-[243px] h-[45px] flex items-center space-x-2 bg-transparent rounded-lg transition-all duration-200 hover:bg-white hover:shadow-lg"
            onClick={() => toggleComponent("mentorSessions")} // Toggle to Mentor Sessions
          >
            <div className="flex items-center px-5 py-3 gap-2">
              <FileText className="w-4 h-4" />
              <span className="text-gray-800">Mentor Sessions</span>
            </div>
          </button>

          {/* Learning Material Button */}
          <button
            className="w-[258px] h-[45px] flex items-center space-x-2 bg-transparent rounded-lg transition-all duration-200 hover:bg-white hover:shadow-lg"
            onClick={() => toggleComponent("learningMaterial")} // Toggle to Learning Material
          >
            <div className="flex items-center px-5 py-3 gap-2">
              <BookOpen className="w-4 h-4" />
              <span className="text-gray-800">Learning Material</span>
            </div>
          </button>
        </div>

        <button
          className="w-[204px] h-[45px] py-[12px] px-[16px] flex items-center space-x-2 bg-white rounded-lg border border-[#99E4EF]"
          onClick={toggleDropdown} // Toggle dropdown open/close
        >
          <img src="./howit.png" alt="how it works" className="w-8 h-8" />
          <span>How it works</span>
        </button>
      </div>

      {/* Conditionally render components based on the selected state */}
      {isOpen && selectedComponent === "learningMaterial" && <Learningmaterail />}
      {isOpen && selectedComponent === "mentorSessions" && <Temp />}
    </div>
  );
};

export default Upskill;
