import Navbar from "../components/navbar";
// import image from "../images/unsplash.jpg";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../components/footer.jsx";

const Track = () => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleTrack = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Navbar />

      <div className="relative h-[calc(100vh-80px)]">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Tracking"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
          <Link to="/" className="absolute top-4 right-4 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition z-10">
            {t("navbar.backToHome")}
          </Link>
        <div className="text-center max-w-xl w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-800 mb-4">
            {t("track.title")}
          </h1>
          <p className="text-gray-200 mb-6 text-sm md:text-base">
            {t("track.description")}
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder={t("track.placeholder")}
              className="w-full md:flex-1 px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button
              onClick={handleTrack}
              disabled={loading}
              className={`w-full md:w-auto px-6 py-2 text-white font-semibold rounded-lg transition duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  {t("track.tracking")}
                </>
              ) : (
                t("track.button")
              )}
            </button>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Track;
