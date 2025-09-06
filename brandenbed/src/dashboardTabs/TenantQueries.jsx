import React from "react";

export default function TenantQueries() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Tenant Queries</h2>
      <div className="bg-white p-4 rounded shadow space-y-3">
        <div className="flex justify-between">
          <span>Leaky faucet - Kreuzberg</span>
          <span className="text-yellow-600">In Progress</span>
        </div>
        <div className="flex justify-between">
          <span>No hot water - Mitte Loft</span>
          <span className="text-red-600">Pending</span>
        </div>
        <div className="flex justify-between">
          <span>Light fixture repair - Charlottenburg</span>
          <span className="text-green-600">Resolved</span>
        </div>
      </div>
    </>
  );
}
