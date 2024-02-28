import React, { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    setLoading(true);
    const data = await fetch(
      `${MENU_API_URL}${resId}&catalog_qa=undefined&submitAction=ENTER`
    );

    const json = await data.json();
    setLoading(false);
    setResInfo(json.data);
  };

  return { loading, resInfo };
};

export default useRestaurantMenu;
