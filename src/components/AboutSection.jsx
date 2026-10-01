import "../styles/about.css";
import { motion } from "framer-motion";
import Slider from "react-infinite-logo-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faPhp,
  faWordpress,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { SiMongodb, SiTypescript } from "react-icons/si";

function AboutSection() {
  return (
    <>
      <div className="wrapper">
        <div className="about-section">
          <h1>
            {Array.from("ABOUT ME.").map((letter, index) => (
              <motion.span
                key={index}
                style={{ display: "inline-block", cursoer: "pointer" }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: index * 0.1,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>
          <motion.div>
            <p>
              I'm a fullstack developer focused on building modern web and
              mobile applications with React and React Native. I work across the
              stack with Node.js, ElysiaJS, Express, and MongoDB, with a strong
              focus on creating great user experiences.
            </p>
            <p>
              I started out with WordPress, PHP, and JavaScript before moving
              into the React ecosystem and app development. These days I'm
              exploring headless WordPress and Astro, while continuing to build
              and work across both frontend and backend.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="skills-section bento-box"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            duration: 1,
            delay: 1.5,
          }}
        >
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS/SCSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>React Native</li>
            <li>PHP</li>
            <li>Express.js</li>
            <li>Node</li>
            <li>Elysia</li>
            <li>MongoDB</li>
            <li>Wordpress</li>
            <li>Responsive Design</li>
            <li>Github</li>
            <li>CI/CD</li>
          </ul>
        </motion.div>
        <motion.div
          className="education-section bento-box"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 200, duration: 1, delay: 2 }}
        >
          <h2>Education</h2>
          <ul>
            <li>
              <strong>Digital Media</strong> - Stockholm University
            </li>
            <li>
              <strong>Frontend Developer</strong> - Medieinstitutet
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="media-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 1 }}
        >
          <div className="img-section">
            <motion.img
              src="/me.jpg"
              alt="ludde"
              initial={{ y: 0 }}
              animate={{ y: [-20, 20, -20] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="logo-slider-section">
            <h2>Techniques I Use</h2>
            <Slider
              className="logo-slider"
              width="150px"
              duration={20}
              pauseOnHover={true}
              blurBorders={false}
              blurBorderColor={"#fff"}
            >
              <Slider.Slide>
                <FontAwesomeIcon icon={faHtml5} title="HTML" size="3x" />
              </Slider.Slide>
              <Slider.Slide>
                <FontAwesomeIcon icon={faCss3Alt} title="CSS" size="3x" />
              </Slider.Slide>
              <Slider.Slide>
                <FontAwesomeIcon icon={faJs} title="JavaScript" size="3x" />
              </Slider.Slide>
              <Slider.Slide>
                <FontAwesomeIcon icon={faReact} title="React" size="3x" />
              </Slider.Slide>
              <Slider.Slide>
                <FontAwesomeIcon icon={faPhp} title="PHP" size="3x" />
              </Slider.Slide>
              <Slider.Slide>
                <FontAwesomeIcon
                  icon={faWordpress}
                  title="WordPress"
                  size="3x"
                />
              </Slider.Slide>
              <Slider.Slide>
                <FontAwesomeIcon icon={faNodeJs} title="Node.js" size="3x" />
              </Slider.Slide>
              <Slider.Slide>
                <SiMongodb size={"40px"} />
              </Slider.Slide>
              <Slider.Slide>
                <SiTypescript size={"40px"} />
              </Slider.Slide>
            </Slider>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default AboutSection;
