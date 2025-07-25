import React, { useState } from "react";

const TrackCatch = () => {
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleTrack = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    console.log("Tracking ID:", id);
    try {
      const response = await fetch(
        `https://electronic-gertrudis-chanel-debb-bad97784.koyeb.app/dispatches/${id}`
      );
      if (!response.ok) {
        throw new Error("Tracking failed. Please check your ID.");
      }
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
      // toast.error(`Error: ${error.message}`); // Uncomment if using toast
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleTrack} className="space-y-6">
      <div className="flex gap-4 items-center">
        <input
          type="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter Tracking ID"
          className="flex-1 px-4 py-3 rounded-xl border border-gray-700 bg-[#111827] text-white placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300"
          disabled={loading}
        >
          {loading ? "Tracking..." : "Track"}
        </button>
      </div>
      {error && (
        <div className="text-center pt-2">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}
      {result && (
        <div className="mt-8 bg-[#1F2937] border border-blue-800/20 p-6 rounded-2xl max-w-xl mx-auto text-left shadow-md">
          <h4 className="text-lg font-semibold mb-2 text-white">
            Tracking Details
          </h4>
          <pre className="text-gray-300 text-sm whitespace-pre-wrap">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </form>
  );
};

export default TrackCatch;
