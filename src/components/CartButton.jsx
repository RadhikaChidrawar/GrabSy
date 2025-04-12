import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function CartButton() {
  return (
    <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center">
      <FaShoppingCart className="mr-2" />
      My Cart
    </button>
  );
}

export default CartButton;
