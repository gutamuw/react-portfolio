import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      };
  
      window.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
  
    const shapes = [
      "M119.3 -107.5C161.8 -76.8 208.4 -38.4 223.9 15.4C239.3 69.3 223.6 138.6 181.1 164.6C138.6 190.6 69.3 173.3 -0.7 174C-70.7 174.7 -141.4 193.4 -166.4 167.4C-191.4 141.4 -170.7 70.7 -158.9 11.8C-147.1 -47.1 -144.3 -94.3 -119.3 -124.9C-94.3 -155.6 -47.1 -169.8 -4.4 -165.4C38.4 -161.1 76.8 -138.2 119.3 -107.5",
      "M150 -100C200 -50 250 0 200 50C150 100 100 150 50 100C0 50 -50 0 -100 -50C-150 -100 -200 -150 -150 -200C-100 -250 -50 -200 0 -150C50 -100 100 -50 150 -100",
      "M100 -150C150 -100 200 -50 150 0C100 50 50 100 0 150C-50 200 -100 150 -150 100C-200 50 -150 0 -100 -50C-50 -100 0 -150 100 -150",
    ];

  return (
    <div className="background">
      <svg id="visual" viewBox="0 0 900 600" width="400" height="400">
        <g transform="translate(424.25624467733644 292.51225300730283)">
          <motion.path
            d={shapes[0]}
            fill="#006045"
            animate={{
              d: shapes,
              translateX: mousePosition.x / 20 - 20,
              translateY: mousePosition.y / 20 - 20,
            }}
            transition={{
              d: {
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              translateX: { stiffness: 300, damping: 15 },
              translateY: {  stiffness: 300, damping: 15 },
            }}
          ></motion.path>
        </g>
      </svg>
    </div>
  );
}

export default AnimatedBackground;