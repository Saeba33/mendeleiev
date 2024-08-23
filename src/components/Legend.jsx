import React from "react";
import { colors, borderStyles, textColors } from "@/data/propertiesElementData";

const Legend = () => {
  return (
    <div className="text-white my-28 p-8 bg-gray-800 rounded-lg shadow-lg">
      <h3 className="text-center text-3xl font-bold mb-12">Legend</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col bg-gray-700 p-4 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-4">Métaux :</h4>
          {Object.entries({
            "Alkali Metal": colors["Alkali Metal"],
            "Alkaline Earth Metal": colors["Alkaline Earth Metal"],
            Lanthanide: colors.Lanthanide,
            Actinide: colors.Actinide,
            Metalloid: colors.Metalloid,
            "Transition Metal": colors["Transition Metal"],
            "Post-Transition Metal": colors["Post-Transition Metal"],
          }).map(([label, color]) => (
            <div key={label} className="flex items-center mb-2">
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
              <span className="ml-3">{label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col bg-gray-700 p-4 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-4">Non métaux :</h4>
          {Object.entries({
            Nonmetal: colors.Nonmetal,
            Halogen: colors.Halogen,
            "Noble Gas": colors["Noble Gas"],
          }).map(([label, color]) => (
            <div key={label} className="flex items-center mb-2">
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
              <span className="ml-3">{label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col bg-gray-700 p-4 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-4">Abundance :</h4>
          {Object.entries(borderStyles)
            .filter(([label]) => label !== "default") // Exclude "default"
            .map(([label, style]) => (
              <div key={label} className="flex items-center mb-2">
                <div
                  className="w-6 h-6 border rounded"
                  style={{
                    border: `${style.borderWidth} ${style.borderStyle} ${style.borderColor}`,
                  }}
                ></div>
                <span className="ml-3">{label}</span>
              </div>
            ))}
        </div>

        <div className="flex flex-col bg-gray-700 p-4 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-4">Card</h4>
          <div className="flex flex-col border-2 border-white p-3 rounded-lg mb-4">
            <span className="font-semibold">Atomic number</span>
            <span className="font-semibold">Symbol</span>
            <span className="font-semibold">Name</span>
            <span className="font-semibold">
              Atomic mass [ou celle de l'isotope le plus stable]
            </span>
          </div>
          <div className="flex justify-between text-lg">
            <span style={{ color: textColors.gas.color }}>gas</span>
            <span style={{ color: textColors.liquid.color }}>liquid</span>
            <span style={{ color: textColors.solid.color }}>solid</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legend;
