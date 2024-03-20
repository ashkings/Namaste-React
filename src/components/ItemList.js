import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/redux/cartSlice";

function ItemList({ items }) {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="list-item"
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>

          <div className="w-3/12 p-4 rounded-sm">
            <img src={CDN_URL + item?.card?.info?.imageId} className="w-full" />
            <button className="relative bottom-4 left-[50%] translate-x-[-50%] px-2 py-1 bg-black text-white shadow-lg  rounded-lg">
              {item.quantity ? (
                <div className="flex gap-4 items-center">
                  <div onClick={() => handleRemoveFromCart(item)}>-</div>
                  <div>{item.quantity}</div>
                  <div onClick={() => handleAddToCart(item)}>+</div>
                </div>
              ) : (
                <div onClick={() => handleAddToCart(item)}>Add</div>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
