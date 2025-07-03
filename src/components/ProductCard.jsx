import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      to={`/collection/product/${product.id}`}
      className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
    >
      {/* 🖼️ Placeholder + Fade-in Image */}
      <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
          onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
        />
      </div>

      {/* 🔤 Text Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-500 mb-2">{product.artist}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-green-600 font-bold">₹{product.price}</span>
          <span className="text-yellow-500 text-sm">⭐ {product.rating}</span>
        </div>
        {/* <span className="inline-block mt-3 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
          {product.tag}
        </span> */}
      </div>
    </Link>
  );
}

export default ProductCard;
