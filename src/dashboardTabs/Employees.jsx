import React from "react";

export default function Employees() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Employees</h2>
      <div className="bg-white p-4 rounded shadow space-y-2">
        <div className="flex justify-between">
          <span>Max M. - Manager</span>
          <span>Admin</span>
        </div>
        <div className="flex justify-between">
          <span>Lisa K. - Support</span>
          <span>Editor</span>
        </div>
        <div className="flex justify-between">
          <span>Jonas F. - Accountant</span>
          <span>Viewer</span>
        </div>
      </div>
    </>
  );
}
