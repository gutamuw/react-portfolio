import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/header.css'; 
import Button from "./Button.jsx";
import {  motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import HamburgerMenu from "./HamburgerMenu.jsx";

function Header() {
  return (
    <header className="header">
      <h1>Elverskog.</h1>
      <nav>
        <ul>
          {["Home", "About", "Portfolio", "Contact"].map((link, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1, color: "#006045" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <NavLink 
            to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
            className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link}
            </NavLink>
          </motion.li>
          ))}
        </ul>
      </nav>
      <Button
  text={
    <>
      <FontAwesomeIcon icon={faDownload} style={{ marginRight: "0.5rem" }} />
      Download Resume
    </>
  }
  onClick={() => window.open("/CV2025.pdf", "_blank")}
  variant="primary"
/>
    <HamburgerMenu />
    </header>
  );
}

export default Header;