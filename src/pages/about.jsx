import Navbar from "../components/navbar.jsx";
import AboutImg from "../images/aboutimg.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-900">
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

      <div className="w-full bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-blue-500">About Bode Logistics</h1>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
              <p className="text-lg text-gray-400">
                Bode Logistics is a trusted logistics and supply chain solutions provider committed
                to delivering reliable, efficient, and innovative services to businesses across the globe.
                From freight forwarding and warehousing to last-mile delivery, we streamline the movement
                of goods with precision and care.
              </p>
            </section>

            <section className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                <p className="text-lg text-gray-400">
                  To simplify global logistics by offering fast, transparent, and customer-centric
                  solutions that help businesses grow and thrive.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
                <p className="text-lg text-gray-400">
                  To become a leading logistics partner known for excellence, integrity,
                  and technological innovation.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2 text-lg">
                <li>Freight Forwarding (Air, Sea, and Land)</li>
                <li>Customs Clearance & Compliance</li>
                <li>Warehousing & Distribution</li>
                <li>E-commerce Fulfillment</li>
                <li>Last-Mile Delivery</li>
                <li>Supply Chain Management Consulting</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
              <div className="grid sm:grid-cols-2 gap-6 text-gray-700 text-lg">
                <div>
                  <h3 className="font-bold text-blue-500">Experienced Team</h3>
                  <p className="text-gray-400">Decades of combined logistics expertise.</p>
                </div>
                <div>
                  <h3 className="font-bold text-blue-500">Technology-Driven</h3>
                  <p className="text-gray-400">Real-time tracking and inventory management tools.</p>
                </div>
                <div>
                  <h3 className="font-bold text-blue-500">Customer-Focused</h3>
                  <p className="text-gray-400">Tailored solutions and dedicated support.</p>
                </div>
                <div>
                  <h3 className="font-bold text-blue-500">Global Network</h3>
                  <p className="text-gray-400">Strong international partnerships for smooth cross-border shipping.</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
              <p className="text-lg text-gray-400">
                Founded in 20XX, Bode Logistics began with a single truck and a bold vision: to transform
                logistics in Africa and beyond. Today, we proudly serve hundreds of clients across
                industries including retail, agriculture, manufacturing, and e-commerce.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2 text-lg">
                <li><strong className="text-gray-600">Reliability:</strong> We keep our promises and deliver on time.</li>
                <li><strong className="text-gray-600">Innovation:</strong> Embracing technology to stay ahead.</li>
                <li><strong className="text-gray-600">Integrity:</strong> Honesty and transparency in every shipment.</li>
                <li><strong className="text-gray-600">Sustainability:</strong> Committed to eco-friendly logistics solutions.</li>
              </ul>
            </section>

            <div className="text-center mt-12">
              <h2 className="text-2xl font-semibold mb-4 text-blue-500">Let’s Move Forward Together</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                At Bode Logistics, we believe logistics is more than just moving goods —
                it’s about connecting people, markets, and possibilities. Join us on the journey.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default About;
