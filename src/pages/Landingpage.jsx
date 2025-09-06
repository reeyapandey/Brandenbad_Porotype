import React from "react";

export default function LandingPage() {
  const stats = {
    properties: 524,
    clients: 1287,
    years: 18,
    districts: 8,
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-extrabold">
            Find your next home in Berlin
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Reliable property management and fast discovery — Brandenbed
            connects tenants and owners across 8 districts.
          </p>
          <div className="mt-6 flex gap-3">
            <button className="bg-blue-600 text-white px-5 py-2 rounded">
              Explore Properties
            </button>
            <button className="border px-5 py-2 rounded">Contact Sales</button>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="bg-white p-4 rounded shadow text-center">
              <div className="text-2xl font-bold">{stats.properties}+</div>
              <div className="text-sm text-gray-500">Properties Sold</div>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <div className="text-2xl font-bold">{stats.clients}+</div>
              <div className="text-sm text-gray-500">Happy Clients</div>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <div className="text-2xl font-bold">{stats.years}+</div>
              <div className="text-sm text-gray-500">Years Experience</div>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <div className="text-2xl font-bold">{stats.districts}+</div>
              <div className="text-sm text-gray-500">Districts in Berlin</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white rounded p-6 shadow">
          <div className="h-64 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            Hero / image mockup
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Core values: Transparency • Reliability • Community
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold">Services</h2>
        <div className="mt-4 grid sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Property Listing</h3>
            <p className="text-sm text-gray-500 mt-2">
              List and browse available properties with rich media.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Tenant Support</h3>
            <p className="text-sm text-gray-500 mt-2">
              Streamlined queries and maintenance tracking.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Rent Collection</h3>
            <p className="text-sm text-gray-500 mt-2">
              Payment submission and historical records for owners.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white mt-8 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between">
          <div>
            <div className="font-bold">Brandenbed Living Spaces</div>
            <div className="text-sm text-gray-500">
              Berlin • contact@brandenbed.example
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="text-sm">Follow us</div>
            <div className="flex gap-3 mt-2 text-gray-600">
              <span>Twitter</span>
              <span>LinkedIn</span>
              <span>Instagram</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
