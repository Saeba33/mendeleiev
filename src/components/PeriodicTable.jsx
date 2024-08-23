import ElementCard from "@/components/ElementCard";
import React from "react";

const PeriodicTable = ({ elements }) => {
  // Initialize the array with 9 rows (7 periods and 2 more for additional elements) and 18 columns (groups)
  const grid = Array.from({ length: 9 }, () => Array(18).fill(null));

  // Fill the grid with elements
  elements.forEach((element) => {
    const { period, group } = element;

    if (period >= 1 && period <= 9 && group >= 1 && group <= 18) {
      grid[period - 1][group - 1] = element;
    } else {
      console.error(`Element with invalid period or group: ${element.symbol}`);
    }
  });

  // Add an empty row for the lanthanides and actinides
  grid.splice(7, 0, Array(18).fill(null));

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-center text-4xl font-bold text-white mb-8">
        Periodic Table of Elements
      </h1>
      <p className="text-center text-white mb-12">
        Discover the building blocks of matter in our interactive periodic
        table. Explore the elements' properties and learn more about their roles
        in the universe.
      </p>
      <div
        className="grid grid-cols-19 grid-rows-10 gap-1"
        style={{
          gridTemplateColumns: `repeat(19, minmax(100px, auto))`,
          gridTemplateRows: `repeat(10, minmax(0, auto))`,
        }}
      >
        {/* Cell (0, 0) */}
        <div
          className="flex flex-col items-center justify-center px-2 py-1"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.009)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
          }}
        >
          <span className="text-xs text-nowrap mb-1 font-semibold text-white">
            Group →
          </span>
          <span className="border-b border-gray-600 w-full"></span>
          <span className="text-xs text-nowrap mt-1 font-semibold text-white">
            Period ↓
          </span>
        </div>

        {/* Header column */}
        {Array.from({ length: 18 }, (_, i) => (
          <div
            key={`col-${i}`}
            className="flex items-center justify-center text-lg font-bold text-white"
            style={{
              width: "auto",
              height: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.009)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
            }}
          >
            {i + 1}
          </div>
        ))}

        {/* Table row */}
        {grid.map((row, i) => (
          <React.Fragment key={`row-${i}`}>
            {/* Header row */}
            {i < 7 || i === 8 ? (
              <div
                className="flex items-center justify-center text-lg font-bold text-white"
                style={{
                  width: "100%",
                  height: "auto",
                  backgroundColor: "rgba(255, 255, 255, 0.009)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                }}
              >
                {i + 1}
              </div>
            ) : (
              <div className="bg-transparent"></div>
            )}

            {/* Cell row */}
            {row.map((element, j) => (
              <div
                key={`period-${i}-group-${j}`}
                className="flex items-center justify-center p-1"
                style={{
                  backgroundColor: "transparent",
                }}
              >
                {element ? (
                  <ElementCard element={element} />
                ) : (
                  <div className="bg-transparent border border-gray-600 shadow-sm"></div>
                )}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PeriodicTable;
