import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./index.css";
import { StrictMode } from "react";
import Login from "./pages/login";
import MouseFollower from "./components/mousefollower";
import Navbar from "./components/navbar";
import Create from "./pages/create";
import About from "./pages/about";
import Track from "./pages/Track";
import Dispatch from "./pages/dispatch";
import "./i18n";

AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <MouseFollower />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
        <Route path="/track" element={<Track />} />
        <Route path="/dispatch" element={<Dispatch />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
