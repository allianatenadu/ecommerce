import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg border border-gray-300 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain rounded-md mb-4" // Ensures image fits without cropping
      />
      <h2 className="font-bold text-xl">{product.name}</h2>
      <p className="text-gray-500">${product.price}</p>
      <button
        className="bg-green-500 text-white py-2 px-4 mt-2 rounded transition duration-200 hover:bg-green-600"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
