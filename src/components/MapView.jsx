import { useState } from "react";

export default function MapView() {
  const [heatMapOn, setHeatMapOn] = useState(true);

  return (
    <div className="flex flex-col flex-grow px-4">

      {/* Filters */}
      <div className="mt-4 flex flex-col gap-3">
        <FilterBox label="Filtering by: Violent Crime" />
      </div>

      {/* Heat Map Toggle */}
      <div className="flex justify-between items-center mt-6">
        <h2 className="text-lg font-bold">Heat Map View</h2>

        <button
          onClick={() => setHeatMapOn(!heatMapOn)}
          className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ${
            heatMapOn ? "bg-black" : "bg-gray-400"
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
              heatMapOn ? "translate-x-6" : ""
            }`}
          />
        </button>
      </div>

      {/* Map Area */}
      <div className="bg-gray-400 rounded-md mt-3 min-h-[350px] flex-1 relative ">

        {/* Crime zones */}
        <div className="absolute top-14 left-10 w-16 h-16 bg-orange-300 rounded-full flex items-center justify-center opacity-80">
          <div className="w-4 h-4 bg-black rounded-full" />
        </div>

        <div className="absolute top-20 right-10 w-20 h-20 bg-red-400 rounded-full flex items-center justify-center opacity-80">
          <div className="w-5 h-5 bg-black rounded-full" />
        </div>

        <div className="absolute bottom-14 left-24 w-20 h-20 bg-red-500 rounded-full flex items-center justify-center opacity-80">
          <div className="w-5 h-5 bg-black rounded-full" />
        </div>

        {/* User Location */}
        <div className="absolute top-1/2 left-1/2 w-6 h-6 border-2 border-white rounded-full bg-transparent" />

        {/* Tooltip */}
        <div className="absolute top-16 right-4 bg-gray-100 text-black text-xs px-2 py-1 rounded shadow">
          Recent Mugging +3
        </div>
      </div>

    </div>
  );
}

function FilterBox({ label }) {
  return (
    <div className="bg-gray-300 px-3 py-2 rounded-md flex justify-between items-center text-sm font-medium">
      {label}
      <span className="text-lg">▼</span>
    </div>
  );
}
