"use client";

import { Tool } from "@/types";

interface GenerateSectionProps {
  tools: Tool[];
  isDark: boolean;
}

export default function GenerateSection({
  tools,
  isDark,
}: GenerateSectionProps) {
  const cardClasses = isDark ? "bg-gray-900" : "bg-white";

  return (
    <div className="mb-18">
      
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Generate</h2>
        <button className="text-blue-400 hover:text-blue-300 text-sm flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-down-icon lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
          <span>Show all</span>
        </button>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl transition-all duration-200 ${cardClasses} flex items-center justify-between ${
    isDark ? "border border-gray-800/50" : "border-0"}`}
          >
            
            <div className="flex items-center space-x-4">
              
              <div
                className={` rounded-lg ${
                  isDark ? "bg-gray-00" : "bg-gray-100"
                }`}
              >
                {tool.icon}
              </div>

              
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold">{tool.title}</h3>
                  {tool.tag && (
                    <span className="text-xs px-2 py-1 rounded-full text-white bg-blue-500">
                      {tool.tag}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {tool.description}
                </p>
              </div>
            </div>

            
            <button
              className={`ml-4 text-sm px-4 py-1 rounded-full font-medium transition-colors cursor-pointer ${
                isDark
                  ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
