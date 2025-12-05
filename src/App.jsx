import { useState } from "react";
import "./App.css";
import MapView from "./components/MapView";
import ListView from "./components/ListView";

function App() {
  const [tab, setTab] = useState("map");
  return (
    <>
      <div className="app overflow-hidden flex flex-col">
        <div className="p-4 pb-2">
          <div className="header flex flex-col justify-center items-center text-2xl font-bold">
            <div>Safe Report</div>
            <div className="ml-4 text-sm font-normal text-gray-500 bg-gray-100 rounded-full px-3 py-1 mt-1">
              6 reports (3 verified) in the last hour
            </div>
          </div>
        </div>
        <div className="flex-grow flex flex-col">
          <div className="text-center text-4xl">hello world</div>
          <div>
            {/* Tab Navigation */}
            <div className="tab-navigation flex justify-center border-t border-b">
              <button
                className={`flex-grow py-3 ${
                  tab === "map"
                    ? "border-b-4 border-blue-500 font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setTab("map")}
              >
                Map View
              </button>
              <button
                className={`flex-grow py-3 ${
                  tab === "list"
                    ? "border-b-4 border-blue-500 font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setTab("list")}
              >
                List View
              </button>
            </div>
            {/* Tab Content */}
            <div className="tab-content flex-grow overflow-auto">
              {tab === "map" ? <MapView /> : <ListView />}
            </div>
          </div>
        </div>

        {/* Report Button */}
        <div className="sticky bottom-0 bg-white p-4">
          <button className="w-full bg-gray-200 p-4 text-2xl font-semibold rounded-md hover:bg-gray-300 duration-200">
            REPORT
          </button>
        </div>

      </div>
    </>
  );
}

export default App;
