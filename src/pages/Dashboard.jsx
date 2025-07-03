import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  const mockOrders = [
    { id: 1, product: "Orange Hoodie", date: "2024-06-01", amount: "₹799" },
    { id: 2, product: "Black Jeans", date: "2024-05-25", amount: "₹1299" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-orange-600 mb-6">👋 Welcome, {user?.name}</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="p-5 border rounded-lg shadow-md bg-orange-100">
            <h3 className="text-lg font-semibold mb-2">📧 Email</h3>
            <p className="text-gray-700">{user?.email}</p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-orange-500 mb-4">🛒 Previous Orders</h3>
        <div className="space-y-4">
          {mockOrders.map((order) => (
            <div
              key={order.id}
              className="p-4 bg-orange-50 rounded-md border flex justify-between items-center shadow-sm"
            >
              <div>
                <div className="font-medium text-lg">{order.product}</div>
                <div className="text-sm text-gray-500">Ordered on {order.date}</div>
              </div>
              <div className="font-bold text-orange-600">{order.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
