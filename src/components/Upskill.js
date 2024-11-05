import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Clock,
  BarChart2,
  FileText,
  Video,
  BookOpen,
  Code,
  Files,
} from "lucide-react";

const Upskill = () => {

    const [activeChapter, setActiveChapter] = useState(1);
    const [openPart, setOpenPart] = useState(1); // Default Part 1 to be open
  
    const sidebarItems = [
      { icon: <BarChart2 className="w-5 h-5" />, text: "Dashboard" },
      { icon: <BookOpen className="w-5 h-5" />, text: "Learn" },
      { icon: <Files className="w-5 h-5" />, text: "Forums" },
      { icon: <FileText className="w-5 h-5" />, text: "Upskill" },
      { icon: <BarChart2 className="w-5 h-5" />, text: "Contest" },
      { icon: <BarChart2 className="w-5 h-5" />, text: "Leaderboard" },
    ];
  
    const chapters = [
      { id: 1, title: "Chapter 1", duration: "05:00:00" },
      { id: 2, title: "Chapter 2" },
      { id: 3, title: "Chapter 3" },
      { id: 4, title: "Chapter 4" },
      { id: 5, title: "Chapter 5" },
    ];
  
    const contentItems = [
      {
        icon: <Video className="w-5 h-5" />,
        title: "Video 1",
        duration: "10:00",
      },
      {
        icon: <FileText className="w-5 h-5" />,
        title: "Article 1",
        duration: "10:00",
      },
      {
        icon: <FileText className="w-5 h-5" />,
        title: "Quiz 1",
        duration: "10:00",
      },
      {
        icon: <Code className="w-5 h-5" />,
        title: "Coding Exercise 1",
        duration: "10:00",
      },
      {
        icon: <Files className="w-5 h-5" />,
        title: "Combined Resource 1",
        duration: "10:00",
      },
    ];
  
    const parts = [
      {
        id: 1,
        title: "Lorem Ipsum Dolor Sit Amet",
        duration: "02:00:00",
        difficulty: "Medium",
        points: 5,
        completion: 45, // completion in percentage
      },
      {
        id: 2,
        title: "Lorem Ipsum Dolor Sit Amet",
        duration: "02:00:00",
        difficulty: "Medium",
        points: 12,
        completion: 20, // completion in percentage
      },
      {
        id: 3,
        title: "Lorem Ipsum Dolor Sit Amet",
        duration: "02:00:00",
        difficulty: "Medium",
        points: 12,
        completion: 0, // completion in percentage
      },
    ];

  return (
    <div className="flex-1 p-4 border-t border-l border-r border-[#99E4EF] rounded-lg m-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4 bg-gradient-to-b from-[#EFF5FF] to-transparent rounded-lg p-2 w-[563px] h-[82px]">
              <button className="w-[243px] h-[61px] flex items-center space-x-2 bg-transparent rounded-lg transition-all duration-200 hover:bg-white hover:shadow-lg">
                <div className="flex items-center px-5 py-3 gap-2">
                  {" "}
                  {/* Apply padding here */}
                  <FileText className="w-4 h-4 " />
                  <span className="text-gray-800">Mentor Sessions</span>
                </div>
              </button>
              <button className="w-[258px] h-[61px] flex items-center space-x-2 bg-transparent rounded-lg transition-all duration-200 hover:bg-white hover:shadow-lg">
                <div className="flex items-center px-5 py-3 gap-2">
                  {" "}
                  {/* Apply padding here */}
                  <BookOpen className="w-4 h-4" />
                  <span className="text-gray-800">Learning Material</span>
                </div>
              </button>
            </div>

            <button className="px-3 py-1.5 flex items-center space-x-2 bg-white rounded-lg border border-[#99E4EF]">
              <FileText className="w-4 h-4" />
              <span>How it works</span>
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-4 gap-4">
            {/* Chapters List */}
            <div className="col-span-1">
              <div className="space-y-2">
                {chapters.map((chapter) => (
                  <div
                    key={chapter.id}
                    className={`p-3 rounded-lg cursor-pointer ${
                      activeChapter === chapter.id ? "bg-blue-50" : "bg-white"
                    }`}
                    onClick={() => setActiveChapter(chapter.id)}
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
            </div>

            {/* Parts and Content */}
            <div className="col-span-3 space-y-3">
              {parts.map((part, index) => (
                <div
                  key={index}
                  className="border border-[#a4e6ff] rounded-lg pl-4 pr-4 pt-4 relative"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <div className="text-xs text-gray-500">
                        PART {part.id}
                      </div>
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
                      {/* Dropdown icon */}
                      <div
                        className="cursor-pointer"
                        onClick={() =>
                          setOpenPart(openPart === part.id ? null : part.id)
                        } // Toggle dropdown
                      >
                        {openPart === part.id ? <ChevronUp /> : <ChevronDown />}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end mb-2">
                    {/* Completion Text Button */}
                    <button className="text-xs text-gray-500 bg-[#EFF5FF] border border-[#99E4FF] rounded-lg py-1 px-2">
                      {part.completion}% Completed
                    </button>
                  </div>

                  {/* Full-width Progress Bar without left and right padding */}
                  <div className="relative -mx-4">
                    <div className="w-full h-2 bg-[#EFF5FF] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#172B4D] rounded-full"
                        style={{ width: `${part.completion}%` }}
                      />
                    </div>
                  </div>

                  {/* Show content items if part is open */}
                  {openPart === part.id && (
                    <div className="mt-2 space-y-2">
                      {contentItems.map((item, idx) => (
                        <div key={idx} className="flex flex-col">
                          <div className="flex items-center p-2 rounded-lg hover:bg-blue-50 cursor-pointer">
                            {item.icon}
                            <div className="ml-2 flex justify-between w-full">
                              <div className="text-sm font-medium">
                                {item.title}
                              </div>
                              <div className="flex items-center text-xs text-gray-500">
                                <Clock className="w-3 h-3 mr-1" />
                                {item.duration}
                              </div>
                            </div>
                          </div>

                          {/* Gradient Divider */}
                          {idx < contentItems.length - 1 && (
                            <div
                              className="h-[0.7px] w-full mt-1"
                              style={{
                                backgroundImage:
                                  "linear-gradient(to right, rgba(23, 43, 77, 0), #172B4D, rgba(23, 43, 77, 0))",
                              }}
                            ></div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}

export default Upskill
