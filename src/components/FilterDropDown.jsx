import { useState } from "react";

function FilterDropdown() {
  const [open, setOpen] = useState(false);
  const [radius, setRadius] = useState(10);

  const [violent, setViolent] = useState(false);
  const [violentSubs, setViolentSubs] = useState({
    mugging: false,
    assault: false,
    shooting: false,
  });

  const [nonViolent, setNonViolent] = useState(false);
  const [nonViolentSubs, setNonViolentSubs] = useState({
    theft: false,
    vandalism: false,
    narcotics: false,
  });

  const toggleViolent = () => {
    const newVal = !violent;
    setViolent(newVal);
    setViolentSubs({
      mugging: newVal,
      assault: newVal,
      shooting: newVal,
    });
  };

  const toggleNonViolent = () => {
    const newVal = !nonViolent;
    setNonViolent(newVal);
    setNonViolentSubs({
      theft: newVal,
      vandalism: newVal,
      narcotics: newVal,
    });
  };

  const toggleViolentSub = (key) => {
    const updated = { ...violentSubs, [key]: !violentSubs[key] };
    setViolentSubs(updated);
    setViolent(Object.values(updated).every(Boolean));
  };

  const toggleNonViolentSub = (key) => {
    const updated = { ...nonViolentSubs, [key]: !nonViolentSubs[key] };
    setNonViolentSubs(updated);
    setNonViolent(Object.values(updated).every(Boolean));
  };

  return (
    <div className="relative flex justify-center mt-4 z-50">

      <button
        className="bg-gray-200 px-4 py-2 rounded-t text-sm shadow flex items-center justify-between w-72"
        onClick={() => setOpen(!open)}
      >
        <span>Filtering by:</span>
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 z-50 bg-gray-200 p-3 rounded-b shadow-md w-72 text-sm">


<div className="mb-3">
  <div className="flex items-center bg-white rounded-full px-3 py-1.5 shadow-sm">
    
    <input
      type="text"
      placeholder="Location"
      className="flex-grow bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 leading-tight"
    />

  
    <button
      type="button"
      disabled
      className="
        text-gray-500 
        text-base 
        cursor-pointer 
        disabled:opacity-60 
        disabled:hover:opacity-80
      "
    >
      🔍
    </button>

  </div>
</div>
       
          <div className="mb-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={violent} onChange={toggleViolent} />
              Violent Crimes
            </label>

            <div className="ml-4 mt-1 space-y-1">
              {Object.entries(violentSubs).map(([key, value]) => (
                <label key={key} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={() => toggleViolentSub(key)}
                  />
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={nonViolent}
                onChange={toggleNonViolent}
              />
              Non-Violent Crimes
            </label>

            <div className="ml-4 mt-1 space-y-1">
              {Object.entries(nonViolentSubs).map(([key, value]) => (
                <label key={key} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={() => toggleNonViolentSub(key)}
                  />
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-3">
            <div className="text-xs mb-1">Filter Radius:</div>
            <input
              type="range"
              min="1"
              max="50"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              className="w-full cursor-pointer"
            />
            <div className="text-xs text-center mt-1">{radius} KM</div>
          </div>

          <div className="mt-3 space-y-1 text-xs">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" />
              Last 24 Hours
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" />
              Last 30 Days
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" />
              All Time
            </label>
          </div>

        </div>
      )}
    </div>
  );
}

export default FilterDropdown;

  