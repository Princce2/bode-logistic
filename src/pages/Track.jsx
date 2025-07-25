import Navbar from "../components/navbar";
import image from "../images/unsplash.jpg";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";

const Track = () => {
  const [loading, setLoading] = useState(false);

  const handleTrack = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Navbar />

      <img
        src={image}
        alt="Tracking"
        className="w-full h-[88vh] object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-[87vh] bg-black/50 flex items-center justify-center px-4 mt-15">
        <div className="text-center max-w-xl w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-800 mb-4">
            Track Your Shipment
          </h1>
          <p className="text-gray-200 mb-6 text-sm md:text-base">
            Enter your tracking number below to find your shipment status.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Tracking Number"
              className="w-full md:flex-1 px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
             <button
              onClick={handleTrack}
              disabled={loading}
              className={`w-full md:w-auto px-6 py-2 text-white font-semibold rounded-lg transition duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                loading
                  ? "bg-blue-400"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Tracking...
                </>
              ) : (
                "Track"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
