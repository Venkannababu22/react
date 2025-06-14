import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENUAPI } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENUAPI + resId);
    console.log("data", data);

    if (!data) {
      console.error("Failed to fetch data");
      return;
    }

    const json = await data.json();
    setResInfo(json?.data);
        
  };
  

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
      (item) => item?.card?.info
    ) || [];

    console.log(itemCards);

  const mainTitle =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.title;

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <h3>
        {avgRating} ({totalRatingsString}) {costForTwoMessage}
      </h3>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      <p>{sla.slaString}</p>
      <h2>{mainTitle}</h2>
      <ul className="menu-items">
        {itemCards.map((item) => (
          <li key={item.id}>
            {item.name} - Rs.{item.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
