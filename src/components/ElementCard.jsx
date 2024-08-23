import React from "react";
import { borderStyles, colors, textColors } from "@/data/propertiesElementData";

export default function ElementCard({ element, specialClass }) {
  const backgroundColor = colors[element.property] || colors.default;
  const borderStyle = borderStyles[element.abundance] || borderStyles.default;
  const textColor = textColors[element.stateMatter] || textColors.default;

  return (
    <div
      className={`rounded-lg shadow-md flex flex-col justify-between gap-1 w-full h-full ${specialClass}`}
      style={{ ...borderStyle, backgroundColor }}
    >
       <div className="flex justify-between px-2">
        <div className="flex justify-center">
          <span style={textColor} className="text-xs font-semibold">
            {element.atomicNumber}
          </span>
        </div>
        <div className="flex justify-center">
          <span style={textColor} className="text-xs font-semibold">
            {element.atomicMass}
          </span>
        </div>
      </div>

        <div className="flex-1 flex items-center justify-center">
        {element.symbol ? (
          <span style={textColor} className="text-3xl font-extrabold">
            {element.symbol}
          </span>
        ) : (
          <span
            style={{ ...textColor, fontStyle: "italic" }}
            className="text-sm"
          >
            ---
          </span>
        )}
      </div>

      <div className="flex justify-center">
        <h3 style={textColor} className="text-sm font-medium">
          {element.name}
        </h3>
      </div>
    </div>
  );
}
