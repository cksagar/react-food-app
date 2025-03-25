const CategoryItem = ({ item }) => {
  return (
    <div
      className="flex justify-between items-center w-full p-2 border-b-2"
      key={item.card.info.id}
    >
      {/* Left Section (Text Content) */}
      <div className="w-9/12">
        <p className="text-lg font-semibold">{item.card.info.name}</p>
        <p className="text-sm text-gray-600">
          Price: ₹{item.card.info.price / 100}
        </p>
      </div>

      {/* Right Section (Button) */}
      <div className="w-3/12 flex justify-end">
        <button className="cursor-pointer px-2 py-1 bg-green-500 text-white rounded-lg shadow-md">
          -
        </button>
        <span className="flex justify-center mt-1">Add</span>
        <button className="cursor-pointer px-2 py-1 bg-green-500 text-white rounded-lg shadow-md">
          +
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
