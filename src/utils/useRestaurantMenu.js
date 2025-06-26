import { useState, useEffect } from "react";
import { MENUAPI } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENUAPI + resId);

    if (!data) {
      console.error("Failed to fetch data");
      return;
    }
    
    const json = await data.json();
    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
