import React from "react";
import { motion } from "framer-motion";
import "../styles/portfolio.css";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faWordpress, faPhp, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons";


function Portfolio() {
  return (
    <div className="portfolio-section">
      <h1>Portfolio.</h1>
      <div>
        <p>
          Here are some of my recent projects that showcase my skills and
          creativity. Click on the images to view the live demos or the source
          code.
        </p>
      </div>
      <motion.div 
        className="portfolio-cards"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, duration: 1, delay: 0.5 }}
      >
        <Card 
          title={"Älvkarleby"}
          techUsed={[
            <FontAwesomeIcon icon={faJs} />,
            <FontAwesomeIcon icon={faWordpress} />,
            <FontAwesomeIcon icon={faPhp} />,
            <FontAwesomeIcon icon={faHtml5} />,
            <FontAwesomeIcon icon={faCss3} />,
            
          ]}
          description={"Website project"}
          imageUrl={"/alvkarleby-screenshot.png"}
          link={"https://www.alvkarlebybegravningsbyra.se/"}
        />
        <Card
          title={"Elagent.com"}
          techUsed={[
            <FontAwesomeIcon icon={faWordpress} />,
            <FontAwesomeIcon icon={faHtml5} />,
            <FontAwesomeIcon icon={faCss3} />,
          ]}
          description={"Website project & SEO"}
          imageUrl={"/elagent-screenshot.png"}
          link={"https://elagent.com/"}
        />
        <Card
          title={"Sandstedts.se"}
          techUsed={[
            <FontAwesomeIcon icon={faJs} />,
            <FontAwesomeIcon icon={faWordpress} />,
            <FontAwesomeIcon icon={faPhp} />,
            <FontAwesomeIcon icon={faHtml5} />,
            <FontAwesomeIcon icon={faCss3} />,
            
          ]}
          description={"Website project"}
          imageUrl={"/sandstedts-screenshot.png"}
          link={"https://www.sandstedt.se/"}
        />
        <Card
          title={"Rogerelverskog.se"}
          techUsed={[
            <FontAwesomeIcon icon={faWordpress} />,
            <FontAwesomeIcon icon={faHtml5} />,
            <FontAwesomeIcon icon={faCss3} />,
            
          ]}
          description={"Website project"}
          imageUrl={"/roger-screenshot.png"}
          link={"https://rogerelverskog.se/"}
        />
        <Card
          title={"Profile gallery"}
          techUsed={[
            <FontAwesomeIcon icon={faJs} />,
            <FontAwesomeIcon icon={faHtml5} />,
            <FontAwesomeIcon icon={faCss3} />,
            
          ]}
          description={"Fetch API"}
          imageUrl={"/profile-gallery-screenshot.JPG"}
          link={"https://github.com/gutamuw/profile-gallery"}
        />
        <Card
          title={"TheChat"}
          techUsed={[
            <FontAwesomeIcon icon={faJs} />,
            <FontAwesomeIcon icon={faHtml5} />,
            <FontAwesomeIcon icon={faCss3} />,
            
          ]}
          description={"API & WebSocket"}
          imageUrl={"/theChat-screenshot.JPG"}
          link={"https://github.com/gutamuw/theChat"}
        />
      </motion.div>
      
    </div>
  );
}

export default Portfolio;