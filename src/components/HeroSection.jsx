import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/hero.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-section">
      <div
        className="hero-content"
      >
        <motion.h3 
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 200, duration: 1, delay: 1.5 }}>
        Ludvig Elverskog</motion.h3>
        <h1>
          {Array.from("FRONTEND/UX").map((letter, index) => (
            <motion.span
              key={index}
              style={{ display: "inline-block", cursoer: "pointer" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: index * 0.1,
              }}
            >
              {letter === "" ? "\u00A0" : letter}
            </motion.span>
          ))}
          <motion.span
            className="dot"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 1,
            }}
          >
            .
          </motion.span>
        </h1>
      </div>
      <motion.div
        className="social-icons"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, duration: 1, delay: 2 }}
      >
        <a href="https://github.com/gutamuw" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/ludde-elverskog/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://www.instagram.com/ludvigelverskog/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </motion.div>
      <Link to="/about">
      <motion.div
        className="scroll-down"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, duration: 1, delay: 2.5 }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </motion.div>
      </Link>
    </div>
  );
}

export default HeroSection;
