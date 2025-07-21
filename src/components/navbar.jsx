import Bodelogo from "../images/Bodelogo.jpg";
import { CgProfile } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

const Navbar = () => {
  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
    { code: "de", name: "German" },
    { code: "zh", name: "Chinese" },
    { code: "ar", name: "Arabic" },
    { code: "hi", name: "Hindi" },
    { code: "ja", name: "Japanese" },
    { code: "ko", name: "Korean" },
    { code: "pt", name: "Portuguese" },
    { code: "ru", name: "Russian" },
    { code: "it", name: "Italian" },
    { code: "tr", name: "Turkish" },
    { code: "nl", name: "Dutch" },
    { code: "sv", name: "Swedish" },
    { code: "pl", name: "Polish" },
    { code: "fa", name: "Persian" },
    { code: "sw", name: "Swahili" },
    { code: "vi", name: "Vietnamese" },
    { code: "id", name: "Indonesian" },
    { code: "th", name: "Thai" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLang, setSelectedLang] = useState("en");
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

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <img
              className="h-10 w-10 rounded-full"
              src={Bodelogo}
              alt="Bode Logistics Logo"
            />
            <p>{t("services")}</p>
            <p>{t("careers")}</p>
            <p>{t("contact")}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="items-center flex flex-col space-x-2">
              <CgProfile />
              <p>{t("bodeHub")}</p>
            </div>
            <div className="items-center flex flex-col space-x-2">
              <IoLocationOutline />
              <p>{t("trackShipment")}</p>
            </div>
            <div className="items-center flex flex-col">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder={t("searchPlaceholder")}
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </form>
            </div>
            {/* Language Selector (name only) */}
            <div>
              <select
                className="bg-gray-800 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
    </nav>
  );
};

export default Navbar;
