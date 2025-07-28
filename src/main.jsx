import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { StrictMode } from "react";
import Login from "./pages/login";
import { useEffect } from "react";
import MouseFollower from "./components/MouseFollower";
import Navbar from "./components/navbar";
import Create from "./pages/create";
import About from "./pages/about";
import Contact from "./pages/contact.jsx";

import Dashboardlayout from "./layouts/dashboardlayout.jsx";
import Dashboardhome from "./pages/dashboard/dashboardhome.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <MouseFollower />
      <Routes>
        {/* dashboard routes */}
        <Route path="/dashboard" element={<Dashboardlayout />}>
          <Route index element={<Dashboardhome />} />
        </Route>

        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
