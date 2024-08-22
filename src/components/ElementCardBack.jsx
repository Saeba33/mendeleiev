import React from "react";
import groupColors from "@/data/groupColors"; 

const ElementCardBack = ({ element, onFlip }) => {

  const cardColor = groupColors[element.group] || groupColors.Unknown;

  return (
    <div className={`w-full h-full ${cardColor} flex flex-col p-6 relative`}>
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition"
        onClick={onFlip}
        aria-label="Flip to front"
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
            d="M12 20V4m0 0l-8 8m8-8l8 8"
          />
        </svg>
      </button>
      <h3 className="text-lg font-bold mb-2">Details</h3>
      <p className="text-sm text-gray-600">
        Electron Configuration: {element.electronConfiguration}
      </p>
      <p className="text-sm text-gray-600">
        Oxidation States: {element.oxidationStates.join(", ")}
      </p>
      <p className="text-sm text-gray-600">Group: {element.group}</p>
      <p className="text-sm text-gray-600">Phase: {element.phase}</p>
      <p className="text-sm text-gray-600">Density: {element.density} g/cm³</p>
      <p className="text-sm text-gray-600">
        Melting Point: {element.meltingPoint} K
      </p>
      <p className="text-sm text-gray-600">
        Boiling Point: {element.boilingPoint} K
      </p>
      <p className="text-sm text-gray-600">
        Discovery Year: {element.discoveryYear}
      </p>
      <p className="text-sm text-gray-600">Discoverer: {element.discoverer}</p>
      <p className="text-sm text-gray-600">Abundance: {element.abundance}</p>
      <p className="text-sm text-gray-600">
        Atomic Radius: {element.atomicRadius} pm
      </p>
      <p className="text-sm text-gray-600">
        Ionization Energy: {element.ionizationEnergy} kJ/mol
      </p>
      <p className="text-sm text-gray-600">
        Electron Affinity: {element.electronAffinity} eV
      </p>
      <p className="text-sm text-gray-600">
        Electronegativity: {element.electronegativity}
      </p>
    </div>
  );
};

export default ElementCardBack;
