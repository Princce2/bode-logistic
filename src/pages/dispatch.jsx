import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../components/navbar";

const DispatchShipment = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [recipientId, setRecipientId] = useState("");
  const [content, setContent] = useState("");
  const [weight, setWeight] = useState("");
  const [note, setNote] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const token = localStorage.getItem("token");
    if (!token) {
      setError("User not authenticated.");
      return;
    }

    // Validate fields
    if (!content || !weight || !note || !deliveryDate || !fullName || !address || !phone1) {
      setError("All fields (except Phone 2 and Recipient ID) are required.");
      return;
    }

    const dispatchData = {
      content: content,
      weight: parseFloat(weight),
      note: note,
      delivery_date: deliveryDate,
      new_recipient: {
        full_name: fullName,
        address: address,
        phone_number_1: phone1,
        phone_number_2: phone2 || ""
      }
    };
    
    // Only add recipient_id if it's provided
    if (recipientId.trim()) {
      dispatchData.recipient_id = recipientId;
    }

    console.log("🚀 Dispatch payload:", dispatchData);
    console.log("🚀 Dispatching with data:", dispatchData);

    try {
      const response = await fetch(
        "https://electronic-gertrudis-chanel-debb-bad97784.koyeb.app/dispatches/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(dispatchData)
        }
      );

      const responseText = await response.text();
      console.log("📥 Raw dispatch response:", responseText);
      console.log("📊 Dispatch response status:", response.status);

      if (!response.ok) {
        let errorMessage = "Failed to dispatch shipment.";
        try {
          const errorData = JSON.parse(responseText);
          console.error("❌ Dispatch validation errors:", errorData);
          
          if (errorData.detail && Array.isArray(errorData.detail)) {
            errorMessage = errorData.detail.map(err => 
              `${err.loc?.join('.')} - ${err.msg}`
            ).join(', ');
          } else if (errorData.detail) {
            errorMessage = errorData.detail;
          } else if (errorData.message) {
            errorMessage = errorData.message;
          }
        } catch {
          errorMessage = responseText || errorMessage;
        }
        setError(errorMessage);
        return;
      }

      const result = JSON.parse(responseText);
      console.log("✅ Dispatch successful:", result);
      setSuccess(true);

      // Clear form
      setRecipientId("");
      setContent("");
      setWeight("");
      setNote("");
      setDeliveryDate("");
      setFullName("");
      setAddress("");
      setPhone1("");
      setPhone2("");

    } catch (err) {
      console.error("❌ Error dispatching:", err);
      setError(err.message || "Dispatch failed");
    }
  };

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
              Create Dispatch
            </h2>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            {success && <p className="text-green-500 mb-2">Dispatch successful!</p>}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <input
                type="text"
                placeholder="Recipient ID (optional)"
                value={recipientId}
                onChange={(e) => setRecipientId(e.target.value)}
                className="w-full border rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full border rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 text-sm"
              />
              <input
                type="number"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full border rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full border rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 text-sm"
              />
              <input
                type="date"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                className="w-full border rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 text-sm"
              />
              <hr className="my-4" />
              <h3 className="font-semibold text-teal-700">New Recipient Details</h3>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Phone Number 1"
                value={phone1}
                onChange={(e) => setPhone1(e.target.value)}
                className="w-full border rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Phone Number 2 (optional)"
                value={phone2}
                onChange={(e) => setPhone2(e.target.value)}
                className="w-full border rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 text-sm"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg hover:bg-blue-700 text-sm"
              >
                Submit Dispatch
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DispatchShipment;