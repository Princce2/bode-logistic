import React, { useState,  useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import Navbar from "../components/navbar";
import picture from "../images/lance.jpg";
import picture2 from "../images/julia.jpg";
import picture3 from "../images/frank.jpg";
import picture4 from "../images/bar.jpg";


const DispatchShipment = () => {
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
      phone_number_2: ""
    }
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
          [field]: value
        }
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
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
      const response = await fetch("https://electronic-gertrudis-chanel-debb-bad97784.koyeb.app/docs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error dispatching shipment:", error);
      setError(error || message)
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);


  return (
      <div>
        <Navbar />
        <div className="relative min-h-screen bg-slate-900 flex items-center justify-center">
          <img src={picture4} alt="" className="w-full h-full object-cover" />
          <div className="absolute top-0 max-w-6xl mx-auto backdrop-blur-sm shadow-lg rounded-xl p-8 mt-3">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600 text-shadow-lg">
              Dispatch Shipment
            </h2>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block mb-1 font-medium text-sm text-teal-700">
                    Recipient ID
                  </label>
                  <input
                    type="text"
                    name="recipient_id"
                    value={formData.recipient_id}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 placeholder:text-gray-400"
                    placeholder="recipient id"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 font-medium text-sm text-teal-700">
                      Content
                    </label>
                    <input
                      type="text"
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium text-sm text-teal-700">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 font-medium text-sm text-teal-700">
                    Note
                  </label>
                  <textarea
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2"
                  ></textarea>
                </div>

                <div>
                  <label className="block mb-1 font-medium text-sm text-teal-700">
                    Delivery Date
                  </label>
                  <input
                    type="date"
                    name="delivery_date"
                    value={formData.delievery_date}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>

                <div className="mt-6 border-t pt-6">
                  <h3 className="text-lg font-semibold text-teal-700 mb-4">
                    New Recipient Info
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="new_recipient.full_name"
                      value={formData.new_recipient.full_name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-gray-400"
                    />
                    <input
                      type="text"
                      name="new_recipient.address"
                      value={formData.new_recipient.address}
                      onChange={handleChange}
                      placeholder="Address"
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-gray-400"
                    />
                    <input
                      type="text"
                      name="new_recipient.phone_number_1"
                      value={formData.new_recipient.phone_number_1}
                      onChange={handleChange}
                      placeholder="Phone Number 1"
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-gray-400"
                    />
                    <input
                      type="text"
                      name="new_recipient.phone_number_2"
                      value={formData.new_recipient.phone_number_2}
                      onChange={handleChange}
                      placeholder="Phone Number 2"
                      className="w-full border rounded-lg px-3 py-2 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      loading ? "opacity-70 cursor-pointer" : ""
                    }`}
                  >
                    {loading && <FaSpinner className="animate-spin" />}
                    {loading ? "Dispatching..." : "Dispatch Shipment"}
                  </button>
                </div>
              </form>
            </div>
        </div>
      </div>
  );
};

export default DispatchShipment;
