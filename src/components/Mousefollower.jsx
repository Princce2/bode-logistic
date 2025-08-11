// MouseFollower.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const circleStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,
    pointerEvents: "none",
  };

  return (
    <>
      <motion.div
        className="w-3 h-3 bg-blue-500 rounded-full"
        style={circleStyle}
        animate={{ x: mousePosition.x - 6, y: mousePosition.y - 6 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      <motion.div
        className="w-8 h-8 border border-blue-500 rounded-full"
        style={circleStyle}
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      />
    </>
  );
};

export default MouseFollower;
