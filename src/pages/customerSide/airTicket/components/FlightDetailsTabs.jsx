import React, { useState } from "react";
import FlightDetails from "../AvailableFlight/FlightDetails";
import FareBreakdown from "./FareBreakdown";
import FlightPenaltyDetails from "./FlightPenaltyDetails";

const FlightDetailsTabs = () => {
  const [activeTab, setActiveTab] = useState("flight");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full  mx-auto bg-white shadow-md rounded-lg p-5">
      {/* Tab Buttons */}
      <div className="flex border-b">
        <button
          onClick={() => handleTabClick("flight")}
          className={`py-2 px-4 ${
            activeTab === "flight"
              ? "text-white bg-primary"
              : "text-gray-700 hover:bg-gray-200"
          } rounded-t-lg`}
        >
          Flight Details
        </button>
        <button
          onClick={() => handleTabClick("fare")}
          className={`py-2 px-4 ${
            activeTab === "fare"
              ? "text-white bg-primary"
              : "text-gray-700 hover:bg-gray-200"
          } rounded-t-lg`}
        >
          Fare Summary
        </button>
        <button
          onClick={() => handleTabClick("rules")}
          className={`py-2 px-4 ${
            activeTab === "rules"
              ? "text-white bg-primary"
              : "text-gray-700 hover:bg-gray-200"
          } rounded-t-lg`}
        >
          Fare Rules
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-5">
        {activeTab === "flight" && (
          <div>
            <FlightDetails/>
          </div>
        )}

        {activeTab === "fare" && (
          <div>
            <FareBreakdown/>
          </div>
        )}

        {activeTab === "rules" && (
          <div>
            <FlightPenaltyDetails/>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightDetailsTabs;
