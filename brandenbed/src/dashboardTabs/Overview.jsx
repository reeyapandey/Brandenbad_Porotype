import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Overview() {
  const stats = {
    properties: 524,
    clients: 1287,
    monthlyRentCollected: 45230,
  };

  const rentData = [
    { month: "Jan", amount: 12000 },
    { month: "Feb", amount: 15000 },
    { month: "Mar", amount: 11000 },
    { month: "Apr", amount: 18000 },
  ];

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Quick Stats</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <div className="text-sm text-gray-500">Properties</div>
          <div className="text-2xl font-bold">{stats.properties}</div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="text-sm text-gray-500">Clients</div>
          <div className="text-2xl font-bold">{stats.clients}</div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="text-sm text-gray-500">Rent Collected (M)</div>
          <div className="text-2xl font-bold">
            €{Math.floor(stats.monthlyRentCollected / 1000)}k
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-2">Monthly Rent Collection</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={rentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#3b82f6" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
