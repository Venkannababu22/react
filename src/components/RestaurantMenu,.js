import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // useParams is a hook from react-router-dom that allows you to access the URL parameters
  // It returns an object of key/value pairs of the dynamic segments of the URL
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (!resInfo) return <Shimmer />;

  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="min-h-screen w-full bg-[#f5f5f5] px-4 py-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Restaurant Info */}
        <div className="pb-6 border-b border-gray-300">
          <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
          <p className="text-gray-500 text-sm mt-1">{cuisines.join(", ")}</p>

          <div className="flex flex-wrap items-center gap-3 mt-4 text-xs text-gray-700">
            <span className="bg-green-100 text-green-700 px-2 py-0.5 font-semibold">
              ⭐ {avgRating}
            </span>
            <span className="bg-gray-100 px-2 py-0.5">
              {costForTwoMessage}
            </span>
            <span className="bg-gray-100 px-2 py-0.5">
              {totalRatingsString}
            </span>
            {sla?.slaString && (
              <span className="bg-gray-100 px-2 py-0.5">
                ⏱️ {sla.slaString}
              </span>
            )}
          </div>
        </div>

        {/* Menu Section */}
        <div className="mt-6 bg-white rounded-md">
          {categories.map((category, index) => (
            <RestaurantCategory
              key={index}
              data={category.card.card}
              showItems={index === showIndex}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
