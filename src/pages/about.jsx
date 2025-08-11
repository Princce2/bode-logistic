import Navbar from "../components/navbar.jsx";
import AboutImg from "../images/aboutimg.jpeg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../components/footer.jsx";
import "../i18n";

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
            {t("about.title")}
          </h1>
          <p
            className="text-lg sm:text-xl font-semibold text-gray-300 mt-2 text-left"
            data-aos="fade-left"
            data-aos-delay="700"
          >
            {t("about.subtitle")}
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
            {t("about.pageTitle")}
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
              {t("about.whoWeAre")}
            </h2>
            <p
              className="text-base sm:text-lg text-gray-400"
              data-aos="fade-left"
              data-aos-delay="1400"
            >
              {t("about.whoWeAreDescription")}
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
                {t("about.ourMission")}
              </h2>
              <p
                className="text-base sm:text-lg text-gray-400"
                data-aos="fade-left"
                data-aos-delay="1800"
              >
                {t("about.ourMissionDescription")}
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="1600">
              <h2
                className="text-xl sm:text-2xl font-semibold mb-2"
                data-aos="fade-right"
                data-aos-delay="1700"
              >
                {t("about.ourVision")}
              </h2>
              <p
                className="text-base sm:text-lg text-gray-400"
                data-aos="fade-left"
                data-aos-delay="1800"
              >
                {t("about.ourVisionDescription")}
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
              {t("about.whatWeDo")}
            </h2>
            <ul
              className="list-disc list-inside text-gray-400 space-y-2 text-base sm:text-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="2100"
            >
              <li data-aos="fade-right" data-aos-delay="2200">
                {t("about.freightForwarding")}
              </li>
              <li data-aos="fade-left" data-aos-delay="2300">
                {t("about.customsClearance")}
              </li>
              <li data-aos="fade-right" data-aos-delay="2400">
                {t("about.warehousing")}
              </li>
              <li data-aos="fade-left" data-aos-delay="2500">
                {t("about.ecommerceFulfillment")}
              </li>
              <li data-aos="fade-right" data-aos-delay="2600">
                {t("about.lastMileDelivery")}
              </li>
              <li data-aos="fade-left" data-aos-delay="2700">
                {t("about.supplyChainConsulting")}
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
              {t("about.whyChooseUs")}
            </h2>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-gray-700 text-base sm:text-lg overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay="3000"
            >
              <div data-aos="fade-right" data-aos-delay="3100">
                <h3 className="font-bold text-blue-500">{t("about.experiencedTeam")}</h3>
                <p className="text-gray-400">
                  {t("about.experiencedTeamDescription")}
                </p>
              </div>
              <div data-aos="fade-left" data-aos-delay="3200">
                <h3 className="font-bold text-blue-500">{t("about.technologyDriven")}</h3>
                <p className="text-gray-400">
                  {t("about.technologyDrivenDescription")}
                </p>
              </div>
              <div data-aos="fade-right" data-aos-delay="3300">
                <h3 className="font-bold text-blue-500">{t("about.customerFocused")}</h3>
                <p className="text-gray-400">
                  {t("about.customerFocusedDescription")}
                </p>
              </div>
              <div data-aos="fade-left" data-aos-delay="3400">
                <h3 className="font-bold text-blue-500">{t("about.globalNetwork")}</h3>
                <p className="text-gray-400">
                  {t("about.globalNetworkDescription")}
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
              {t("about.ourStory")}
            </h2>
            <p
              className="text-base sm:text-lg text-gray-400"
              data-aos="fade-left"
              data-aos-delay="3700"
            >
              {t("about.ourStoryDescription")}
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
              {t("about.ourValues")}
            </h2>
            <ul
              className="list-disc list-inside text-gray-400 space-y-2 text-base sm:text-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="4000"
            >
              <li data-aos="fade-right" data-aos-delay="4100">
                <strong className="text-gray-600">{t("about.reliability")}</strong> {t("about.reliabilityDescription")}
              </li>
              <li data-aos="fade-left" data-aos-delay="4200">
                <strong className="text-gray-600">{t("about.innovation")}</strong> {t("about.innovationDescription")}
              </li>
              <li data-aos="fade-right" data-aos-delay="4300">
                <strong className="text-gray-600">{t("about.integrity")}</strong> {t("about.integrityDescription")}
              </li>
              <li data-aos="fade-left" data-aos-delay="4400">
                <strong className="text-gray-600">{t("about.sustainability")}</strong>{" "}
                {t("about.sustainabilityDescription")}
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
              {t("about.moveForwardTogether")}
            </h2>
            <p
              className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto"
              data-aos="fade-left"
              data-aos-delay="4700"
            >
              {t("about.moveForwardDescription")}
            </p>
          </div>
        </div>
      </div>
      <Footer data-aos="fade-up" data-aos-delay="4800" />
    </div>
  );
};

export default About;
