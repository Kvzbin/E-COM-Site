import React, { useState } from "react";
import { useCart } from "../context/CartContext";

function ProductInfoCard({ product }) {
  const [selectedSize, setSelectedSize] = useState("");
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize) return alert("Please select a size");
    addToCart({ ...product, size: selectedSize, quantity: 1 });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h2>

      <div className="flex items-center gap-2 text-orange-500">
        {"\u2B50".repeat(Math.round(product.rating))}
        <span className="text-gray-600">({product.rating})</span>
      </div>

      <p className="text-xl font-semibold text-orange-600 mt-3 mb-2">
        Rs.{product.price}
      </p>

      <p className="text-gray-600 mb-4">
        {product.description ||
          "Experience timeless elegance in our bodycon collection, crafted for confidence and style."}
      </p>

      <h4 className="font-semibold text-sm mb-1">Select Size</h4>
      <div className="flex gap-2 mb-6">
        {["S", "M", "L", "XL", "XXL"].map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`border px-4 py-2 rounded-md text-sm hover:border-orange-500 transition ${
              selectedSize === size ? "bg-orange-500 text-white" : ""
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      <button
        onClick={handleAddToCart}
        className="bg-orange-600 w-full text-white py-2 rounded-md hover:bg-orange-700 transition"
      >
        Add to Cart
      </button>

      <div className="mt-4 text-sm text-gray-500">
        <p>✅ 100% Original product</p>
        <p>🚚 COD available | Easy return within 7 days</p>
      </div>
    </div>
  );
}

export default ProductInfoCard;
