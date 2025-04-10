import React from "react";
import '../styles/header.css'; 
import Button from "./Button.jsx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

function Header() {
  return (
    <header className="header">
      <h1>Logo.</h1>
      <nav>
        <ul>
          {["Home", "About", "Services", "Contact"].map((link, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1, color: "#006045" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link to={link === "Home" ? "/" : `/${link.toLowerCase()}`}>{link}</Link>
          </motion.li>
          ))}
        </ul>
      </nav>
      <Button text="Portfolio" onClick={() => alert('Button clicked!')} variant="primary" />
    </header>
  );
}

export default Header;