import { useState } from "react";
import "./App.css";

function App() {
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
        </div>
      </div>
    </>
  );
}

export default App;
