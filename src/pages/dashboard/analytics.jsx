import React from "react";
import { FaBox, FaTruck, FaChartLine, FaClock } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const DashboardAnalytics = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <header className="py-8 border-b border-gray-800 mb-10">
        <h1 className="text-4xl font-extrabold mb-2">{t("analytics.title")}</h1>
        <p className="text-lg text-gray-300">
          {t("analytics.description")}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-[#1F2937] rounded-xl p-6 text-center">
          <FaBox className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">1,247</h3>
          <p className="text-gray-400">{t("analytics.totalShipments")}</p>
        </div>
        <div className="bg-[#1F2937] rounded-xl p-6 text-center">
          <FaTruck className="text-4xl text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">892</h3>
          <p className="text-gray-400">{t("analytics.delivered")}</p>
        </div>
        <div className="bg-[#1F2937] rounded-xl p-6 text-center">
          <FaClock className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">234</h3>
          <p className="text-gray-400">{t("analytics.inTransit")}</p>
        </div>
        <div className="bg-[#1F2937] rounded-xl p-6 text-center">
          <FaChartLine className="text-4xl text-purple-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">98.5%</h3>
          <p className="text-gray-400">{t("analytics.successRate")}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#1F2937] rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">{t("analytics.recentShipments")}</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
              <div>
                <p className="font-medium">#BL001234</p>
                <p className="text-sm text-gray-400">{t("analytics.electronics")}</p>
              </div>
              <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">{t("analytics.delivered")}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
              <div>
                <p className="font-medium">#BL001235</p>
                <p className="text-sm text-gray-400">{t("analytics.documents")}</p>
              </div>
              <span className="px-3 py-1 bg-yellow-600 text-white text-sm rounded-full">{t("analytics.inTransit")}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
              <div>
                <p className="font-medium">#BL001236</p>
                <p className="text-sm text-gray-400">{t("analytics.clothing")}</p>
              </div>
              <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">{t("analytics.processing")}</span>
            </div>
          </div>
        </div>

        <div className="bg-[#1F2937] rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">{t("analytics.monthlyPerformance")}</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>{t("analytics.january")}</span>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
              <span className="text-sm">85%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>{t("analytics.february")}</span>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '92%'}}></div>
              </div>
              <span className="text-sm">92%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>{t("analytics.march")}</span>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '98%'}}></div>
              </div>
              <span className="text-sm">98%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAnalytics;