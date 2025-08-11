import { Link, useNavigate } from "react-router-dom";
import Bodelogo from "../images/Bodelogo.jpg";
import { useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const Create = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Basic form validation
    if (!form.first_name || !form.last_name || !form.email || !form.password) {
      const errorMsg = "Please fill in all required fields";
      setError(errorMsg);
      toast.error(errorMsg);
      setLoading(false);
      return;
    }

    if (form.password.length < 6) {
      const errorMsg = "Password must be at least 6 characters long";
      setError(errorMsg);
      toast.error(errorMsg);
      setLoading(false);
      return;
    }

    console.log("Form data:", form);
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
        // Try to get specific error message from API
        let errorMessage = "Account creation failed. Please check your details.";
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
          // If we can't parse the error response, use default message
          if (response.status === 422) {
            errorMessage = "Invalid input data. Please check your email format and ensure all fields are filled correctly.";
          } else if (response.status === 409) {
            errorMessage = "An account with this email already exists.";
          }
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      // If the API returns a token after registration
      // localStorage.setItem("token", data.accessToken);
      toast.success("Account created successfully! Redirecting to login...");
      setForm({ first_name: "", last_name: "", email: "", password: "" });
      
      // Redirect to login page after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black overflow-hidden px-4 sm:px-6 md:px-12">
      {/* Background Glow Particles */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ top: "20%", left: "10%" }}
        ></div>
        <div
          className="absolute w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ bottom: "20%", right: "10%" }}
        ></div>
      </div>

      {/* Main Flex Container */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl min-h-[500px] md:h-[500px]">
        {/* Logo Side */}
        <div className="w-full md:w-1/2 h-64 md:h-[600px] flex items-center justify-center">
          <img
            src={Bodelogo}
            alt="Bodelogo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Side */}
        <div className="w-full md:w-1/2 h-full bg-white/10 backdrop-blur-md p-6 md:p-8 flex flex-col justify-center rounded-none md:rounded-r-xl shadow-2xl border-t md:border md:border-blue-300/20 min-h-[600px]">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6 animate-pulse text-center md:text-left">
            {t("create.title")}
          </h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2 flex flex-col ">
                <label className="text-sm font-medium text-gray-300">
                  {t("create.firstName")}
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={form.first_name}
                  onChange={handleChange}
                  placeholder={t("create.firstNamePlaceholder")}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="space-y-2 flex flex-col ">
                <label className="text-sm font-medium text-gray-300">
                  {t("create.lastName")}
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={form.last_name}
                  onChange={handleChange}
                  placeholder={t("create.lastNamePlaceholder")}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="space-y-2 flex flex-col ">
                <label className="text-sm font-medium text-gray-300">
                  {t("create.email")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t("create.emailPlaceholder")}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="space-y-2 flex flex-col ">
                <label className="text-sm font-medium text-gray-300">
                  {t("create.password")}
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder={t("create.passwordPlaceholder")}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  minLength={6}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition duration-200"
              disabled={loading}
            >
              {loading ? t("create.creating") : t("create.createButton")}
            </button>
            {error && (
              <div className="text-center pt-2">
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}
            {success && (
              <div className="text-center pt-2">
                <p className="text-sm text-green-400">{success}</p>
              </div>
            )}
            <div className="text-center pt-4">
              <p className="text-sm text-gray-300">
                {t("create.alreadyHaveAccount")}{" "}
                <Link
                  to="/login"
                  className="text-blue-400 hover:text-blue-300 underline transition"
                >
                  {t("create.loginLink")}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
