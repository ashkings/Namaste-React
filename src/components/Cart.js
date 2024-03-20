import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <div className="flex justify-between">
        <div className="text-2xl font-bold">Cart</div>
        {cart.items.length > 0 ? (
          <button
            className="h-10 px-6 font-semibold rounded-md bg-black text-white"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        ) : (
          <div className="font-bold m-10">
            Your cart is empty! Add items to the cart
          </div>
        )}
      </div>
      <div className="w-6/12 m-auto">
        <ItemList items={cart.items} />
      </div>
    </div>
  );
}

export default Cart;
