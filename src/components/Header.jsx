import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import '../styles/header.css'; 
import Button from "./Button.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isOpen, toggleIsOpen] = useState(false);

  return (
    <header className="header">
      <h1>Logo.</h1>
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
    <div className={`hamburger ${isOpen ? "active" : "" }`} onClick={() => toggleIsOpen(!isOpen)}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>
      <AnimatePresence>
      {isOpen && (
        <motion.div 
        className="dropdown-menu"
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -200 }}
        transition={{ duration: 0.3 }}>
          {["Home", "About", "Portfolio", "Contact"].map((link, index) => (
            <Link key={index} to={link === "Home" ? "/" : `/${link.toLowerCase()}`} onClick={() => toggleIsOpen(false)}>
              {link}
            </Link>
          ))}
          
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
}

export default Header;