import React from "react";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
function Navbar({ cartCount }) {
  return (
    <nav className="bg-black text-white p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="src/images/IMG-20250123-WA0081.jpg"
            alt="My Image"
            className="h-20 w-34 object-contain mr-4" // Adjust height and width as needed
          />
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-green-400 transition-colors">
            Home
          </Link>
          <Link
            to="/checkout"
            className="hover:text-green-400 transition-colors"
          >
            Checkout
          </Link>
          <Link to="/about" className="hover:text-green-400 transition-colors">
            About
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/cart"
            className="relative hover:text-green-400 transition-colors"
          >
            <FaShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
