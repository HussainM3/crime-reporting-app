import { useState } from "react";
import mapImage from "../assets/mcmaster-map.png";
import heatMapIcon from "../assets/heatmap-dot.png";

export default function MapView({ onClick }) {
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
      <div
        className="relative mt-3 min-h-[350px] flex-1 rounded-md"
        onClick={onClick}
      >
        {/* Static Map */}
        <img
          src={mapImage}
          alt="Map"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Crime Indicators */}
        {heatMapOn ? (
          <>
            {/* Heatmap Mode */}
            <img
              src={heatMapIcon}
              alt="High risk zone"
              className="absolute top-20 right-14 w-14 h-14 opacity-80"
            />

            <img
              src={heatMapIcon}
              alt="Medium risk zone"
              className="absolute top-14 left-10 w-10 h-10 opacity-80"
            />

            <img
              src={heatMapIcon}
              alt="Very high risk zone"
              className="absolute bottom-14 left-24 w-20 h-20 opacity-80"
            />
          </>
        ) : (
          <>
            {/* Simple Dot Mode */}
            <SimpleDot className="top-24 right-20" />
            <SimpleDot className="top-16 left-14" />
            <SimpleDot className="bottom-20 left-32" />
          </>
        )}

        {/* User Location */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-3 h-3 border-2 border-white rounded-full bg-blue-400 z-20"
        />

        {/* Tooltip */}
        <div className="absolute top-16 right-4 bg-white text-black text-xs px-3 py-1 rounded-md shadow z-20">
          Recent Mugging +3
        </div>
      </div>
    </div>
  );
}

function SimpleDot({ className }) {
  return (
    <div
      className={`absolute w-3 h-3 bg-red-600 rounded-full z-10 ${className}`}
    />
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
