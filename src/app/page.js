import Filters from "@/components/Filters";
import Game from "@/components/Game";
import Legend from "@/components/Legend";
import PeriodicTable from "@/components/PeriodicTable";
import elements from "@/data/elementsData";

export default function Home() {
  return (
    <main className="bg-slate-900 w-full flex min-h-screen flex-col justify-between">
      <PeriodicTable elements={elements} />
      <Legend />
      <Filters />
      <Game />
      <footer className="text-center text-gray-600 text-xs mt-4">Footer</footer>
    </main>
  );
}
