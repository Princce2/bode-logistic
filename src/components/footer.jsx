import {
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-900 text-blue-100 pt-12 pb-6 border-t border-blue-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-8">
        <div className="flex-1 flex flex-col md:flex-row gap-8 w-full">
          <div className="bg-blue-800 rounded-xl flex-1 p-8 flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold mb-2">Find a job</h3>
            <p className="mb-6 text-blue-100 text-base">
              At Bode Logistics, we offer diverse job opportunities that match
              your skills and aspirations. Join a team that values your talents
              and supports your journey toward success!
            </p>
            <button className="border-2 border-blue-100 text-blue-100 font-semibold px-6 py-2 rounded transition hover:bg-blue-100 hover:text-gray-900 flex items-center gap-2">
              EXPLORE OPPORTUNITIES <span className="text-lg">→</span>
            </button>
          </div>
          <div className="bg-blue-700 rounded-xl flex-1 p-8 flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold mb-2">Discover Life @ BODE</h3>
            <p className="mb-6 text-blue-100 text-base">
              At Bode Logistics, we offer diverse job opportunities that match
              your skills and aspirations. Join a team that values your talents
              and supports your journey toward success!
            </p>
            <button className="border-2 border-blue-100 text-blue-100 font-semibold px-6 py-2 rounded transition hover:bg-blue-100 hover:text-gray-900 flex items-center gap-2">
              DISCOVER LIFE @ BODE <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-blue-800">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="text-gray-400 font-semibold mr-2">FOLLOW US</span>
          <span className="font-bold text-blue-100">#BODELOGISTICS</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-400" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="hover:text-blue-400" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-blue-400" aria-label="Facebook">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="hover:text-blue-400" aria-label="YouTube">
            <FaYoutube size={24} />
          </a>
          <a href="#" className="hover:text-blue-400" aria-label="TikTok">
            <FaTiktok size={24} />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm text-gray-400 py-6 border-t border-blue-800">
        <a href="#" className="hover:text-blue-100">
          Privacy policy
        </a>
        <a href="#" className="hover:text-blue-100">
          Terms & Conditions
        </a>
        <a href="#" className="hover:text-blue-100">
          Responsible disclosure
        </a>
        <a href="#" className="hover:text-blue-100">
          Human Rights Statements & Policies
        </a>
        <a href="#" className="hover:text-blue-100">
          FAQ
        </a>
        <a href="#" className="hover:text-blue-100">
          Sitemap
        </a>
        <a href="#" className="hover:text-blue-100">
          Glossary
        </a>
        <a href="#" className="hover:text-blue-100">
          Accessibility: Non compliant
        </a>
      </div>
      <div className="text-center text-gray-500 text-xs mt-6">
        © Bode Logistics 2025
      </div>
    </div>
    <div className="relative w-full">
      <button
        className="absolute bottom-6 right-6 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg font-bold flex items-center gap-2 hover:bg-red-700 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        TOP
      </button>
    </div>
  </footer>
);

export default Footer;
