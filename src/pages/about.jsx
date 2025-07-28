import Navbar from "../components/navbar.jsx";
import AboutImg from "../images/aboutimg.jpeg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../components/footer.jsx";

const About = () => {
  const { t } = useTranslation();
  return (
    <div
      className="min-h-screen bg-slate-900 text-white overflow-x-hidden"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <Navbar data-aos="fade-right" data-aos-delay="200" />
      <div
        className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <img
          src={AboutImg}
          alt="About Us"
          className="w-full h-full object-cover"
          data-aos="fade-down"
          data-aos-delay="400"
        />
        <div
          className="absolute top-1/4 sm:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-300 text-left"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            ABOUT BODE LOGISTICS
          </h1>
          <p
            className="text-lg sm:text-xl font-semibold text-gray-300 mt-2 text-left"
            data-aos="fade-left"
            data-aos-delay="700"
          >
            Bode Logistics is a world reference in third-party logistics
          </p>
          <Link
            to="/"
            className="inline-block mt-4 sm:mt-6 text-blue-500 hover:underline text-base sm:text-lg font-medium"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            BODE LOGISTICS
          </Link>
        </div>
      </div>

      <div
        className="w-full bg-slate-900 text-white py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-16 overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        <div
          className="max-w-6xl mx-auto"
          data-aos="fade-right"
          data-aos-delay="1000"
        >
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-blue-500 text-center sm:text-left"
            data-aos="fade-up"
            data-aos-delay="1100"
          >
            About Bode Logistics
          </h1>

          <section
            className="mb-6 sm:mb-10 overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="1200"
          >
            <h2
              className="text-xl sm:text-2xl font-semibold mb-2"
              data-aos="fade-right"
              data-aos-delay="1300"
            >
              Who We Are
            </h2>
            <p
              className="text-base sm:text-lg text-gray-400"
              data-aos="fade-left"
              data-aos-delay="1400"
            >
              Bode Logistics is a trusted logistics and supply chain solutions
              provider committed to delivering reliable, efficient, and
              innovative services to businesses across the globe. From freight
              forwarding and warehousing to last-mile delivery, we streamline
              the movement of goods with precision and care as of 10:52 PM WAT,
              July 23, 2025.
            </p>
          </section>

          <section
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-10 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="1500"
          >
            <div data-aos="fade-right" data-aos-delay="1600">
              <h2
                className="text-xl sm:text-2xl font-semibold mb-2"
                data-aos="fade-right"
                data-aos-delay="1700"
              >
                Our Mission
              </h2>
              <p
                className="text-base sm:text-lg text-gray-400"
                data-aos="fade-left"
                data-aos-delay="1800"
              >
                To simplify global logistics by offering fast, transparent, and
                customer-centric solutions that help businesses grow and thrive.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="1600">
              <h2
                className="text-xl sm:text-2xl font-semibold mb-2"
                data-aos="fade-right"
                data-aos-delay="1700"
              >
                Our Vision
              </h2>
              <p
                className="text-base sm:text-lg text-gray-400"
                data-aos="fade-left"
                data-aos-delay="1800"
              >
                To become a leading logistics partner known for excellence,
                integrity, and technological innovation.
              </p>
            </div>
          </section>

          <section
            className="mb-6 sm:mb-10 overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="1900"
          >
            <h2
              className="text-xl sm:text-2xl font-semibold mb-4"
              data-aos="fade-right"
              data-aos-delay="2000"
            >
              What We Do
            </h2>
            <ul
              className="list-disc list-inside text-gray-400 space-y-2 text-base sm:text-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="2100"
            >
              <li data-aos="fade-right" data-aos-delay="2200">
                Freight Forwarding (Air, Sea, and Land)
              </li>
              <li data-aos="fade-left" data-aos-delay="2300">
                Customs Clearance & Compliance
              </li>
              <li data-aos="fade-right" data-aos-delay="2400">
                Warehousing & Distribution
              </li>
              <li data-aos="fade-left" data-aos-delay="2500">
                E-commerce Fulfillment
              </li>
              <li data-aos="fade-right" data-aos-delay="2600">
                Last-Mile Delivery
              </li>
              <li data-aos="fade-left" data-aos-delay="2700">
                Supply Chain Management Consulting
              </li>
            </ul>
          </section>

          <section
            className="mb-6 sm:mb-10 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="2800"
          >
            <h2
              className="text-xl sm:text-2xl font-semibold mb-4"
              data-aos="fade-right"
              data-aos-delay="2900"
            >
              Why Choose Us
            </h2>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-gray-700 text-base sm:text-lg overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay="3000"
            >
              <div data-aos="fade-right" data-aos-delay="3100">
                <h3 className="font-bold text-blue-500">Experienced Team</h3>
                <p className="text-gray-400">
                  Decades of combined logistics expertise.
                </p>
              </div>
              <div data-aos="fade-left" data-aos-delay="3200">
                <h3 className="font-bold text-blue-500">Technology-Driven</h3>
                <p className="text-gray-400">
                  Real-time tracking and inventory management tools.
                </p>
              </div>
              <div data-aos="fade-right" data-aos-delay="3300">
                <h3 className="font-bold text-blue-500">Customer-Focused</h3>
                <p className="text-gray-400">
                  Tailored solutions and dedicated support.
                </p>
              </div>
              <div data-aos="fade-left" data-aos-delay="3400">
                <h3 className="font-bold text-blue-500">Global Network</h3>
                <p className="text-gray-400">
                  Strong international partnerships for smooth cross-border
                  shipping.
                </p>
              </div>
            </div>
          </section>

          <section
            className="mb-6 sm:mb-10 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="3500"
          >
            <h2
              className="text-xl sm:text-2xl font-semibold mb-2"
              data-aos="fade-right"
              data-aos-delay="3600"
            >
              Our Story
            </h2>
            <p
              className="text-base sm:text-lg text-gray-400"
              data-aos="fade-left"
              data-aos-delay="3700"
            >
              Founded in 20XX, Bode Logistics began with a single truck and a
              bold vision: to transform logistics in Africa and beyond. Today,
              we proudly serve hundreds of clients across industries including
              retail, agriculture, manufacturing, and e-commerce.
            </p>
          </section>

          <section
            className="mb-6 sm:mb-10 overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="3800"
          >
            <h2
              className="text-xl sm:text-2xl font-semibold mb-2"
              data-aos="fade-right"
              data-aos-delay="3900"
            >
              Our Values
            </h2>
            <ul
              className="list-disc list-inside text-gray-400 space-y-2 text-base sm:text-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="4000"
            >
              <li data-aos="fade-right" data-aos-delay="4100">
                <strong className="text-gray-600">Reliability:</strong> We keep
                our promises and deliver on time.
              </li>
              <li data-aos="fade-left" data-aos-delay="4200">
                <strong className="text-gray-600">Innovation:</strong> Embracing
                technology to stay ahead.
              </li>
              <li data-aos="fade-right" data-aos-delay="4300">
                <strong className="text-gray-600">Integrity:</strong> Honesty
                and transparency in every shipment.
              </li>
              <li data-aos="fade-left" data-aos-delay="4400">
                <strong className="text-gray-600">Sustainability:</strong>{" "}
                Committed to eco-friendly logistics solutions.
              </li>
            </ul>
          </section>

          <div
            className="text-center mt-6 sm:mt-12 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="4500"
          >
            <h2
              className="text-xl sm:text-2xl font-semibold mb-4 text-blue-500"
              data-aos="fade-right"
              data-aos-delay="4600"
            >
              Let’s Move Forward Together
            </h2>
            <p
              className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto"
              data-aos="fade-left"
              data-aos-delay="4700"
            >
              At Bode Logistics, we believe logistics is more than just moving
              goods — it’s about connecting people, markets, and possibilities.
              Join us on the journey.
            </p>
          </div>
        </div>
      </div>
      <Footer data-aos="fade-up" data-aos-delay="4800" />
    </div>
  );
};

export default About;
