import React, { useState } from "react";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [view, setView] = useState("landing"); // landing | dashboard
  const [lang, setLang] = useState("EN");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header view={view} setView={setView} lang={lang} setLang={setLang} />

      {view === "landing" ? (
        <LandingPage />
      ) : (
        <Dashboard setView={setView} />
      )}
    </div>
  );
}
