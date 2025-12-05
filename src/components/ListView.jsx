import React from "react";
import FilterDropdown from "./FilterDropDown";

const ListView = ({ onClick }) => {
  const reports = [
    { type: "Mugging", distance: "350 m", score: 3 },
    { type: "Assault", distance: "400 m", score: 0 },
    { type: "Mugging", distance: "600 m", score: 1 },
    { type: "Assault", distance: "650 m", score: 5 },
    { type: "Assault", distance: "650 m", score: -4 },
    { type: "Shooting", distance: "1.1 km", score: 20 },
  ];

  return (
    <div className="flex flex-col px-4 h-full bg-gray-50">
      {/* Added FilterDropdown at the top with proper spacing */}
      <div className="mb-6">
        <FilterDropdown />
      </div>

      <div className="grid grid-cols-[1.5fr_1fr_1fr] px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        <div className="text-left self-end">Crime</div>
        <div className="text-center self-end">Distance</div>
        <div className="text-right self-end">Creditability</div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {reports.map((report, index) => (
          <div
            key={index}
            className={`grid grid-cols-[1.5fr_1fr_1fr] px-4 py-4 items-center transition-colors hover:bg-gray-50 ${
              index !== reports.length - 1 ? "border-b border-gray-100" : ""
            }`}
            onClick={onClick}
          >
            <div className="text-left font-medium text-gray-800">
              {report.type}
            </div>

            <div className="text-center text-sm text-gray-500 font-medium bg-gray-100 py-1 rounded-full mx-auto w-fit px-3">
              {report.distance}
            </div>

            <div
              className={`text-right font-bold ${getScoreColor(report.score)}`}
            >
              {report.score > 0 ? `+${report.score}` : report.score}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function getScoreColor(score) {
  if (score > 0) return "text-green-600";
  if (score < 0) return "text-red-500";
  return "text-gray-400";
}

export default ListView;

