import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = ({ addToCart }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Hardcoded product data with categories
  const products = [
    {
      id: 1,
      name: "Shoes",
      price: 20,
      image: "src/images/IMG-20250123-WA0061.jpg",
      category: "Safety Shoes",
    },
    {
      id: 2,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA0065.jpg",
      category: "Safety Shoes",
    },
    {
      id: 3,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA0063.jpg",
      category: "Safety Shoes",
    },
    {
      id: 4,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA0064.jpg",
      category: "Safety Shoes",
    },
    {
      id: 5,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA0065.jpg",
      category: "Safety Shoes",
    },
    {
      id: 6,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA0066.jpg",
      category: "Safety Shoes",
    },
    {
      id: 7,
      name: "Shirt",
      price: 30,
      image: "src/images/IMG-20250123-WA0067.jpg",
      category: "Reflective Vest",
    },
    {
      id: 8,
      name: "Shirt",
      price: 30,
      image: "src/images/IMG-20250123-WA0068.jpg",
      category: "Reflective Vest",
    },
    {
      id: 9,
      name: "Shirt",
      price: 30,
      image: "src/images/IMG-20250123-WA0068.jpg",
      category: "Reflective Vest",
    },
    {
      id: 10,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA0069.jpg",
      category: "Safety Shoes",
    },
    {
      id: 11,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA0070.jpg",
      category: "Safety Shoes",
    },
    {
      id: 12,
      name: "Hats",
      price: 30,
      image: "src/images/IMG-20250123-WA0072.jpg",
      category: "Head Protection",
    },
    {
      id: 13,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA0075.jpg",
      category: "Safety Shoes",
    },
    {
      id: 14,
      name: "Shirt",
      price: 30,
      image: "src/images/IMG-20250123-WA0076.jpg",
      category: "Protective Vest",
    },
    {
      id: 15,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA0077.jpg",
      category: "Safety Shoes",
    },
    {
      id: 16,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA0078.jpg",
      category: "Safety Shoes",
    },
    {
      id: 17,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA0079.jpg",
      category: "Safety Shoes",
    },
    {
      id: 18,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA0080.jpg",
      category: "Safety Shoes",
    },

    {
      id: 20,
      name: "Helmet",
      price: 30,
      image: "src/images/IMG-20250123-WA0082.jpg",
      category: "Head Protection",
    },
    {
      id: 21,
      name: "Hat",
      price: 30,
      image: "src/images/IMG-20250123-WA0083.jpg",
      category: "Head Protection",
    },
    {
      id: 22,
      name: "Glasses",
      price: 30,
      image: "src/images/IMG-20250123-WA0084.jpg",
      category: "Safety Glasses",
    },

    {
      id: 24,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA0086.jpg",
      category: "Safety Shoes",
    },

    {
      id: 26,
      name: "Shirt",
      price: 30,
      image: "src/images/IMG-20250123-WA0088.jpg",
      category: "Protective Vest",
    },
    {
      id: 27,
      name: "Gloves",
      price: 30,
      image: "src/images/IMG-20250123-WA0089.jpg",
      category: "Hands Protection",
    },
    {
      id: 29,
      name: "Shirt",
      price: 30,
      image: "src/images/IMG-20250123-WA0091.jpg",
      category: "Protective Vest",
    },
    {
      id: 30,
      name: "Sink",
      price: 30,
      image: "src/images/IMG-20250123-WA0092.jpg",
      category: " Safety Garget",
    },
    {
      id: 31,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA0093.jpg",
      category: "Safety Shoes",
    },
    {
      id: 32,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA0094.jpg",
      category: "Safety Shoes",
    },
    {
      id: 33,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA0095.jpg",
      category: "Safety Shoes",
    },
    {
      id: 34,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA0096.jpg",
      category: "Safety Shoes",
    },
    {
      id: 35,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA0097.jpg",
      category: "Safety Shoes",
    },
    {
      id: 36,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA0098.jpg",
      category: "Safety Shoes",
    },
    {
      id: 37,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA0099.jpg",
      category: "Safety Shoes",
    },
    {
      id: 38,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA00100.jpg",
      category: "Safety Shoes",
    },
    {
      id: 39,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA00102.jpg",
      category: "Safety Shoes",
    },
    {
      id: 40,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA00103.jpg",
      category: "Safety Shoes",
    },
    {
      id: 41,
      name: "Glasses",
      price: 30,
      image: "src/images/IMG-20250123-WA00104.jpg",
      category: "Safety Glasses",
    },
    {
      id: 42,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA00105.jpg",
      category: "Safety Shoes",
    },
    {
      id: 43,
      name: "Hand Protection",
      price: 30,
      image: "src/images/IMG-20250123-WA00106.jpg",
      category: "Hands Protection",
    },
    {
      id: 44,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA00107.jpg",
      category: "Safety Shoes",
    },

    {
      id: 46,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA00109.jpg",
      category: "Safety Shoes",
    },
    {
      id: 47,
      name: "Glasses",
      price: 30,
      image: "src/images/IMG-20250123-WA00200.jpg",
      category: "Safety Glasses",
    },
    {
      id: 48,
      name: "Shirt",
      price: 30,
      image: "src/images/IMG-20250123-WA00201.jpg",
      category: "Protective Vest",
    },
    {
      id: 49,
      name: "Shirt",
      price: 30,
      image: "src/images/IMG-20250123-WA00202.jpg",
      category: "Protective Vest",
    },
    {
      id: 50,
      name: "Gloves",
      price: 30,
      image: "src/images/IMG-20250123-WA00203.jpg",
      category: "Hands Protection",
    },
    {
      id: 51,
      name: "Halemet",
      price: 30,
      image: "src/images/IMG-20250123-WA00204.jpg",
      category: "Head Protection",
    },
    {
      id: 52,
      name: "Shirt",
      price: 30,
      image: "src/images/IMG-20250123-WA00205.jpg",
      category: "Reflective Vest",
    },
    {
      id: 53,
      name: "Shoes",
      price: 30,
      image: "src/images/IMG-20250123-WA00206.jpg",
      category: "Safety Shoes",
    },
    {
      id: 54,
      name: "First Aid Kit",
      price: 30,
      image: "src/images/IMG-20250123-WA00207.jpg",
      category: "Safety Garget",
    },
    {
      id: 55,
      name: "Garget",
      price: 30,
      image: "src/images/IMG-20250123-WA00208.jpg",
      category: "Safety Garget",
    },
    {
      id: 56,
      name: "Garget",
      price: 30,
      image: "src/images/IMG-20250123-WA00209.jpg",
      category: "Safety Garget",
    },
    // Add more products here...
  ];

  // Categorized products
  const categories = [...new Set(products.map((product) => product.category))];

  // Filter products based on search query
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    // Delay fade-in effect by 0.5 seconds after the component mounts
    setTimeout(() => setFadeIn(true), 500);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Products for Sale</h1>

      {/* Search bar */}
      <div className="my-4">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>

      {/* Category buttons */}
      <div className="my-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className="mr-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => setSearchQuery(category)} // Filter by category when clicked
          >
            {category}
          </button>
        ))}
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 ${
          fadeIn ? "opacity-100" : "opacity-0"
        } transition-opacity duration-700`}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
