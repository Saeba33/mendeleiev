import { borderStyles, colors, textColors } from "@/data/propertiesElementData";

export default function ElementCard({ element }) {
  const backgroundColor = colors[element.property];
  const borderStyle = borderStyles[element.abundance];
  const textColor = textColors[element.stateMatter] || "text-white";

  return (
    <div
      className={`rounded-lg shadow-lg p-2 flex flex-col items-center justify-center text-xs w-full h-full ${borderStyle}`}
      style={{ backgroundColor }}
    >
      <span className={`text-xs ${textColor}`}>{element.atomicNumber}</span>
      <span className={`text-sm font-extrabold ${textColor}`}>{element.symbol}</span>
      <h3 className={`${textColor}`}>{element.name}</h3>
      <span className={`text-xs ${textColor}`}>{element.atomicMass}</span>
    </div>
  );
}
