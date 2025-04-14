import React from "react";
import "../styles/card.css";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function Card({ title, description, techUsed, imageUrl, link }) {
  return (
    <motion.div className="card" whileTap={{ scale: 0.95 }}>
      <div className="card-image-wrapper">
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="card-gradient-overlay"></div>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {techUsed.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
          <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
        </a>
      </div>
    </motion.div>
  );
}

export default Card;