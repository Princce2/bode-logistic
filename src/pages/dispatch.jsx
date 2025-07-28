import React, { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
// import picture from "../images/lance.jpg";
// import picture2 from "../images/julia.jpg";
// import picture3 from "../images/frank.jpg";
// import picture4 from "../images/bar.jpg";

const DispatchShipment = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log("Shipment Data:", JSON.stringify(formData, null, 2));
      setLoading(false);
    }, 1500);
  };

  const fetchdata = async () => {
    try {
      const response = await fetch(
        "https://electronic-gertrudis-chanel-debb-bad97784.koyeb.app/docs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error dispatching shipment:", error);
      setError(error || message);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen bg-slate-900">
        <img 
          src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Dispatch" 
          className="w-full h-full object-cover absolute inset-0" 
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-4">
          <Link to="/" className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-gray-600 hover:bg-gray-700 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg transition z-10 text-sm">
            {t("navbar.backToHome")}
          </Link>
          <div className="max-w-4xl w-full bg-white/90 backdrop-blur-sm shadow-lg rounded-xl p-4 sm:p-6 md:p-8 max-h-[90vh] overflow-y-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-blue-600 text-shadow-lg">
            {t("dispatch.title")}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div>
              <label className="block mb-1 font-medium text-xs sm:text-sm text-teal-700">
                {t("dispatch.recipientId")}
              </label>
              <input
                type="text"
                name="recipient_id"
                value={formData.recipient_id}
                onChange={handleChange}
                className="w-full border rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 placeholder:text-gray-400 text-sm"
                placeholder={t("dispatch.recipientIdPlaceholder")}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block mb-1 font-medium text-xs sm:text-sm text-teal-700">
                  {t("dispatch.content")}
                </label>
                <input
                  type="text"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 text-sm"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-xs sm:text-sm text-teal-700">
                  {t("dispatch.weight")}
                </label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium text-xs sm:text-sm text-teal-700">
                {t("dispatch.note")}
              </label>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                className="w-full border rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 text-sm h-20 sm:h-24"
              ></textarea>
            </div>

            <div>
              <label className="block mb-1 font-medium text-xs sm:text-sm text-teal-700">
                {t("dispatch.deliveryDate")}
              </label>
              <input
                type="date"
                name="delivery_date"
                value={formData.delievery_date}
                onChange={handleChange}
                className="w-full border rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 text-sm"
              />
            </div>

            <div className="mt-4 sm:mt-6 border-t pt-4 sm:pt-6">
              <h3 className="text-base sm:text-lg font-semibold text-teal-700 mb-3 sm:mb-4">
                {t("dispatch.newRecipientInfo")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="text"
                  name="new_recipient.full_name"
                  value={formData.new_recipient.full_name}
                  onChange={handleChange}
                  placeholder={t("dispatch.fullName")}
                  className="w-full border rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 placeholder:text-gray-400 text-sm"
                />
                <input
                  type="text"
                  name="new_recipient.address"
                  value={formData.new_recipient.address}
                  onChange={handleChange}
                  placeholder={t("dispatch.address")}
                  className="w-full border rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 placeholder:text-gray-400 text-sm"
                />
                <input
                  type="text"
                  name="new_recipient.phone_number_1"
                  value={formData.new_recipient.phone_number_1}
                  onChange={handleChange}
                  placeholder={t("dispatch.phoneNumber1")}
                  className="w-full border rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 placeholder:text-gray-400 text-sm"
                />
                <input
                  type="text"
                  name="new_recipient.phone_number_2"
                  value={formData.new_recipient.phone_number_2}
                  onChange={handleChange}
                  placeholder={t("dispatch.phoneNumber2")}
                  className="w-full border rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 placeholder:text-gray-400 text-sm"
                />
              </div>
            </div>

            <div className="text-center sm:text-right pt-2">
              <button
                type="submit"
                disabled={loading}
                className={`bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base w-full sm:w-auto ${
                  loading ? "opacity-70 cursor-pointer" : ""
                }`}
              >
                {loading && <FaSpinner className="animate-spin" />}
                {loading ? t("dispatch.dispatching") : t("dispatch.dispatchButton")}
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DispatchShipment;
