import { AnimatePresence, motion } from "framer-motion";
import "../../styles/portfolio.css";
import Card from "../Card";
import { allPortfolioData, categories } from "./constants";
import { useState } from "react";

function Portfolio() {
  const [currentFilter, setFilter] = useState();

  const filteredProjects = allPortfolioData.filter(
    (data) => data.category === currentFilter,
  );

  const projects = currentFilter ? filteredProjects : allPortfolioData;

  const filterOptions = [
    {
      category: categories.WORK,
      filter: categories.WORK,
    },
    {
      category: categories.FREELANCE,
      filter: categories.FREELANCE,
    },
    {
      category: categories.INTERNSHIP,
      filter: categories.INTERNSHIP,
    },
    {
      category: categories.PERSONAL,
      filter: categories.PERSONAL,
    },
    {
      category: "All",
      filter: "",
    },
  ];

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

      <div className="segmented-controls">
        {filterOptions.map((category, i) => (
          <div
            key={i}
            className={
              (currentFilter ?? "") === category.filter ? "active" : ""
            }
            onClick={() => setFilter(category.filter)}
          >
            {category.category}
          </div>
        ))}
      </div>

      <div className="portfolio-cards">
        <AnimatePresence>
          {projects.map((data, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card
                title={data.title}
                description={data.description}
                imageUrl={data.imageUrl}
                category={data.category}
                link={data.link}
                techUsed={data.techUsed}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Portfolio;
