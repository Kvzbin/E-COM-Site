import React from "react";
import { products } from "../utils/productsData";
import { Link } from "react-router-dom";

function BestSeller() {
  return (
    <div className="py-10 px-4 sm:px-8 md:px-12 lg:px-20">
      <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">
        <span className="text-orange-600">Best</span> Seller
      </h1>
      <p className="text-sm font-semibold text-orange-600 text-center mb-4">
        Dress like a beat, move like a melody—where fashion meets rhythm.
        Whether you're vibing to your favorite tunes.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {products.slice(0, 5).map((item) => (
          <Link
            to={`/collection/product/${item.id}`}
            key={item.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
          >
            {/* 🖼️ Placeholder + Lazy Load + Fade-in */}
            <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
                onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
              />
            </div>

            {/* 📦 Product Info */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-sm text-gray-500 mb-2">{item.artist}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-green-600 font-bold">₹{item.price}</span>
                <span className="text-yellow-500 text-sm">
                  ⭐ {item.rating}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
