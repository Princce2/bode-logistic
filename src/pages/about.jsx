import Navbar from "../components/navbar.jsx";
import AboutImg from "../images/aboutimg.jpeg";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="relative w-full">
        <img
          src={AboutImg}
          alt="About Us"
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-300 text-left">
            ABOUT BODE LOGISTICS
          </h1>
          <p className="text-xl font-semibold text-gray-300 mt-2 text-left">
            Bode Logistics is a world reference in third-party logistics
          </p>
          <Link
            to="/"
            className="inline-block mt-6 text-blue-500 hover:underline text-lg font-medium"
          >
            BODE LOGISTICS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
