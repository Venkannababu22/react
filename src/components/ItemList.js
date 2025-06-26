import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="py-6 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-600">
              {item.card.info.description}
            </p>
          </div>

          <div className="w-3/12 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-26 rounded-lg object-cover"
              alt={item.card.info.name}
            />
            <button
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 
                         px-4 py-1 bg-slate-100 shadow-md rounded-md hover:bg-slate-200"
            >
              Add +
            </button>{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
