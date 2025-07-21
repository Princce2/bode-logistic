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
    <div className="App bg-gray-900 text-white">
      <Navbar />
      <div className="relative w-full h-[90vh]">
        <div className="flex h-full w-full overflow-hidden">
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={index}
                className={`relative transition-all duration-700 ease-in-out h-full flex-shrink-0 ${
                  isActive ? "flex-[3]" : "flex-[0.5]"
                }`}
                style={{ minWidth: isActive ? "60%" : "20%" }}
              >
                {slide.type === "video" ? (
                  <video
                    className="w-full h-full object-cover"
                    autoPlay={isActive}
                    muted
                    loop
                  >
                    <source src={slide.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                )}

                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    isActive ? "bg-black/40" : "bg-black/60"
                  } flex items-center justify-center px-4 sm:px-6 lg:px-8`}
                >
                  <div className="text-center">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                      {slide.title}
                    </h1>
                    {isActive && (
                      <>
                        <p className="text-base md:text-lg max-w-xl text-white mb-6">
                          {slide.description}
                        </p>
                        {slide.type === "video" &&
                        slide.title === "ABOUT BODE LOGISTICS" ? (
                          <Link
                            to="/about"
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold text-sm inline-block"
                          >
                            Learn More
                          </Link>
                        ) : (
                          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold text-sm">
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
        >
          <FaChevronRight />
        </button>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
          <div className="flex justify-center">
            <div
              className="bg-gray-900 border border-white/10 shadow-xl rounded-3xl p-8 w-full max-w-3xl min-h-[320px] flex flex-col justify-center absolute left-1/2 -translate-x-1/2"
              style={{ top: "calc(100% - 160px)" }}
            >
              <div className="flex justify-center gap-4 mb-6">
                {["track", "bodehub"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-5 py-2.5 font-semibold rounded-full text-sm capitalize transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-blue-400 bg-[#1F2937] hover:bg-[#374151] border border-blue-800/20"
                    }`}
                  >
                    {tab === "track" ? "Track & Trace" : "Bode Hub"}
                  </button>
                ))}
              </div>
              <div className="transition-opacity duration-500 min-h-[180px] flex items-center justify-center">
                {activeTab === "track" && (
                  <div className="text-center w-full">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Track Your Shipment
                    </h3>
                    <div className="">
                      <Trackcatch />
                    </div>
                  </div>
                )}
                {activeTab === "bodehub" && (
                  <div className="text-center w-full">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Bode Hub
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      Log in or sign up to Bode Hub to enjoy the full features.
                      Quote, book and ship all over the world, and manage your
                      cargo end-to-end via a single platform.
                    </p>
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300">
                      Get Started with Bode Hub
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Logistics Excellence */}
      <section className="bg-gray-900 py-20 mt-40 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Global Logistics Excellence
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              At Bode Logistics, we redefine global trade with unmatched
              precision and innovation. Our world-class infrastructure spans
              over 50 countries, ensuring your goods move seamlessly from origin
              to destination with cutting-edge technology and expert oversight
              as of July 21, 2025.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src={DigitalFreight}
              alt="Global Logistics Network"
              className="rounded-xl shadow-lg object-cover h-64 md:h-full"
            />
            <div className="flex flex-col justify-center">
              <p className="text-gray-300 leading-relaxed mb-6">
                With a fleet of state-of-the-art vessels, aircraft, and a robust
                land transport network, we deliver reliability at scale. Our
                real-time tracking and AI-driven analytics provide unparalleled
                visibility, empowering businesses to thrive in a dynamic market.
              </p>
              <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300">
                Explore Our Network
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Special Highlights */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-blue-100 mb-4">
              SPECIAL HIGHLIGHTS
            </h2>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              Discover Bode Logistics!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-[#1F2937] rounded-xl shadow-lg overflow-hidden">
              <img
                src={DigitalFreight}
                alt="Digital Freight Platform"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-100 mb-2">
                  myBODE - Your Digital Freight Platform
                </h3>
              </div>
            </div>
            <div className="bg-[#1F2937] rounded-xl shadow-lg overflow-hidden">
              <img
                src={BodeInsights}
                alt="Insights"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-100 mb-2">
                  BODE Insights
                </h3>
              </div>
            </div>
            <div className="bg-[#1F2937] rounded-xl shadow-lg overflow-hidden">
              <img
                src={Gender}
                alt="Diversity"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-100 mb-2">
                  Promoting gender diversity at BODE
                </h3>
              </div>
            </div>
            <div className="bg-[#1F2937] rounded-xl shadow-lg overflow-hidden">
              <img
                src={Studies}
                alt="Case Studies"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-100 mb-2">
                  Case Studies
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovative Solutions Showcase */}
      <section className="bg-[#111827] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Innovative Solutions Showcase
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Revolutionize your supply chain with Bode Logistics' pioneering
              solutions. From sustainable packaging to automated warehousing, we
              integrate the latest advancements to drive efficiency and reduce
              costs as of July 21, 2025.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <p className="text-gray-300 leading-relaxed mb-6">
                Our proprietary logistics platform leverages machine learning to
                optimize routes and predict demand, saving you time and
                resources. Experience a future-ready logistics partner committed
                to sustainability and innovation.
              </p>
              <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300">
                Discover Innovations
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Innovative Logistics Technology"
              className="rounded-xl shadow-lg object-cover h-64 md:h-full"
            />
          </div>
        </div>
      </section>

      {/* Real-Time Market Updates */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Real-Time Market Updates
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Stay ahead with Bode Logistics' live insights as of 08:50 AM WAT,
              July 21, 2025. Our expert analysis covers freight rates, port
              congestion, and emerging trade routes to keep your operations
              competitive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=800&q=80"
              alt="Market Analysis Dashboard"
              className="rounded-xl shadow-lg object-cover h-64 md:h-full"
            />
            <div className="flex flex-col justify-center">
              <p className="text-gray-300 leading-relaxed mb-6">
                Access real-time data dashboards and personalized reports to
                adapt to market shifts instantly. Our team of analysts ensures
                you’re equipped with the knowledge to make informed decisions.
              </p>
              <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300">
                View Live Updates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="bg-[#111827] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Sustainability Commitment
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Bode Logistics is dedicated to a greener future. Our eco-friendly
              initiatives, including carbon-neutral shipping, reduce your
              environmental footprint as of July 21, 2025.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src={Gender}
              alt="Sustainable Logistics Practices"
              className="rounded-xl shadow-lg object-cover h-64 md:h-full"
            />
            <div className="flex flex-col justify-center">
              <p className="text-gray-300 leading-relaxed mb-6">
                We’ve invested in electric fleets, renewable energy warehouses,
                and sustainable packaging solutions. Join us in building a
                logistics ecosystem that prioritizes the planet.
              </p>
              <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300">
                Learn About Sustainability
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Client Portal Access */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Exclusive Client Portal Access
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Unlock a world of control with Bode Hub. Manage shipments, access
              analytics, and connect with our team 24/7 starting today, July 21,
              2025.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src={Studies}
              alt="Client Portal Interface"
              className="rounded-xl shadow-lg object-cover h-64 md:h-full"
            />
            <div className="flex flex-col justify-center">
              <p className="text-gray-300 leading-relaxed mb-6">
                Our secure portal offers real-time updates, custom dashboards,
                and direct support. Elevate your logistics experience with a
                personalized, all-in-one platform.
              </p>
              <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300">
                Access Bode Hub
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSROOM Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-blue-100 mb-12 tracking-tight">
            BODE LOGISTICS NEWSROOM
          </h2>
          <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="News Main"
              className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg"
            />
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
                  Press release
                </span>
                <span className="text-gray-400 text-sm">4/25/2025</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-100 mb-4">
                Bode Logistics signs deal to acquire Borusan Tedarik, expand in
                Turkey
              </h3>
              <p className="text-gray-300 mb-6">
                Bode agrees to share transfer agreement for 100% of Borusan
                Tedarik
              </p>
              <button className="border-2 border-blue-100 text-blue-100 font-semibold px-6 py-2 rounded transition hover:bg-blue-100 hover:text-gray-900">
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="bg-[#1F2937] rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                alt="Interview"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-100 text-gray-900 text-xs font-bold px-3 py-1 rounded">
                    Interview
                  </span>
                  <span className="text-gray-400 text-sm">3/19/2025</span>
                </div>
                <h4 className="text-lg font-bold text-blue-100 mb-2">
                  Building the Future of Supply Chain
                </h4>
              </div>
            </div>
            <div className="bg-[#1F2937] rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80"
                alt="Article"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded">
                    Article
                  </span>
                  <span className="text-gray-400 text-sm">4/2/2025</span>
                </div>
                <h4 className="text-lg font-bold text-blue-100 mb-2">
                  Bode Logistics 2024 CSR Summary Report
                </h4>
              </div>
            </div>
            <div className="bg-[#1F2937] rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                alt="Press Release"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
                    Press release
                  </span>
                  <span className="text-gray-400 text-sm">3/28/2025</span>
                </div>
                <h4 className="text-lg font-bold text-blue-100 mb-2">
                  Bode Logistics Expands Global Air Freight Capacity with WUX
                  (China) to ORD (U.S.) Air Charter
                </h4>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="border-2 border-blue-100 text-blue-100 font-semibold px-8 py-2 rounded transition hover:bg-blue-100 hover:text-gray-900">
              SEE ALL NEWS
            </button>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">JOIN US</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
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

      <Footer />
    </div>
  );
};

export default App;
