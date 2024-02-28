import React from "react";
import Ellipses from "./common/Ellipses";
import { CDN_URL } from "../utils/constants";
import star from "../assets/icons/star.svg";

const RestaurantCard = ({ resData }) => {
  const { name, avgRating, cuisines, cloudinaryImageId, locality, sla } =
    resData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-body d-f fd-col gap-8">
        <div className="res-name">{name}</div>

        <div className="d-f ai-c gap-8">
          <div className="d-f ai-c gap-8">
            <img className="res-rating" src={star} />
            <div>{avgRating} stars</div>
          </div>
          <div className="d-f ai-c gap-8">
            <div className="dot"></div>
            <div>{sla?.slaString}</div>
          </div>
        </div>
        <div className="res-description">
          <div>{<Ellipses text={cuisines?.join(", ")} charLimit={30} />}</div>
          <div>{locality}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
