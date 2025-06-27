import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  //dont use this pattern, it is not a good practice to define a state variable inside a component
  // it is better to define it at the top level of the component
  // not in if, ofr, while, functions, or inside another function
  // this is because the state variable will be redefined every time the component re-renders
  //example of bad practice:

  // if(){
  //   const [searchText, setSearchText] = useState("");
  // }

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    if (!data.ok) {
      console.error("Failed to fetch data");
      return;
    }

    const json = await data.json();
    //Optional chaining to safely access nested properties
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1 className="text-center text-red-500 text-xl mt-10">
        Looks like you are offline, please check your internet connection
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body px-6 py-4 bg-[#f5f5f5] min-h-screen">
      <div className="filter flex flex-wrap items-center justify-between bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex items-center flex-wrap gap-2">
          <input
            type="text"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
            value={searchText}
            placeholder="Search for restaurants..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-600 transition-all"
            onClick={() => {
              let filteredRestaurants = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              setFilteredRest(filteredRestaurants);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
        <div className="mt-2 sm:mt-0">
          <button
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md text-sm hover:bg-gray-200 transition-all"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.6
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="flex items-center mt-2 sm:mt-0">
          <label className="mr-2 text-sm text-gray-700">UserName</label>
          <input
            type="text"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
            onChange={(e) => setUserName(e.target.value)}
            value={loggedInUser}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {filteredRest.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant.info} />
            ) : (
             
            )} */}
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
