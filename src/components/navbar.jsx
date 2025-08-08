import Bodelogo from "../images/Bodelogo.jpg";
import { CgProfile } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import SignInDropdown from "./SignInDropdown";
import CreateAccountDropdown from "./CreateAccountDropdown";
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
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              className="h-10 w-auto rounded-full object-contain"
              src={Bodelogo}
              alt="Bode Logistics Logo"
              loading="lazy"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/contact" className="text-sm font-medium hover:text-blue-400 transition">
              {t("navbar.contact")}
            </Link>
            <Link to="/login" className="flex items-center space-x-1 hover:text-blue-400 transition">
              <CgProfile className="text-lg" />
              <span className="text-sm font-medium">{t("navbar.bodeHub")}</span>
            </Link>
            <Link to="/track" className="flex items-center space-x-1 hover:text-blue-400 transition">
              <IoLocationOutline className="text-lg" />
              <span className="text-sm font-medium">{t("navbar.trackShipment")}</span>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <button 
                  onClick={() => {setShowSignIn(!showSignIn); setShowCreateAccount(false);}} 
                  className="bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-lg text-xs font-medium transition"
                >
                  {t("navbar.signIn")}
                </button>
                <SignInDropdown 
                  isOpen={showSignIn} 
                  onClose={() => setShowSignIn(false)} 
                />
              </div>
              <div className="relative">
                <button 
                  onClick={() => {setShowCreateAccount(!showCreateAccount); setShowSignIn(false);}} 
                  className="bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded-lg text-xs font-medium transition"
                >
                  {t("navbar.createAccount")}
                </button>
                <CreateAccountDropdown 
                  isOpen={showCreateAccount} 
                  onClose={() => setShowCreateAccount(false)} 
                />
              </div>
            </div>

            {/* Language Selector */}
            <select
              className="bg-gray-800 text-white px-2 py-1.5 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedLang}
              onChange={handleLanguageChange}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white text-xl focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-3 space-y-3">
              <Link to="/contact" className="block text-sm font-medium hover:text-blue-400 transition py-2">
                {t("navbar.contact")}
              </Link>
              <Link to="/login" className="flex items-center space-x-2 hover:text-blue-400 transition py-2">
                <CgProfile className="text-lg" />
                <span className="text-sm font-medium">{t("navbar.bodeHub")}</span>
              </Link>
              <Link to="/track" className="flex items-center space-x-2 hover:text-blue-400 transition py-2">
                <IoLocationOutline className="text-lg" />
                <span className="text-sm font-medium">{t("navbar.trackShipment")}</span>
              </Link>
              
              {/* Mobile Auth Buttons */}
              <div className="pt-3 border-t border-gray-700 space-y-2">
                <button 
                  onClick={() => {setShowSignIn(!showSignIn); setShowCreateAccount(false);}} 
                  className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  {t("navbar.signIn")}
                </button>
                <button 
                  onClick={() => {setShowCreateAccount(!showCreateAccount); setShowSignIn(false);}} 
                  className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  {t("navbar.createAccount")}
                </button>
              </div>

              {/* Mobile Forms */}
              {showSignIn && (
                <div className="bg-white rounded-lg p-4 mt-3">
                  <SignInDropdown 
                    isOpen={true} 
                    onClose={() => setShowSignIn(false)} 
                  />
                </div>
              )}
              {showCreateAccount && (
                <div className="bg-white rounded-lg p-4 mt-3">
                  <CreateAccountDropdown 
                    isOpen={true} 
                    onClose={() => setShowCreateAccount(false)} 
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
