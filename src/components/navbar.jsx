import Bodelogo from "../images/Bodelogo.jpg";
import { CgProfile } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import "../i18n";

const Navbar = () => {
  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
    { code: "de", name: "German" },
    { code: "zh", name: "Chinese" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLang, setSelectedLang] = useState("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Search handler
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      alert(`Searching for: ${searchTerm}`);
    }
  };

  // Language change handler
  const handleLanguageChange = (e) => {
    setSelectedLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and Hamburger */}
          <div className="flex items-center space-x-4">
            <img
              className="max-h-10 sm:max-h-12 rounded-full object-contain"
              src={Bodelogo}
              alt="Bode Logistics Logo"
              loading="lazy"
            />
            <button
              className="sm:hidden text-white text-2xl focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Navigation and Right Section */}
          <div className="hidden sm:flex items-center justify-between flex-1">
            <div className="flex items-center space-x-4 sm:space-x-6">
              <p className="text-sm sm:text-base md:text-lg font-medium hover:text-blue-400 transition">
                {t("services")}
              </p>
              <p className="text-sm sm:text-base md:text-lg font-medium hover:text-blue-400 transition">
                {t("careers")}
              </p>
              <p className="text-sm sm:text-base md:text-lg font-medium hover:text-blue-400 transition">
                {t("contact")}
              </p>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <CgProfile className="text-xl sm:text-2xl" />
                <p className="text-sm sm:text-base md:text-lg font-medium hover:text-blue-400 transition">
                  {t("bodeHub")}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <IoLocationOutline className="text-xl sm:text-2xl" />
                <p className="text-sm sm:text-base md:text-lg font-medium hover:text-blue-400 transition">
                  {t("trackShipment")}
                </p>
              </div>
              <div className="flex items-center">
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    placeholder={t("searchPlaceholder")}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800 text-white rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 w-32 sm:w-40 md:w-48"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </form>
              </div>
              <div>
                <select
                  className="bg-gray-800 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedLang}
                  onChange={handleLanguageChange}
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden bg-gray-900 border-t border-gray-700">
            <div className="flex flex-col items-center space-y-4 py-4">
              <p className="text-sm font-medium hover:text-blue-400 transition">
                {t("services")}
              </p>
              <p className="text-sm font-medium hover:text-blue-400 transition">
                {t("careers")}
              </p>
              <p className="text-sm font-medium hover:text-blue-400 transition">
                {t("contact")}
              </p>
              <div className="flex items-center space-x-2">
                <CgProfile className="text-xl" />
                <p className="text-sm font-medium hover:text-blue-400 transition">
                  {t("bodeHub")}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <IoLocationOutline className="text-xl" />
                <p className="text-sm font-medium hover:text-blue-400 transition">
                  {t("trackShipment")}
                </p>
              </div>
              <div className="flex items-center w-full justify-center">
                <form onSubmit={handleSearch} className="w-full max-w-xs">
                  <input
                    type="text"
                    placeholder={t("searchPlaceholder")}
                    className="px-3 py-1.5 bg-gray-800 text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </form>
              </div>
              <div>
                <select
                  className="bg-gray-800 text-white px-3 py-1.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedLang}
                  onChange={handleLanguageChange}
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
