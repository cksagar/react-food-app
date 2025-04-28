import { useState } from "react";

const RestaurantFilter = ({ restaurantList, onFilterToggle }) => {
  const [isFiltered, setIsFiltered] = useState(false);

  const handleClick = () => {
    const newFilterState = !isFiltered;
    setIsFiltered(newFilterState);
    onFilterToggle(newFilterState);
  };

  return (
    <div className="flex items-center">
      <button
        className={`px-4 py-2 w-52 rounded-lg transition-colors duration-300 cursor-pointer ${
          isFiltered ? "bg-green-500" : "bg-green-300"
        }`}
        onClick={handleClick}
      >
        {isFiltered ? "Remove Filter" : "Filter by Rating (≥ 4)"}
      </button>
      <p className="ml-2  text-gray-500">
        Showing {restaurantList.length} restaurants
      </p>
    </div>
  );
};

export default RestaurantFilter;
