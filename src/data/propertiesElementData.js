// propertiesElementData.js

const borderStyles = {
  primordial: {
    borderStyle: "solid",
    borderWidth: "5px",
    borderColor: "white",
  },
  synthetic: {
    borderStyle: "dashed",
    borderWidth: "5px",
    borderColor: "white",
  },
  disintegration: {
    borderStyle: "dotted",
    borderWidth: "5px",
    borderColor: "white",
  },
  default: {
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "white",
  },
};

const textColors = {
  gas: { color: "#60a5fa" },
  liquid: { color: "#2dd4bf" },
  solid: { color: "#000000" },
  default: { color: "#ffffff" },
};

const colors = {
  Nonmetal: "#ff9999",
  "Noble Gas": "#e6e6e6",
  "Alkali Metal": "#ffcc99",
  "Alkaline Earth Metal": "#ffccff",
  Metalloid: "#c2c2f0",
  Halogen: "#ffb3e6",
  "Transition Metal": "#c2f0c2",
  "Post-Transition Metal": "#f0c2c2",
  Lanthanide: "#b3b3e6",
  Actinide: "#e6b3b3",
  default: "transparent",
};

export { borderStyles, textColors, colors };
