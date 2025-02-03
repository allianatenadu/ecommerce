import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems }) {
  // Initialize navigate function
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    // Navigate to the checkout page
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto mt-10 p-20">
      <h2 className="text-2xl font-bold">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between border-b py-2">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          ))}
        </div>
      )}
      {/* Button to proceed to checkout */}
      <button
        className="bg-green-500 text-white p-2 rounded mt-4"
        onClick={handleProceedToCheckout}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Cart;
