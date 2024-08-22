import ElementCard from "@/components/ElementCard";

const organizeElements = (elements) => {
  if (!Array.isArray(elements)) {
    console.error("Expected 'elements' to be an array, but got:", elements);
    return Array.from({ length: 9 }, () => Array(18).fill(null));
  }

  const periods = Array.from({ length: 9 }, () => Array(18).fill(null));

  elements.forEach((element) => {
    const { period, group } = element;

    if (period >= 1 && period <= 9 && group >= 1 && group <= 18) {
      periods[period - 1][group - 1] = element;
    } else {
      console.error(`Element with invalid period or group: ${element.symbol}`);
    }
  });

  return periods;
};

const PeriodicTable = ({ elements }) => {
  const periods = organizeElements(elements);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-white mt-4 mb-8">
        Periodic Table of Elements
      </h1>
      <div
        className="grid grid-cols-18 gap-1"
        style={{ gridTemplateColumns: "repeat(18, 1fr)" }}
      >
        {periods.flat().map((element, index) => {
          const isLastRow = Math.floor(index / 18) === 6;
          return (
            <div
              key={index}
              className={`flex items-center justify-center ${
                isLastRow ? "mb-20" : ""
              }`}
            >
              {element ? (
                <ElementCard element={element} />
              ) : (
                <div className="bg-transparent"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PeriodicTable;
