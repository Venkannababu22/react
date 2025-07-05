import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };


  return (
    <div>
      {/* Header */}
      <div className="w-11/12 sm:w-6/12 mx-auto my-4 bg-white shadow-md rounded-lg border border-gray-100">
        <div
          className="flex justify-between items-center cursor-pointer px-5 py-4 hover:bg-gray-50 transition"
          onClick={handleClick}
        >
          <span className="font-semibold text-base text-gray-800">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-xl">{!showItems ? "⬇️" : "⬆️"}</span>
        </div>

        {/* Accordion Body */}
        {showItems && <ItemList items={data.itemCards} />}
        
      </div>
    </div>
  );
  
};

export default RestaurantCategory;
