import React from "react";

const DashboardHome = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <header className="py-8 border-b border-gray-800 mb-10">
        <h1 className="text-4xl font-extrabold mb-2">
          Welcome to Bode Logistics Dashboard
        </h1>
        <p className="text-lg text-gray-300">
          Manage your shipments, view analytics, and access exclusive client
          features all in one place.
        </p>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <section className="bg-[#1F2937] rounded-xl shadow-lg p-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4">Track Shipments</h2>
          <p className="text-gray-400 mb-6 text-center">
            Monitor the status and location of your shipments in real time.
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300">
            Go to Tracking
          </button>
        </section>
        <section className="bg-[#1F2937] rounded-xl shadow-lg p-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4">Analytics & Reports</h2>
          <p className="text-gray-400 mb-6 text-center">
            View performance metrics, shipment history, and download detailed
            reports.
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300">
            View Analytics
          </button>
        </section>
        <section className="bg-[#1F2937] rounded-xl shadow-lg p-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4">Client Support</h2>
          <p className="text-gray-400 mb-6 text-center">
            Access 24/7 support and connect with our logistics experts for
            assistance.
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300">
            Contact Support
          </button>
        </section>
      </main>
    </div>
  );
};

export default DashboardHome;
