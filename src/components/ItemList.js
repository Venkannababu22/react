import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice"; // Assuming you have a Redux action

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action to add item to cart
    // Assuming you have a Redux action called addItem
    // dispatch(addItem(item.card.info));
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="py-6 px-2 border-b border-gray-200 flex justify-between items-start"
        >
          {/* Text Section */}
          <div className="w-9/12 pr-4">
            <div className="mb-1">
              <span className="font-semibold">{item.card.info.name}</span>
              <span className="ml-2 text-sm text-gray-600">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              {item.card.info.description}
            </p>
          </div>

          {/* Image + Add Button */}
          <div className="w-3/12 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-24 object-cover rounded-lg"
              alt={item.card.info.name}
            />
            <button
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 
                         bg-white px-3 py-1 text-sm shadow-md rounded-md font-semibold hover:bg-gray-100"
              onClick={() => handleAddItem(item)}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
