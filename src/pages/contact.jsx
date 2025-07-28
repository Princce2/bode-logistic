import Navbar from "../components/navbar";
import AboutImg from "../images/aboutimg.jpeg";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

const Contact = () => {
    return (
        <div className="min-h-screen bg-slate-900 w-full font-sans">
            <Navbar />
            
            <div className="relative w-full">
                <img
                    src={AboutImg}
                    alt="Contact Us"
                    className="w-full h-50 object-cover" 
                />
                <h2 className="text-4xl font-bold text-white mt-6 ml-7">CONTACT US</h2>
                <Link
                  to="/"
                  className="inline-block mt-6 ml-7 text-blue-500 hover:underline text-lg font-medium"
                >
                    FILL IN YOUR INFORMATIONS
                </Link>

                <form className="space-y-10 mt-6 ml-7 ">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm text-white font-semibold mb-2">First Name</label>
                            <input type="text" placeholder="Enter your first name" className="w-full border-b border-white text-white focus:outline-none focus:border-white py-2" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-white mb-2">Last Name</label>
                            <input type="text" placeholder="Enter your last name" className="w-full border-b border-white text-white focus:outline-none focus:border-white py-2" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-white mb-2">Email</label>
                            <input type="email" placeholder="Enter your email" className="w-full border-b border-white focus:outline-none text-white focus:border-white py-2" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-white mb-2">Phone number</label>
                            <input type="tel" placeholder="Enter your phone number" className="w-full border-b border-white focus:outline-none text-white focus:border-white py-2" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-white mb-2">Message</label>
                            <textarea placeholder="Enter your message" rows={2} className="w-full border-b border-white focus:outline-none text-white focus:border-white py-2"></textarea>
                        </div>

                        <button type="submit" className="flex items-center mt-25 ml-20 bg-white hover:bg-blue-800  w-24 h-10 gap-2 px-5 py-3 text-slate-900 hover:text-white rounded-md font-medium hover:underline transition-all">
                            Submit 
                        </button>
                    </div>
                </form>


                <div className="mt-12 text-sm ml-7 text-white">
                    <p className="font-semibold mb-1">EMAIL US</p>
                    <p className="text-white hover:text-blue-500">bodelogistics@gmail.com</p>
                </div>
        </div>
            <Footer />
        </div>
    )};

export default Contact;