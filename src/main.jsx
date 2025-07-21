import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { StrictMode } from "react";
import Login from "./pages/login"
import { useEffect } from "react";
import MouseFollower from "./components/MouseFollower";
import Navbar from "./components/navbar";
import Create from "./pages/create";
import About from "./pages/about";

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
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
