import { useState } from "react";
import Navbar from "./components/navbar.jsx";
import LogisticsVideo from "./videos/Logistics1.mp4";
import { FaChevronRight } from "react-icons/fa";
import Slider1 from "./images/slider1.webp";
import Slider2 from "./images/slider2.jpg";
import BodeInsights from "./images/Bodeinsights.jpeg";
import Gender from "./images/gender.jpeg";
import Studies from "./images/studies.jpeg";
import DigitalFreight from "./images/DigitalFreight.jpeg";
import { Link } from "react-router-dom";
import Trackcatch from "./components/trackcatch.jsx";
import Footer from "./components/footer.jsx";

const slides = [
  {
    type: "video",
    src: LogisticsVideo,
    title: "ABOUT BODE LOGISTICS",
    description:
      "Discover our origin story, commitment to excellence, and how we deliver seamless logistics solutions across the globe.",
  },
  {
    type: "image",
    src: Slider1,
    title: "DARE TO GROW",
    description:
      "Empowering people and building logistics excellence together.",
  },
  {
    type: "image",
    src: Slider2,
    title: "ENGINEERING WINNING SOLUTIONS",
    description: "Smart solutions that move your business forward.",
  },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("track");

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="App bg-gray-900 text-white overflow-x-hidden"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <Navbar data-aos="fade-right" data-aos-delay="200" />
      <div
        className="relative w-full h-[90vh] overflow-hidden"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <div className="flex h-full w-full overflow-hidden">
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={index}
                className={`
                  relative transition-all duration-700 ease-in-out h-full flex-shrink-0
                  ${isActive ? "flex-[3]" : "flex-[0.5]"}
                  sm:flex ${isActive ? "block" : "hidden"} sm:block
                `}
                style={{
                  minWidth: isActive ? "100%" : "0%",
                  ...(window.innerWidth >= 640 && {
                    minWidth: isActive ? "60%" : "20%",
                  }),
                }}
                data-aos={isActive ? "fade-up" : "fade-down"}
                data-aos-delay={isActive ? "400" : "300"}
              >
                {slide.type === "video" ? (
                  <video
                    className="w-full h-full object-cover"
                    autoPlay={isActive}
                    muted
                    loop
                    data-aos="zoom-in"
                    data-aos-delay={isActive ? "500" : "400"}
                  >
                    <source src={slide.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    data-aos="zoom-out"
                    data-aos-delay={isActive ? "500" : "400"}
                  />
                )}

                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    isActive ? "bg-black/40" : "bg-black/60"
                  } flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden`}
                  data-aos="fade-up"
                  data-aos-delay={isActive ? "600" : "500"}
                >
                  <div
                    className="text-center"
                    data-aos="fade-right"
                    data-aos-delay={isActive ? "700" : "600"}
                  >
                    <h1
                      className="text-2xl md:text-3xl font-bold mb-4 text-white"
                      data-aos="fade-left"
                      data-aos-delay={isActive ? "800" : "700"}
                    >
                      {slide.title}
                    </h1>
                    {isActive && (
                      <>
                        <p
                          className="text-base md:text-lg max-w-xl text-white mb-6"
                          data-aos="fade-up"
                          data-aos-delay="900"
                        >
                          {slide.description}
                        </p>
                        {slide.type === "video" &&
                        slide.title === "ABOUT BODE LOGISTICS" ? (
                          <Link
                            to="/about"
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold text-sm inline-block"
                            data-aos="zoom-in"
                            data-aos-delay="1000"
                          >
                            Learn More
                          </Link>
                        ) : (
                          <button
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold text-sm"
                            data-aos="zoom-in"
                            data-aos-delay="1000"
                          >
                            Learn More
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-white/20 hover:bg-white/40 p-3 rounded-full"
          data-aos="fade-left"
          data-aos-delay="1100"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Tab Section - Responsive Standalone */}
      <section
        className="bg-gray-900 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          className="max-w-7xl mx-auto"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div
            className="flex justify-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div
              className="bg-gray-900 border border-white/10 shadow-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl flex flex-col justify-center overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              {/* Tabs */}
              <div
                className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                {["track", "bodehub"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base font-semibold rounded-full capitalize transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-blue-400 bg-[#1F2937] hover:bg-[#374151] border border-blue-800/20"
                    }`}
                    data-aos="fade-right"
                    data-aos-delay="700"
                  >
                    {tab === "track" ? "Track & Trace" : "Bode Hub"}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div
                className="transition-opacity duration-500 min-h-[150px] sm:min-h-[180px] md:min-h-[200px] flex items-center justify-center text-center overflow-hidden"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                {activeTab === "track" && (
                  <div
                    className="w-full"
                    data-aos="zoom-in"
                    data-aos-delay="900"
                  >
                    <h3
                      className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-4"
                      data-aos="fade-left"
                      data-aos-delay="1000"
                    >
                      Track Your Shipment
                    </h3>
                    <Trackcatch data-aos="fade-up" data-aos-delay="1100" />
                  </div>
                )}
                {activeTab === "bodehub" && (
                  <div
                    className="w-full"
                    data-aos="zoom-in"
                    data-aos-delay="900"
                  >
                    <h3
                      className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-4"
                      data-aos="fade-right"
                      data-aos-delay="1000"
                    >
                      Bode Hub
                    </h3>
                    <p
                      className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm md:text-base px-2 sm:px-0"
                      data-aos="fade-up"
                      data-aos-delay="1100"
                    >
                      Log in or sign up to Bode Hub to enjoy the full features.
                      Quote, book and ship all over the world, and manage your
                      cargo end-to-end via a single platform as of 10:43 PM WAT,
                      July 23, 2025.
                    </p>
                    <button
                      className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300 text-xs sm:text-sm md:text-base"
                      data-aos="zoom-in"
                      data-aos-delay="1200"
                    >
                      Get Started with Bode Hub
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Logistics Excellence */}
      <section
        className="bg-gray-900 py-20 mt-10 overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div
            className="text-center mb-12"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h2
              className="text-4xl font-extrabold text-white mb-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Global Logistics Excellence
            </h2>
            <p
              className="text-lg text-gray-400 max-w-3xl mx-auto"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              At Bode Logistics, we redefine global trade with unmatched
              precision and innovation. Our world-class infrastructure spans
              over 50 countries, ensuring your goods move seamlessly from origin
              to destination with cutting-edge technology and expert oversight
              as of July 21, 2025.
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            <img
              src={DigitalFreight}
              alt="Global Logistics Network"
              className="rounded-xl shadow-lg object-cover h-64 md:h-full"
              data-aos="fade-right"
              data-aos-delay="800"
            />
            <div
              className="flex flex-col justify-center"
              data-aos="fade-left"
              data-aos-delay="900"
            >
              <p
                className="text-gray-300 leading-relaxed mb-6"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                With a fleet of state-of-the-art vessels, aircraft, and a robust
                land transport network, we deliver reliability at scale. Our
                real-time tracking and AI-driven analytics provide unparalleled
                visibility, empowering businesses to thrive in a dynamic market.
              </p>
              <button
                className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300"
                data-aos="zoom-in"
                data-aos-delay="1100"
              >
                Explore Our Network
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Special Highlights */}
      <section
        className="bg-gray-900 py-20 overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div
            className="text-center mb-12"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h2
              className="text-4xl font-extrabold text-blue-100 mb-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              SPECIAL HIGHLIGHTS
            </h2>
            <p
              className="text-lg text-blue-200 max-w-3xl mx-auto"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Discover Bode Logistics!
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            <div
              className="bg-[#1F2937] rounded-xl shadow-lg overflow-hidden"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              <img
                src={DigitalFreight}
                alt="Digital Freight Platform"
                className="w-full h-40 object-cover"
                data-aos="fade-up"
                data-aos-delay="900"
              />
              <div className="p-6" data-aos="fade-down" data-aos-delay="1000">
                <h3
                  className="text-lg font-bold text-blue-100 mb-2"
                  data-aos="fade-left"
                  data-aos-delay="1100"
                >
                  myBODE - Your Digital Freight Platform
                </h3>
              </div>
            </div>
            <div
              className="bg-[#1F2937] rounded-xl shadow-lg overflow-hidden"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              <img
                src={BodeInsights}
                alt="Insights"
                className="w-full h-40 object-cover"
                data-aos="fade-up"
                data-aos-delay="900"
              />
              <div className="p-6" data-aos="fade-down" data-aos-delay="1000">
                <h3
                  className="text-lg font-bold text-blue-100 mb-2"
                  data-aos="fade-right"
                  data-aos-delay="1100"
                >
                  BODE Insights
                </h3>
              </div>
            </div>
            <div
              className="bg-[#1F2937] rounded-xl shadow-lg overflow-hidden"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              <img
                src={Gender}
                alt="Diversity"
                className="w-full h-40 object-cover"
                data-aos="fade-up"
                data-aos-delay="900"
              />
              <div className="p-6" data-aos="fade-down" data-aos-delay="1000">
                <h3
                  className="text-lg font-bold text-blue-100 mb-2"
                  data-aos="fade-left"
                  data-aos-delay="1100"
                >
                  Promoting gender diversity at BODE
                </h3>
              </div>
            </div>
            <div
              className="bg-[#1F2937] rounded-xl shadow-lg overflow-hidden"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              <img
                src={Studies}
                alt="Case Studies"
                className="w-full h-40 object-cover"
                data-aos="fade-up"
                data-aos-delay="900"
              />
              <div className="p-6" data-aos="fade-down" data-aos-delay="1000">
                <h3
                  className="text-lg font-bold text-blue-100 mb-2"
                  data-aos="fade-right"
                  data-aos-delay="1100"
                >
                  Case Studies
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovative Solutions Showcase */}
      <section
        className="bg-[#111827] py-20 overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div
            className="text-center mb-12"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <h2
              className="text-4xl font-extrabold text-white mb-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Innovative Solutions Showcase
            </h2>
            <p
              className="text-lg text-gray-400 max-w-3xl mx-auto"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Revolutionize your supply chain with Bode Logistics' pioneering
              solutions. From sustainable packaging to automated warehousing, we
              integrate the latest advancements to drive efficiency and reduce
              costs as of July 21, 2025.
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            <div
              className="flex flex-col justify-center"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              <p
                className="text-gray-300 leading-relaxed mb-6"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                Our proprietary logistics platform leverages machine learning to
                optimize routes and predict demand, saving you time and
                resources. Experience a future-ready logistics partner committed
                to sustainability and innovation.
              </p>
              <button
                className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300"
                data-aos="zoom-in"
                data-aos-delay="1000"
              >
                Discover Innovations
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Innovative Logistics Technology"
              className="rounded-xl shadow-lg object-cover h-64 md:h-full"
              data-aos="fade-left"
              data-aos-delay="1100"
            />
          </div>
        </div>
      </section>

      {/* Real-Time Market Updates */}
      <section
        className="bg-gray-900 py-20 overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div
            className="text-center mb-12"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h2
              className="text-4xl font-extrabold text-white mb-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Real-Time Market Updates
            </h2>
            <p
              className="text-lg text-gray-400 max-w-3xl mx-auto"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Stay ahead with Bode Logistics' live insights as of 08:50 AM WAT,
              July 21, 2025. Our expert analysis covers freight rates, port
              congestion, and emerging trade routes to keep your operations
              competitive.
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            <img
              src="https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=800&q=80"
              alt="Market Analysis Dashboard"
              className="rounded-xl shadow-lg object-cover h-64 md:h-full"
              data-aos="fade-right"
              data-aos-delay="800"
            />
            <div
              className="flex flex-col justify-center"
              data-aos="fade-left"
              data-aos-delay="900"
            >
              <p
                className="text-gray-300 leading-relaxed mb-6"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                Access real-time data dashboards and personalized reports to
                adapt to market shifts instantly. Our team of analysts ensures
                you’re equipped with the knowledge to make informed decisions.
              </p>
              <button
                className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300"
                data-aos="zoom-in"
                data-aos-delay="1100"
              >
                View Live Updates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section
        className="bg-[#111827] py-20 overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div
            className="text-center mb-12"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <h2
              className="text-4xl font-extrabold text-white mb-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Sustainability Commitment
            </h2>
            <p
              className="text-lg text-gray-400 max-w-3xl mx-auto"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Bode Logistics is dedicated to a greener future. Our eco-friendly
              initiatives, including carbon-neutral shipping, reduce your
              environmental footprint as of July 21, 2025.
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            <img
              src={Gender}
              alt="Sustainable Logistics Practices"
              className="rounded-xl shadow-lg object-cover h-64 md:h-full"
              data-aos="fade-right"
              data-aos-delay="800"
            />
            <div
              className="flex flex-col justify-center"
              data-aos="fade-left"
              data-aos-delay="900"
            >
              <p
                className="text-gray-300 leading-relaxed mb-6"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                We’ve invested in electric fleets, renewable energy warehouses,
                and sustainable packaging solutions. Join us in building a
                logistics ecosystem that prioritizes the planet.
              </p>
              <button
                className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300"
                data-aos="zoom-in"
                data-aos-delay="1100"
              >
                Learn About Sustainability
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Client Portal Access */}
      <section
        className="bg-gray-900 py-20 overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div
            className="text-center mb-12"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h2
              className="text-4xl font-extrabold text-white mb-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Exclusive Client Portal Access
            </h2>
            <p
              className="text-lg text-gray-400 max-w-3xl mx-auto"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Unlock a world of control with Bode Hub. Manage shipments, access
              analytics, and connect with our team 24/7 starting today, July 21,
              2025.
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            <img
              src={Studies}
              alt="Client Portal Interface"
              className="rounded-xl shadow-lg object-cover h-64 md:h-full"
              data-aos="fade-right"
              data-aos-delay="800"
            />
            <div
              className="flex flex-col justify-center"
              data-aos="fade-left"
              data-aos-delay="900"
            >
              <p
                className="text-gray-300 leading-relaxed mb-6"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                Our secure portal offers real-time updates, custom dashboards,
                and direct support. Elevate your logistics experience with a
                personalized, all-in-one platform.
              </p>
              <button
                className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300"
                data-aos="zoom-in"
                data-aos-delay="1100"
              >
                Access Bode Hub
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSROOM Section */}
      <section
        className="bg-gray-900 py-20 overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h2
            className="text-4xl font-extrabold text-center text-blue-100 mb-12 tracking-tight"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            BODE LOGISTICS NEWSROOM
          </h2>
          <div
            className="flex flex-col md:flex-row gap-10 items-center mb-16 overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="News Main"
              className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg"
              data-aos="fade-right"
              data-aos-delay="600"
            />
            <div className="flex-1" data-aos="fade-left" data-aos-delay="700">
              <div
                className="flex items-center gap-4 mb-2 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <span
                  className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded"
                  data-aos="fade-right"
                  data-aos-delay="900"
                >
                  Press release
                </span>
                <span
                  className="text-gray-400 text-sm"
                  data-aos="fade-left"
                  data-aos-delay="1000"
                >
                  4/25/2025
                </span>
              </div>
              <h3
                className="text-2xl md:text-3xl font-bold text-blue-100 mb-4"
                data-aos="fade-up"
                data-aos-delay="1100"
              >
                Bode Logistics signs deal to acquire Borusan Tedarik, expand in
                Turkey
              </h3>
              <p
                className="text-gray-300 mb-6"
                data-aos="fade-down"
                data-aos-delay="1200"
              >
                Bode agrees to share transfer agreement for 100% of Borusan
                Tedarik
              </p>
              <button
                className="border-2 border-blue-100 text-blue-100 font-semibold px-6 py-2 rounded transition hover:bg-blue-100 hover:text-gray-900"
                data-aos="zoom-in"
                data-aos-delay="1300"
              >
                LEARN MORE
              </button>
            </div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div
              className="bg-[#1F2937] rounded-xl shadow-lg overflow-hidden"
              data-aos="fade-right"
              data-aos-delay="1500"
            >
              <img
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                alt="Interview"
                className="w-full h-40 object-cover"
                data-aos="fade-up"
                data-aos-delay="1600"
              />
              <div className="p-6" data-aos="fade-down" data-aos-delay="1700">
                <div
                  className="flex items-center gap-2 mb-2"
                  data-aos="fade-left"
                  data-aos-delay="1800"
                >
                  <span
                    className="bg-blue-100 text-gray-900 text-xs font-bold px-3 py-1 rounded"
                    data-aos="fade-right"
                    data-aos-delay="1900"
                  >
                    Interview
                  </span>
                  <span
                    className="text-gray-400 text-sm"
                    data-aos="fade-left"
                    data-aos-delay="2000"
                  >
                    3/19/2025
                  </span>
                </div>
                <h4
                  className="text-lg font-bold text-blue-100 mb-2"
                  data-aos="fade-up"
                  data-aos-delay="2100"
                >
                  Building the Future of Supply Chain
                </h4>
              </div>
            </div>
            <div
              className="bg-[#1F2937] rounded-xl shadow-lg overflow-hidden"
              data-aos="fade-right"
              data-aos-delay="1500"
            >
              <img
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80"
                alt="Article"
                className="w-full h-40 object-cover"
                data-aos="fade-up"
                data-aos-delay="1600"
              />
              <div className="p-6" data-aos="fade-down" data-aos-delay="1700">
                <div
                  className="flex items-center gap-2 mb-2"
                  data-aos="fade-right"
                  data-aos-delay="1800"
                >
                  <span
                    className="bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded"
                    data-aos="fade-left"
                    data-aos-delay="1900"
                  >
                    Article
                  </span>
                  <span
                    className="text-gray-400 text-sm"
                    data-aos="fade-right"
                    data-aos-delay="2000"
                  >
                    4/2/2025
                  </span>
                </div>
                <h4
                  className="text-lg font-bold text-blue-100 mb-2"
                  data-aos="fade-up"
                  data-aos-delay="2100"
                >
                  Bode Logistics 2024 CSR Summary Report
                </h4>
              </div>
            </div>
            <div
              className="bg-[#1F2937] rounded-xl shadow-lg overflow-hidden"
              data-aos="fade-right"
              data-aos-delay="1500"
            >
              <img
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                alt="Press Release"
                className="w-full h-40 object-cover"
                data-aos="fade-up"
                data-aos-delay="1600"
              />
              <div className="p-6" data-aos="fade-down" data-aos-delay="1700">
                <div
                  className="flex items-center gap-2 mb-2"
                  data-aos="fade-left"
                  data-aos-delay="1800"
                >
                  <span
                    className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded"
                    data-aos="fade-right"
                    data-aos-delay="1900"
                  >
                    Press release
                  </span>
                  <span
                    className="text-gray-400 text-sm"
                    data-aos="fade-left"
                    data-aos-delay="2000"
                  >
                    3/28/2025
                  </span>
                </div>
                <h4
                  className="text-lg font-bold text-blue-100 mb-2"
                  data-aos="fade-up"
                  data-aos-delay="2100"
                >
                  Bode Logistics Expands Global Air Freight Capacity with WUX
                  (China) to ORD (U.S.) Air Charter
                </h4>
              </div>
            </div>
          </div>
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-delay="2200"
          >
            <button
              className="border-2 border-blue-100 text-blue-100 font-semibold px-8 py-2 rounded transition hover:bg-blue-100 hover:text-gray-900"
              data-aos="zoom-in"
              data-aos-delay="2300"
            >
              SEE ALL NEWS
            </button>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section
        className="bg-gray-900 py-20 overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h2
            className="text-4xl font-extrabold text-white mb-6"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            JOIN US
          </h2>
          <p
            className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            At Bode Logistics, we are not just a leading global supply chain
            solutions provider; we are a community of innovators, collaborators,
            and problem-solvers. With a presence in over 170 countries and a
            workforce of more than 110,000 dedicated employees, we understand
            that our people are the key to our success. Join us on a journey
            where you can take bold steps in your career and embrace the
            opportunities for growth and development that await you. Dare to
            grow with Bode Logistics and help shape the future of global
            logistics through imagination, excellence, and commitment.
          </p>
        </div>
      </section>

      <Footer data-aos="fade-up" data-aos-delay="200" />
    </div>
  );
};

export default App;
