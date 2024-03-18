import React from "react";
import { CDN_URL } from "../utils/constants";
import star from "../assets/icons/star.svg";

const RestaurantCard = ({ resData }) => {
  const { name, avgRating, cuisines, cloudinaryImageId, locality, sla } =
    resData;
  return (
    <div className="p-4 m-4 w-[250px]">
      <img
        className="w-[100%] h-40 rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-body flex flex-col gap-4">
        <div className="font-bold">{name}</div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <img className="w-5" src={star} />
            <div>{avgRating} stars</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="dot"></div>
            <div>{sla?.slaString}</div>
          </div>
        </div>
        <div className="res-description">
          <div className="text-ellipsis whitespace-nowrap overflow-hidden">
            {cuisines?.join(", ")}
          </div>
          <div>{locality}</div>
        </div>
      </div>
    </div>
  );
};

export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-200 text-black m-2 px-4 py-1 rounded-lg">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
