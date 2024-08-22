import elementsData from "@/data/elementsData";
import ElementCard from "@/components/ElementCard";

export default function Table() {
  return (
    <div className="container mx-auto p-6 text-black">
      <h1 className="text-4xl font-bold mb-8">Éléments Chimiques</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 card-container">
        {elementsData.map((element, index) => (
          <div key={index} className="card">
            <ElementCard element={element} />
          </div>
        ))}
      </div>
    </div>
  );
}
