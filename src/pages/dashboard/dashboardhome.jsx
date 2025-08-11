import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DashboardHome = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <header className="py-8 border-b border-gray-800 mb-10">
        <h1 className="text-4xl font-extrabold mb-2">
          {t("dashboard.welcome")}
        </h1>
        <p className="text-lg text-gray-300">
          {t("dashboard.description")}
        </p>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <section className="bg-[#1F2937] rounded-xl shadow-lg p-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4">{t("dashboard.trackShipments")}</h2>
          <p className="text-gray-400 mb-6 text-center">
            {t("dashboard.trackDescription")}
          </p>
          <Link to="/track" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300 inline-block text-center">
            {t("dashboard.goToTracking")}
          </Link>
        </section>
        <section className="bg-[#1F2937] rounded-xl shadow-lg p-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4">{t("dashboard.userProfile")}</h2>
          <p className="text-gray-400 mb-6 text-center">
            {t("dashboard.profileDescription")}
          </p>
          <Link to="/dashboard/users" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition duration-300 inline-block text-center">
            {t("dashboard.viewProfile")}
          </Link>
        </section>
        <section className="bg-[#1F2937] rounded-xl shadow-lg p-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4">{t("dashboard.clientSupport")}</h2>
          <p className="text-gray-400 mb-6 text-center">
            {t("dashboard.supportDescription")}
          </p>
          <Link to="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300 inline-block text-center">
            {t("dashboard.contactSupport")}
          </Link>
        </section>
      </main>
    </div>
  );
};

export default DashboardHome;
