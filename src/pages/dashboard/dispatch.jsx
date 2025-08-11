import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const DashboardDispatch = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    recipient_id: "",
    content: "",
    weight: 0,
    note: "",
    delievery_date: "",
    new_recipient: {
      full_name: "",
      address: "",
      phone_number_1: "",
      phone_number_2: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("new_recipient.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        new_recipient: {
          ...prev.new_recipient,
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.recipient_id || !formData.content) {
      setError("Please fill in recipient ID and content fields");
      setLoading(false);
      return;
    }

    // Prepare data in the format expected by the API
    const dispatchData = {
      recipient_id: formData.recipient_id,
      content: formData.content,
      weight: parseFloat(formData.weight) || 0,
      note: formData.note || "",
      delievery_date: formData.delievery_date || null,
      new_recipient: {
        full_name: formData.new_recipient.full_name || "",
        address: formData.new_recipient.address || "",
        phone_number_1: formData.new_recipient.phone_number_1 || "",
        phone_number_2: formData.new_recipient.phone_number_2 || "",
      },
    };

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "https://electronic-gertrudis-chanel-debb-bad97784.koyeb.app/dispatches/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        let errorMessage = "Failed to dispatch shipment. Please try again.";
        try {
          const errorData = await response.json();
          if (errorData.message) {
            errorMessage = errorData.message;
          } else if (errorData.error) {
            errorMessage = errorData.error;
          } else if (errorData.details) {
            errorMessage = errorData.details;
          }
        } catch (parseError) {
          if (response.status === 404) {
            errorMessage = "Dispatch endpoint not found. Please contact support.";
          } else if (response.status === 422) {
            errorMessage = "Invalid shipment data. Please check all fields.";
          } else {
            errorMessage = `HTTP ${response.status}: ${response.statusText}`;
          }
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log("Shipment dispatched successfully:", data);
      
      setFormData({
        recipient_id: "",
        content: "",
        weight: 0,
        note: "",
        delievery_date: "",
        new_recipient: {
          full_name: "",
          address: "",
          phone_number_1: "",
          phone_number_2: "",
        },
      });
      
      alert(`Shipment dispatched successfully! Tracking ID: ${data.tracking_id || data.id || 'Generated'}`);
    } catch (error) {
      console.error("Error dispatching shipment:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <header className="py-8 border-b border-gray-800 mb-10">
        <h1 className="text-4xl font-extrabold mb-2">
          {t("dispatch.title")}
        </h1>
        <p className="text-lg text-gray-300">
          {t("dispatch.description")}
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
        <div className="bg-[#1F2937] rounded-xl shadow-lg p-6 md:p-8 mb-8">
          {error && (
            <div className="mb-4 p-4 bg-red-600/20 border border-red-600 rounded-lg text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 font-medium text-sm text-gray-300">
                {t("dispatch.recipientId")}
              </label>
              <input
                type="text"
                name="recipient_id"
                value={formData.recipient_id}
                onChange={handleChange}
                className="w-full border border-gray-600 bg-gray-800 text-white rounded-lg px-3 py-2 placeholder:text-gray-400 text-sm focus:border-blue-500 focus:outline-none"
                placeholder={t("dispatch.recipientIdPlaceholder")}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-medium text-sm text-gray-300">
                  {t("dispatch.content")}
                </label>
                <input
                  type="text"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  className="w-full border border-gray-600 bg-gray-800 text-white rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-sm text-gray-300">
                  {t("dispatch.weight")}
                </label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full border border-gray-600 bg-gray-800 text-white rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium text-sm text-gray-300">
                {t("dispatch.note")}
              </label>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                className="w-full border border-gray-600 bg-gray-800 text-white rounded-lg px-3 py-2 text-sm h-24 focus:border-blue-500 focus:outline-none"
              ></textarea>
            </div>

            <div>
              <label className="block mb-2 font-medium text-sm text-gray-300">
                {t("dispatch.deliveryDate")}
              </label>
              <input
                type="date"
                name="delievery_date"
                value={formData.delievery_date}
                onChange={handleChange}
                className="w-full border border-gray-600 bg-gray-800 text-white rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="mt-6 border-t border-gray-600 pt-6">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">
                {t("dispatch.newRecipientInfo")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="new_recipient.full_name"
                  value={formData.new_recipient.full_name}
                  onChange={handleChange}
                  placeholder={t("dispatch.fullName")}
                  className="w-full border border-gray-600 bg-gray-800 text-white rounded-lg px-3 py-2 placeholder:text-gray-400 text-sm focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  name="new_recipient.address"
                  value={formData.new_recipient.address}
                  onChange={handleChange}
                  placeholder={t("dispatch.address")}
                  className="w-full border border-gray-600 bg-gray-800 text-white rounded-lg px-3 py-2 placeholder:text-gray-400 text-sm focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  name="new_recipient.phone_number_1"
                  value={formData.new_recipient.phone_number_1}
                  onChange={handleChange}
                  placeholder={t("dispatch.phoneNumber1")}
                  className="w-full border border-gray-600 bg-gray-800 text-white rounded-lg px-3 py-2 placeholder:text-gray-400 text-sm focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  name="new_recipient.phone_number_2"
                  value={formData.new_recipient.phone_number_2}
                  onChange={handleChange}
                  placeholder={t("dispatch.phoneNumber2")}
                  className="w-full border border-gray-600 bg-gray-800 text-white rounded-lg px-3 py-2 placeholder:text-gray-400 text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end pt-6">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white rounded-lg font-semibold transition duration-300 flex items-center gap-2"
              >
                {loading && <FaSpinner className="animate-spin" />}
                {loading ? t("dispatch.dispatching") : t("dispatch.dispatchButton")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardDispatch;