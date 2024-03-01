import React from "react";
import ItemList from "./ItemList";

function RestaurantCategory({ data, showItems, setShowItems }) {
  const handleClick = () => {
    setShowItems((prev) => {
      if (prev) {
        if (prev === data?.title) {
          return null;
        }
      }
      return data?.title;
    });
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          {showItems === data?.title ? <span>⬆️</span> : <span>⬇️</span>}
        </div>
        {showItems === data?.title && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
}

export default RestaurantCategory;
