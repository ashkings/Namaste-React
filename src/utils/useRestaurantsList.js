import React, { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "./constants";

const useRestaurantsList = () => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    setLoading(true);
    const data = await fetch(SWIGGY_API_URL);

    const json = await data.json();
    setLoading(false);
    setResInfo(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return { loading, resInfo };
};

export default useRestaurantsList;
