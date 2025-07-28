import Bodelogo from "../images/Bodelogo.jpg";
import { CgProfile } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../i18n";

const Navbar = () => {
  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
    { code: "de", name: "German" },
    { code: "zh", name: "Chinese" },
  ];

  const [selectedLang, setSelectedLang] = useState("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const { t, i18n } = useTranslation();

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
              <p className="text-sm sm:text-base md:text-lg font-medium hover:text-blue-400 transition cursor-pointer">
                {t("navbar.contact")}
              </p>
              <Link to="/dispatch" className="text-sm sm:text-base md:text-lg font-medium hover:text-blue-400 transition">
                {t("navbar.dispatch")}
              </Link>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <CgProfile className="text-xl sm:text-2xl" />
                <p className="text-sm sm:text-base md:text-lg font-medium hover:text-blue-400 transition cursor-pointer">
                  {t("navbar.bodeHub")}
                </p>
              </div>
              <Link to="/track" className="flex items-center space-x-2 hover:text-blue-400 transition">
                <IoLocationOutline className="text-xl sm:text-2xl" />
                <p className="text-sm sm:text-base md:text-lg font-medium">
                  {t("navbar.trackShipment")}
                </p>
              </Link>
              <div className="relative">
                <button 
                  onClick={() => {setShowSignIn(!showSignIn); setShowCreateAccount(false);}} 
                  className="bg-blue-600 hover:bg-blue-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base font-medium transition"
                >
                  {t("navbar.signIn")}
                </button>
                {showSignIn && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg p-6 z-50">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">{t("navbar.signIn")}</h3>
                    <form className="space-y-4">
                      <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition">{t("navbar.signIn")}</button>
                    </form>
                  </div>
                )}
              </div>
              <div className="relative">
                <button 
                  onClick={() => {setShowCreateAccount(!showCreateAccount); setShowSignIn(false);}} 
                  className="bg-green-600 hover:bg-green-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base font-medium transition"
                >
                  {t("navbar.createAccount")}
                </button>
                {showCreateAccount && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg p-6 z-50">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">{t("navbar.createAccount")}</h3>
                    <form className="space-y-4">
                      <input type="text" placeholder="Full Name" className="w-full px-3 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500" />
                      <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500" />
                      <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500" />
                      <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition">{t("navbar.createAccount")}</button>
                    </form>
                  </div>
                )}
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
              <p className="text-sm font-medium hover:text-blue-400 transition cursor-pointer">
                {t("navbar.contact")}
              </p>
              <Link to="/dispatch" className="text-sm font-medium hover:text-blue-400 transition">
                {t("navbar.dispatch")}
              </Link>
              <div className="flex items-center space-x-2">
                <CgProfile className="text-xl" />
                <p className="text-sm font-medium hover:text-blue-400 transition cursor-pointer">
                  {t("navbar.bodeHub")}
                </p>
              </div>
              <Link to="/track" className="flex items-center space-x-2 hover:text-blue-400 transition">
                <IoLocationOutline className="text-xl" />
                <p className="text-sm font-medium">
                  {t("navbar.trackShipment")}
                </p>
              </Link>
              <div className="flex flex-col space-y-2 w-full max-w-xs">
                <button 
                  onClick={() => {setShowSignIn(!showSignIn); setShowCreateAccount(false);}} 
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition w-full"
                >
                  {t("navbar.signIn")}
                </button>
                <button 
                  onClick={() => {setShowCreateAccount(!showCreateAccount); setShowSignIn(false);}} 
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition w-full"
                >
                  {t("navbar.createAccount")}
                </button>
              </div>
              {showSignIn && (
                <div className="w-full max-w-xs bg-white rounded-lg shadow-lg p-4 mt-2">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t("navbar.signIn")}</h3>
                  <form className="space-y-3">
                    <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition">{t("navbar.signIn")}</button>
                  </form>
                </div>
              )}
              {showCreateAccount && (
                <div className="w-full max-w-xs bg-white rounded-lg shadow-lg p-4 mt-2">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t("navbar.createAccount")}</h3>
                  <form className="space-y-3">
                    <input type="text" placeholder="Full Name" className="w-full px-3 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500" />
                    <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500" />
                    <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500" />
                    <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition">{t("navbar.createAccount")}</button>
                  </form>
                </div>
              )}
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
