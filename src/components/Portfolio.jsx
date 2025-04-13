import React from "react";
import { motion } from "framer-motion";
import "../styles/portfolio.css";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faWordpress, faPhp, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons";


function Portfolio() {
  return (
    <div className="portfolio-section wrapper">
      <h1>Portfolio</h1>
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
        transition={{ type: "spring", stiffness: 200, duration: 1, delay: 1 }}
      >
        <Card 
          title={"Project 1"}
          techUsed={[
            <FontAwesomeIcon icon={faJs} />,
            <FontAwesomeIcon icon={faWordpress} />,
            <FontAwesomeIcon icon={faPhp} />,
            <FontAwesomeIcon icon={faHtml5} />,
            <FontAwesomeIcon icon={faCss3} />,
            
          ]}
          description={"Description of project 1"}
          imageUrl={"https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          link={"#"}
        />
        <Card
          title={"Project 2"}
          techUsed={[
            <FontAwesomeIcon icon={faJs} />,
            <FontAwesomeIcon icon={faWordpress} />,
            <FontAwesomeIcon icon={faPhp} />,
            <FontAwesomeIcon icon={faHtml5} />,
            <FontAwesomeIcon icon={faCss3} />,
            
          ]}
          description={"Description of project 2"}
          imageUrl={"https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          link={"#"}
        />
        <Card
          title={"Project 3"}
          techUsed={[
            <FontAwesomeIcon icon={faJs} />,
            <FontAwesomeIcon icon={faWordpress} />,
            <FontAwesomeIcon icon={faPhp} />,
            <FontAwesomeIcon icon={faHtml5} />,
            <FontAwesomeIcon icon={faCss3} />,
            
          ]}
          description={"Description of project 3"}
          imageUrl={"https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          link={"#"}
        />
        <Card
          title={"Project 3"}
          techUsed={[
            <FontAwesomeIcon icon={faJs} />,
            <FontAwesomeIcon icon={faWordpress} />,
            <FontAwesomeIcon icon={faPhp} />,
            <FontAwesomeIcon icon={faHtml5} />,
            <FontAwesomeIcon icon={faCss3} />,
            
          ]}
          description={"Description of project 3"}
          imageUrl={"https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          link={"#"}
        />
      </motion.div>
      
    </div>
  );
}

export default Portfolio;