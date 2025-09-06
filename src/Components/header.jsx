import React from "react";

export default function Header({ view, setView, lang, setLang }) {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold">Brandenbed</div>
          {view === "landing" && (
            <nav className="hidden md:flex gap-6 text-sm">
              <button className="hover:underline">Properties</button>
              <button className="hover:underline">About Us</button>
              <button className="hover:underline">Services</button>
              <button className="hover:underline">Contact</button>
            </nav>
          )}
        </div>

        <div className="flex items-center gap-4">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value="EN">EN</option>
            <option value="DE">DE</option>
          </select>
          {view === "landing" ? (
            <button
              onClick={() => setView("dashboard")}
              className="bg-blue-600 text-white px-4 py-1 rounded"
            >
              Sign In
            </button>
          ) : (
            <button
              onClick={() => setView("landing")}
              className="text-blue-600 px-4 py-1"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
