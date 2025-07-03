import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, updateCartItem, removeFromCart } = useCart();
  const shipping = 100;

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
        Your Cart
      </h2>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* 🛍️ Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center text-gray-500">Your cart is empty.</div>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                    <p className="text-sm text-orange-600 font-medium">
                      ₹{item.price} × {item.quantity}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateCartItem(item.id, item.size, item.quantity - 1)}
                        disabled={item.quantity === 1}
                        className="px-2 py-1 bg-orange-200 text-sm rounded hover:bg-orange-300"
                      >
                        -
                      </button>
                      <span className="px-3 text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateCartItem(item.id, item.size, item.quantity + 1)}
                        className="px-2 py-1 bg-orange-200 text-sm rounded hover:bg-orange-300"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="ml-4 text-sm text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 💳 Summary */}
        <div className="bg-white p-6 rounded-xl shadow-md h-fit">
          <h4 className="text-xl font-bold mb-4 text-orange-600">Summary</h4>
          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Shipping</span>
            <span>₹{shipping}</span>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
          <button className="w-full mt-6 bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;