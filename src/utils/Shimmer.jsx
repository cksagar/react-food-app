const Shimmer = () => {
  return (
    <div className=" h-80 bg-white shadow-lg rounded-lg overflow-hidden animate-pulse">
      {/* Image Placeholder */}
      <div className="h-40 bg-gray-300 w-full"></div>

      {/* Content Placeholder */}
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default Shimmer;
