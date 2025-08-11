import Bodelogo from "../images/Bodelogo.jpg";
import { CgProfile } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
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
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // Handle sign out
  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    setShowProfileDropdown(false);
    navigate("/");
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
            <Link to={isLoggedIn ? "/dashboard" : "/login"} className="flex items-center space-x-1 hover:text-blue-400 transition">
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
            {/* Desktop Auth Buttons / Profile */}
            <div className="hidden md:flex items-center space-x-2">
              {isLoggedIn ? (
                <div className="relative">
                  <button 
                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                    className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-full text-sm font-medium transition"
                  >
                    <FaUser className="text-blue-400" />
                    <span>Profile</span>
                  </button>
                  {showProfileDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                      <div className="py-2">
                        <button
                          onClick={handleSignOut}
                          className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                        >
                          <FaSignOutAlt className="text-red-500" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
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
                </>
              )}
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
              <Link to={isLoggedIn ? "/dashboard" : "/login"} className="flex items-center space-x-2 hover:text-blue-400 transition py-2">
                <CgProfile className="text-lg" />
                <span className="text-sm font-medium">{t("navbar.bodeHub")}</span>
              </Link>
              <Link to="/track" className="flex items-center space-x-2 hover:text-blue-400 transition py-2">
                <IoLocationOutline className="text-lg" />
                <span className="text-sm font-medium">{t("navbar.trackShipment")}</span>
              </Link>
              
              {/* Mobile Auth Buttons / Profile */}
              <div className="pt-3 border-t border-gray-700 space-y-2">
                {isLoggedIn ? (
                  <button
                    onClick={handleSignOut}
                    className="flex items-center justify-center space-x-2 w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    <FaSignOutAlt />
                    <span>Sign Out</span>
                  </button>
                ) : (
                  <>
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
                  </>
                )}
              </div>

              {/* Mobile Forms */}
              {!isLoggedIn && (
                <>
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
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
