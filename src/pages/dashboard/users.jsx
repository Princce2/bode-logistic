import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Users = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    setLoading(true);
    setError(null);

    const token = localStorage.getItem("token");
    if (!token) {
      setError("User not authenticated.");
      setLoading(false);
      return;
    }

    console.log("🔍 Fetching user data...");

    try {
      const response = await fetch(
        "https://electronic-gertrudis-chanel-debb-bad97784.koyeb.app/auth/user",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      );

      const responseText = await response.text();
      console.log("📥 Raw user response:", responseText);
      console.log("📊 User response status:", response.status);

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("accessToken");
          navigate("/login");
          return;
        }
        let errorMessage = "Failed to fetch user data.";
        try {
          const errorData = JSON.parse(responseText);
          console.error("❌ User fetch errors:", errorData);
          errorMessage = errorData.detail || errorData.message || errorMessage;
        } catch {
          errorMessage = responseText || errorMessage;
        }
        throw new Error(errorMessage);
      }

      const result = responseText; // API returns string according to docs
      console.log("✅ User data fetched:", result);
      setUserData(result);

    } catch (err) {
      console.error("❌ Error fetching user:", err);
      setError(err.message || "Failed to fetch user data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            User Profile
          </h2>
          <Link to="/dashboard" className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition text-sm">
            Back to Dashboard
          </Link>
        </div>
        <div className="bg-gray-800 rounded-xl p-6">
          {loading && (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <span className="ml-2 text-gray-300">Loading user data...</span>
            </div>
          )}

          {error && (
            <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 mb-4">
              <p className="text-red-400 text-sm">{error}</p>
              <button
                onClick={fetchUser}
                className="mt-2 bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition"
              >
                Retry
              </button>
            </div>
          )}

          {userData && !loading && (
            <div className="bg-green-900/20 border border-green-500 rounded-lg p-4">
              <h3 className="text-green-400 font-semibold mb-2">User Data:</h3>
              <div className="bg-gray-700 rounded p-3 border border-gray-600 max-h-96 overflow-auto">
                <pre className="text-sm text-gray-200 whitespace-pre-wrap break-words overflow-wrap-anywhere">{userData}</pre>
              </div>
            </div>
          )}

          {!userData && !loading && !error && (
            <div className="text-center py-8">
              <p className="text-gray-400">No user data available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;