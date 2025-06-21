import React from "react";
import { motion } from "framer-motion";
import "../styles/portfolio.css";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faWordpress, faPhp, faHtml5, faCss3, faNodeJs, faReact} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";


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
            <FontAwesomeIcon icon={faPhp} />,
            <FontAwesomeIcon icon={faJs} />,
            <FontAwesomeIcon icon={faWordpress} />,
            <FontAwesomeIcon icon={faHtml5} />,
            <FontAwesomeIcon icon={faCss3} />,
            
          ]}
          description={"Website project"}
          imageUrl={"/alvkarleby-screenshot.png"}
          link={"https://www.alvkarlebybegravningsbyra.se/"}
          category={"Work"}
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
          category={"Freelance"}
        />
        <Card
          title={"Sandstedts.se"}
          techUsed={[
            <FontAwesomeIcon icon={faPhp} />,
            <FontAwesomeIcon icon={faJs} />,
            <FontAwesomeIcon icon={faWordpress} />,
            <FontAwesomeIcon icon={faHtml5} />,
            <FontAwesomeIcon icon={faCss3} />,
            
          ]}
          description={"Website project"}
          imageUrl={"/sandstedts-screenshot.png"}
          link={"https://www.sandstedt.se/"}
          category={"Work"}
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
          category={"Freelance"}
        />
        <Card
          title={"Profile gallery"}
          techUsed={[
            <FontAwesomeIcon icon={faJs} />,
            <FontAwesomeIcon icon={faHtml5} />,
            <FontAwesomeIcon icon={faCss3} />,
            <FontAwesomeIcon icon={faNodeJs} />,
            
          ]}
          description={"Fetch API"}
          imageUrl={"/profile-gallery-screenshot.JPG"}
          link={"https://github.com/gutamuw/profile-gallery"}
          category={"Personal"}
        />
        <Card
          title={"TheChat"}
          techUsed={[
            <FontAwesomeIcon icon={faJs} />,
            <FontAwesomeIcon icon={faHtml5} />,
            <FontAwesomeIcon icon={faCss3} />,
            <FontAwesomeIcon icon={faDatabase} />,
            <FontAwesomeIcon icon={faNodeJs} />,
          ]}
          description={"API & WebSocket"}
          imageUrl={"/theChat-screenshot.JPG"}
          link={"https://github.com/gutamuw/theChat"}
          category={"Personal"}
        />
        <Card
          title={"Djurappen"}
          techUsed={[
            <FontAwesomeIcon icon={faReact} />,
            <FontAwesomeIcon icon={faHtml5} />,
            <FontAwesomeIcon icon={faCss3} />,
          ]}
          description={"React, API & Framer Motion"}
          imageUrl={"/djurappen.JPG"}
          link={"https://github.com/gutamuw/animalFeeder"}
          category={"Personal"}
        />
        <Card
          title={"Halldoffs.se"}
          techUsed={[
            <FontAwesomeIcon icon={faPhp} />,
            <FontAwesomeIcon icon={faJs} />,
            <FontAwesomeIcon icon={faWordpress} />,
            <FontAwesomeIcon icon={faHtml5} />,
            <FontAwesomeIcon icon={faCss3} />,
            
          ]}
          description={"Website project"}
          imageUrl={"/halldoffs-screenshot.png"}
          link={"https://www.halldoffs.se/"}
          category={"Work"}
        />
      <Card
          title={"What Todo"}
          techUsed={[
            <FontAwesomeIcon icon={faReact} />,
            <FontAwesomeIcon icon={faHtml5} />,
            <FontAwesomeIcon icon={faCss3} />,
          ]}
          description={"React & Framer Motion"}
          imageUrl={"/what-todo.JPG"}
          link={"https://github.com/gutamuw/what-todo"}
          category={"Personal"}
        />
      </motion.div>
      
    </div>
  );
}

export default Portfolio;