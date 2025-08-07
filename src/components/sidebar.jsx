import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiSend, FiBarChart, FiArrowLeft } from "react-icons/fi";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white px-6 py-8 shadow-2xl border-r border-blue-300/20">
      {/* Sidebar Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
          Bode Admin
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-6">
        <Link
          to="/"
          className="flex items-center gap-3 text-lg font-medium transition px-4 py-3 rounded-lg hover:bg-blue-500/10 hover:text-blue-300"
        >
          <FiArrowLeft className="text-xl" />
          Back to Home
        </Link>
        <Link
          to="/dashboard"
          className={`flex items-center gap-3 text-lg font-medium transition px-4 py-3 rounded-lg
            ${
              location.pathname === "/dashboard"
                ? "bg-blue-600/70 text-white shadow-md"
                : "hover:bg-blue-500/10 hover:text-blue-300"
            }`}
        >
          <FiHome className="text-xl" />
          Dashboard
        </Link>
        
        <Link
          to="/dashboard/dispatch"
          className={`flex items-center gap-3 text-lg font-medium transition px-4 py-3 rounded-lg
            ${
              location.pathname === "/dashboard/dispatch"
                ? "bg-blue-600/70 text-white shadow-md"
                : "hover:bg-blue-500/10 hover:text-blue-300"
            }`}
        >
          <FiSend className="text-xl" />
          Dispatch
        </Link>
        
        <Link
          to="/dashboard/analytics"
          className={`flex items-center gap-3 text-lg font-medium transition px-4 py-3 rounded-lg
            ${
              location.pathname === "/dashboard/analytics"
                ? "bg-blue-600/70 text-white shadow-md"
                : "hover:bg-blue-500/10 hover:text-blue-300"
            }`}
        >
          <FiBarChart className="text-xl" />
          Analytics
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
