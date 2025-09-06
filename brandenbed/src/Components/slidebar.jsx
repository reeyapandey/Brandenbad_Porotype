import React from "react";

export default function Sidebar({ activeTab, setActiveTab, setView }) {
  return (
    <aside className="w-64 bg-white h-screen p-6 border-r">
      <div className="text-xl font-bold">Dashboard</div>
      <nav className="mt-6 flex flex-col gap-3 text-sm">
        <button onClick={() => setActiveTab("overview")}>Dashboard</button>
        <button onClick={() => setActiveTab("properties")}>Properties</button>
        <button onClick={() => setActiveTab("tasks")}>Tasks</button>
        <button onClick={() => setActiveTab("tenantQueries")}>Tenant Queries</button>
        <button onClick={() => setActiveTab("rentCollection")}>Rent Collection</button>
        <button onClick={() => setActiveTab("employees")}>Employees</button>
        <button onClick={() => setActiveTab("settings")}>Settings</button>
        <button
          onClick={() => setView("landing")}
          className="mt-4 text-sm text-blue-600"
        >
          Sign out
        </button>
      </nav>
    </aside>
  );
}
