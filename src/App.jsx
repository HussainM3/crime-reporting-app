import { useState } from "react";
import "./App.css";
import MapView from "./components/MapView";
import ListView from "./components/ListView";
import ShowReport from "./components/ShowReport";
import FilterDropdown from "./components/FilterDropDown";

function App() {
  const [tab, setTab] = useState("map");
  const exampleReport = {
    id: 1,
    type: "Theft",
    description: "Stolen bicycle near the park.",
    suspectDescription: "Male 6ft, wearing a red hoodie and jeans.",
    distanceToYou: "1.1 km",
    location: { lat: 40.7128, lng: -74.006 },
    score: 85,
    verified: true,
    policeNotified: true,
    policeOnScene: false,
    lastUpdated: "2024-06-01T10:30:00Z",
    reportedAt: "2024-06-01T10:00:00Z",
    comments: [
      {
        user: "John Doe",
        comment: "I saw this happen!",
        timestamp: "2024-06-01T10:05:00Z",
      },
      {
        user: "Jane Doe",
        comment: "The suspect ran towards Jackson Square.",
        timestamp: "2024-06-01T10:10:00Z",
      },
    ],
  };
  const [showReport, setShowReport] = useState(null);

  const changeTab = (newTab) => {
    setShowReport(null);
    setTab(newTab);
  };

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
          <div className="flex-grow flex flex-col border-t">
            {/* Tab Navigation */}
            <div className="tab-navigation flex justify-center border-t border-b">
              <button
                className={`flex-grow py-3 ${
                  tab === "map"
                    ? "border-b-4 border-blue-500 font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => changeTab("map")}
              >
                Map View
              </button>
              <button
                className={`flex-grow py-3 ${
                  tab === "list"
                    ? "border-b-4 border-blue-500 font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => changeTab("list")}
              >
                List View
              </button>
            </div>
            {/* Tab Content */}
            <div className="tab-content flex-grow overflow-auto relative">
              {!showReport &&
                (tab === "map" ? (
                  <MapView onClick={() => setShowReport(exampleReport)} />
                ) : (
                  <ListView />
                ))}
              {showReport && (
                <ShowReport report={showReport} setShowReport={setShowReport} />
              )}
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
