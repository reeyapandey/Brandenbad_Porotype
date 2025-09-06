import React from "react";

export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  );
}
