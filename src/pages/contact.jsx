import Navbar from "../components/navbar";
import AboutImg from "../images/aboutimg.jpeg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../components/footer";

const Contact = () => {
    const { t } = useTranslation();
    
    return (
        <div className="min-h-screen bg-slate-900 w-full font-sans">
            <Navbar />
            
            {/* Hero Section */}
            <div className="relative w-full h-[50vh] sm:h-[60vh]">
                <img
                    src={AboutImg}
                    alt="Contact Us"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-4 sm:px-8">
                    <div className="max-w-7xl mx-auto w-full">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-left">
                            {t("contact.title")}
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-200 text-left mb-4">
                            {t("contact.subtitle")}
                        </p>
                        <Link
                            to="/"
                            className="inline-block text-blue-500 hover:underline text-base sm:text-lg font-medium"
                        >
                            BODE LOGISTICS
                        </Link>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-slate-900 py-12 px-4 sm:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            {t("contact.sendMessage")}
                        </h2>
                        <p className="text-gray-300">
                            {t("contact.sendMessageDescription")}
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-white mb-2">
                                    {t("contact.firstName")}
                                </label>
                                <input 
                                    type="text"
                                    placeholder={t("contact.firstNamePlaceholder")} 
                                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-white mb-2">
                                    {t("contact.lastName")}
                                </label>
                                <input 
                                    type="text"
                                    placeholder={t("contact.lastNamePlaceholder")} 
                                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-white mb-2">
                                    {t("contact.email")}
                                </label>
                                <input 
                                    type="email"
                                    placeholder={t("contact.emailPlaceholder")} 
                                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-white mb-2">
                                    {t("contact.phoneNumber")}
                                </label>
                                <input 
                                    type="tel"
                                    placeholder={t("contact.phoneNumberPlaceholder")} 
                                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-white mb-2">
                                {t("contact.message")}
                            </label>
                            <textarea
                                placeholder={t("contact.messagePlaceholder")} 
                                rows={5} 
                                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button 
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
                            >
                                {t("contact.sendButton")}
                            </button>
                        </div>
                    </form>

                    {/* Contact Info */}
                    <div className="mt-12 text-center">
                        <div className="bg-gray-800 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-white mb-4">{t("contact.getInTouch")}</h3>
                            <div className="space-y-2">
                                <p className="text-gray-300">
                                    <span className="font-semibold text-white">{t("contact.emailLabel")}</span> bodelogistics@gmail.com
                                </p>
                                <p className="text-gray-300">
                                    <span className="font-semibold text-white">{t("contact.phoneLabel")}</span> +1 (555) 123-4567
                                </p>
                                <p className="text-gray-300">
                                    <span className="font-semibold text-white">{t("contact.addressLabel")}</span> 123 Logistics Ave, Business District
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );};

export default Contact;