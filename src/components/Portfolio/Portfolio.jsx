import { motion } from "framer-motion";
import "../../styles/portfolio.css";
import Card from "../Card";
import { allPortfolioData } from "./constants";

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
        {allPortfolioData.map((data, i) => (
          <Card
            key={i}
            title={data.title}
            description={data.description}
            imageUrl={data.imageUrl}
            category={data.category}
            link={data.link}
            techUsed={data.techUsed}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Portfolio;
