import React from "react";
import groupColors from "@/data/groupColors";

const ElementCardFront = ({ element, onFlip }) => {
  const cardColor = groupColors[element.group] || groupColors.Unknown;

  return (
    <div
      className={`w-full h-full ${cardColor} shadow-lg flex flex-col p-6 relative`}
    >
      <div className="flex items-start justify-between">
        <span className="text-lg font-bold text-gray-900">
          {element.atomicNumber}
        </span>
        <button
          className="text-gray-600 hover:text-gray-900 transition"
          onClick={onFlip}
          aria-label="Flip to back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <span className="text-4xl font-bold text-gray-900">
          {element.symbol}
        </span>
        <span className="text-xl font-semibold text-gray-700">
          {element.name}
        </span>
      </div>
      <div className="absolute bottom-6 right-6 text-gray-700">
        {element.atomicMass} g/mol
      </div>
    </div>
  );
};

export default ElementCardFront;
