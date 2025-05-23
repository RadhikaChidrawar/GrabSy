
import React, { useState } from "react";
import { mockData } from "../assets/mockData"; // Import product data
import ProductCart from "../components/ProductCart"; // Import ProductCart component

function Shop() {
  // Extract categories from product data
  const categories = ["All", ...new Set(mockData.map((p) => p.category))];

  // State to manage selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? mockData
      : mockData.filter((p) => p.category === selectedCategory);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>

      {/* Category Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md font-semibold ${
              selectedCategory === category
                ? "bg-red-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full">No products available</p>
        )}
      </div>
    </div>
  );
}

export default Shop;
