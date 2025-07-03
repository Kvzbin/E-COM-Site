import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../utils/productsData";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  console.log(id)
  const product = products.find((p) => p.id.toString() === id);
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState(null);
  const [message, setMessage] = useState("");

  if (!product) {
    return (
      <div className="text-center mt-20 text-red-500 font-bold">
        Product not found
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      setMessage("Please select a size before adding to cart.");
      return;
    }

    addToCart(product, selectedSize);
    setMessage("✅ Added to cart!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="min-h-screen bg-orange-50 p-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Left: Image */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl shadow-xl w-full max-w-md"
        />
      </div>

      {/* Right: Info */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
        <div className="flex items-center gap-2 text-yellow-500 text-sm my-2">
          ⭐ {product.rating} | 234 Reviews
        </div>
        <p className="text-gray-600 mb-3">{product.description}</p>

        <p className="text-2xl text-orange-600 font-bold mb-3">
          ₹{product.price.toLocaleString()}
        </p>

        {/* Sizes */}
        <div className="mb-4">
          <span className="font-semibold text-gray-700">Select Size:</span>
          <div className="flex gap-2 mt-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-1 border rounded ${
                  selectedSize === size
                    ? "bg-orange-500 text-white"
                    : "hover:bg-orange-100"
                } transition`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition w-full sm:w-1/2"
        >
          Add to Cart
        </button>

        {message && (
          <p className="mt-3 text-sm font-medium text-green-600">{message}</p>
        )}

        {/* Return Policy */}
        <div className="mt-6 border-t pt-4">
          <h3 className="font-semibold text-gray-800 mb-1">Return Policy</h3>
          <p className="text-sm text-gray-600">
            Easy returns within <span className="text-orange-600 font-semibold">7 days</span> of
            delivery. No questions asked.
          </p>
        </div>
      </div>

      {/* Reviews */}
      <div className="col-span-full mt-10 border-t pt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Customer Reviews
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <p className="text-sm text-gray-700">
              “Love the fabric and the fit! Looks amazing for outings.”
            </p>
            <span className="text-xs text-orange-600">– Priya</span>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <p className="text-sm text-gray-700">
              “Delivered on time. Size is perfect. Worth the price.”
            </p>
            <span className="text-xs text-orange-600">– Rohan</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
