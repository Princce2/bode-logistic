import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { StrictMode, useEffect } from "react";
import Login from "./pages/login";
import MouseFollower from "./components/MouseFollower";
import Navbar from "./components/navbar";
import Create from "./pages/create";
import About from "./pages/about";
import Dashboardlayout from "./layouts/dashboardlayout.jsx";
import Dashboardhome from "./pages/dashboard/dashboardhome.jsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Track from "./pages/track.jsx";
import Dispatch from "./pages/dispatch.jsx"
import Contact from "./pages/contact.jsx"

const AOSApp = () => {
  useEffect(() => {
    AOS.init({
      offset: 50,
      delay: 100,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <MouseFollower />
        <Routes>
          <Route path="/dashboard" element={<Dashboardlayout />}>
            <Route index element={<Dashboardhome />} />
          </Route>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/create" element={<Create />} />
          <Route path="/about" element={<About />} />
          <Route path="/track" element={<Track />} />
          <Route path="/dispatch" element={<Dispatch />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </I18nextProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <AOSApp />
  </StrictMode>
);
