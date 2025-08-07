import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const CreateAccountDropdown = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.first_name || !form.last_name || !form.email || !form.password) {
      toast.error("Please fill in all required fields");
      setLoading(false);
      return;
    }

    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://electronic-gertrudis-chanel-debb-bad97784.koyeb.app/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!response.ok) {
        let errorMessage = "Account creation failed. Please check your details.";
        try {
          const errorData = await response.json();
          if (errorData.message) {
            errorMessage = errorData.message;
          } else if (errorData.error) {
            errorMessage = errorData.error;
          }
        } catch (parseError) {
          if (response.status === 422) {
            errorMessage = "Invalid input data. Please check your email format.";
          } else if (response.status === 409) {
            errorMessage = "An account with this email already exists.";
          }
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      toast.success("Account created successfully! Redirecting to login...");
      setForm({ first_name: "", last_name: "", email: "", password: "" });
      onClose();
      
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg p-4 z-50">
      <h3 className="text-base font-semibold text-gray-800 mb-3">{t("navbar.createAccount")}</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input 
          type="text" 
          name="first_name"
          value={form.first_name}
          onChange={handleChange}
          placeholder="First Name" 
          className="w-full px-3 py-2 border rounded-lg text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
          required
        />
        <input 
          type="text" 
          name="last_name"
          value={form.last_name}
          onChange={handleChange}
          placeholder="Last Name" 
          className="w-full px-3 py-2 border rounded-lg text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
          required
        />
        <input 
          type="email" 
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email" 
          className="w-full px-3 py-2 border rounded-lg text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
          required
        />
        <input 
          type="password" 
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password (min 6 characters)" 
          className="w-full px-3 py-2 border rounded-lg text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
          required
          minLength={6}
        />
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm font-medium transition disabled:opacity-50"
        >
          {loading ? "Creating Account..." : t("navbar.createAccount")}
        </button>
      </form>
    </div>
  );
};

export default CreateAccountDropdown;