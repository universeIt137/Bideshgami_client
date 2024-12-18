import React from "react";

const FareBreakdown = () => {
  return (
    <div className="w-full max-w-screen-md mx-auto bg-white shadow-md rounded-lg p-5 border border-gray-300">
      {/* Title */}
      <h2 className="text-lg font-bold mb-4">Fare breakdown</h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-300">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-100 text-primary ">
              <th className="p-2 border border-gray-300 font-light">Fare Summary</th>
              <th className="p-2 border border-gray-300 font-light">Base Fare</th>
              <th className="p-2 border border-gray-300 font-light">Taxes + Fees</th>
              <th className="p-2 border border-gray-300 font-light">Per Passenger</th>
              <th className="p-2 border border-gray-300 font-light">Total</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {/* Row 1 */}
            <tr>
              <td className="p-2 border border-gray-300">Adult</td>
              <td className="p-2 border border-gray-300">BDT 3,130</td>
              <td className="p-2 border border-gray-300">BDT 988</td>
              <td className="p-2 border border-gray-300">BDT (4,118 × 1)</td>
              <td className="p-2 border border-gray-300 font-semibold">
                BDT 4,118
              </td>
            </tr>

            {/* Total Row */}
            <tr>
              <td
                colSpan="4"
                className="p-2 border border-gray-300 text-blue-600 font-medium"
              >
                Total (1 Traveler)
              </td>
              <td className="p-2 border border-gray-300 text-blue-600 font-semibold">
                BDT 4,118
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FareBreakdown;
