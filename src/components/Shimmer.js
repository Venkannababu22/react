const Shimmer = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array(16).fill("").map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-white shadow rounded-xl overflow-hidden w-full"
        >
          <div className="h-40 bg-gray-300 w-full" />
          <div className="p-4 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4" />
            <div className="h-4 bg-gray-300 rounded w-1/2" />
            <div className="h-4 bg-gray-300 rounded w-5/6" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
