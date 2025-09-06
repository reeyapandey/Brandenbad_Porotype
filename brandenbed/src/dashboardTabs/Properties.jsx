import React from "react";

export default function Properties() {
  const sampleProperties = [
    { id: 1, name: "Prenzlauer Berg Apt", status: "Available", rent: "€1,200" },
    { id: 2, name: "Mitte Loft", status: "Occupied", rent: "€1,900" },
    { id: 3, name: "Kreuzberg Studio", status: "Maintenance", rent: "€850" },
  ];

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Properties</h2>
      <input
        type="text"
        placeholder="Search properties"
        className="border p-2 rounded mb-4 w-full"
      />
      <ul className="space-y-2">
        {sampleProperties.map((p) => (
          <li
            key={p.id}
            className="bg-white p-4 rounded shadow flex justify-between"
          >
            <div>
              <div className="font-medium">{p.name}</div>
              <div className="text-xs text-gray-500">{p.status}</div>
            </div>
            <div className="text-sm">{p.rent}</div>
          </li>
        ))}
      </ul>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Add Property
      </button>
    </>
  );
}
