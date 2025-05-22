import { FILTER_ITEMS } from "../constants";
import type { TFILTER_ITEMS } from "../types";

type TTodoFilters = {
  filter: string;
  setFilter: (filter: TFILTER_ITEMS) => void;
  clearCompleted: () => void;
  itemsLeft: number;
};

export default function TodoFilters({
  filter,
  setFilter,
  clearCompleted,
  itemsLeft,
}: TTodoFilters) {
  return (
    <div className="flex justify-between items-center text-sm text-gray-500 px-4 py-2 border-t">
      <span>{itemsLeft} items left</span>
      <div className="space-x-2 mx-12">
        {FILTER_ITEMS.map((currentFilter) => (
          <button
            key={currentFilter}
            className={`px-2 py-1 border rounded ${
              filter === currentFilter ? "border-red-300" : "border-transparent"
            }`}
            onClick={() => setFilter(currentFilter)}
          >
            {currentFilter[0].toUpperCase() + currentFilter.slice(1)}
          </button>
        ))}
      </div>
      <button onClick={clearCompleted}>Clear completed</button>
    </div>
  );
}
