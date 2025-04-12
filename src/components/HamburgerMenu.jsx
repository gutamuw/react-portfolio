import React, {useState} from "react";
import '../styles/header.css'; 
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import '../styles/hamburger.css';

function HamburgerMenu() {
    const [isOpen, toggleIsOpen] = useState(false);
    return (
        <>
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
              </>
    );
}

export default HamburgerMenu;