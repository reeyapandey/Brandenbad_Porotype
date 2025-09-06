import React from "react";

export default function RentCollection() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Rent Collection</h2>
      <form className="bg-white p-4 rounded shadow space-y-3">
        <input
          type="text"
          placeholder="Property"
          className="border w-full p-2 rounded"
        />
        <input
          type="text"
          placeholder="Tenant"
          className="border w-full p-2 rounded"
        />
        <input
          type="number"
          placeholder="Amount (€)"
          className="border w-full p-2 rounded"
        />
        <select className="border w-full p-2 rounded">
          <option>Bank Transfer</option>
          <option>Credit Card</option>
          <option>Cash</option>
        </select>
        <input
          type="text"
          placeholder="Transaction ID"
          className="border w-full p-2 rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit Payment
        </button>
      </form>

      <div className="mt-4 bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-2">Payment History</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500">
              <th>Tenant</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Anna M.</td>
              <td>€1,200</td>
              <td className="text-green-600">Verified</td>
            </tr>
            <tr>
              <td>Oliver S.</td>
              <td>€850</td>
              <td className="text-yellow-600">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
