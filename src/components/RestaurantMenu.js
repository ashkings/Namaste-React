import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ContentLoader from "react-content-loader";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function RestaurantMenu() {
  const { resId } = useParams();
  const [showItems, setShowItems] = useState(null);
  const { resInfo, loading } = useRestaurantMenu(resId);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[0]?.card?.card?.info || {};

  const categories =
    resInfo?.cards?.[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return loading ? (
    <ContentLoader />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      {categories?.map((category, ind) => (
        <RestaurantCategory
          key={ind}
          data={category?.card?.card}
          showItems={showItems}
          setShowItems={setShowItems}
        />
      ))}
    </div>
  );
}

export default RestaurantMenu;
