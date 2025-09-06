import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Overview from "../dashboardTabs/Overview";
import Properties from "../dashboardTabs/Properties";
import Tasks from "../dashboardTabs/Tasks";
import TenantQueries from "../dashboardTabs/TenantQueries";
import RentCollection from "../dashboardTabs/RentCollection";
import Employees from "../dashboardTabs/Employees";
import Settings from "../dashboardTabs/Settings";

export default function Dashboard({ setView }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} setView={setView} />

      <main className="flex-1 p-8 space-y-6">
        {activeTab === "overview" && <Overview />}
        {activeTab === "properties" && <Properties />}
        {activeTab === "tasks" && <Tasks />}
        {activeTab === "tenantQueries" && <TenantQueries />}
        {activeTab === "rentCollection" && <RentCollection />}
        {activeTab === "employees" && <Employees />}
        {activeTab === "settings" && <Settings />}
      </main>
    </div>
  );
}
