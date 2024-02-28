import React from "react";
import { useParams } from "react-router-dom";
import ContentLoader from "react-content-loader";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function RestaurantMenu() {
  const { resId } = useParams();
  const { resInfo, loading } = useRestaurantMenu(resId);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card || {};

  return loading ? (
    <ContentLoader />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs{" "}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
