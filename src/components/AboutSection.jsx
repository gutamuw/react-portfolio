import React from "react";
import "../styles/about.css";
import { motion } from "framer-motion";
import Slider from 'react-infinite-logo-slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faPhp, faWordpress } from '@fortawesome/free-brands-svg-icons';

function AboutSection() {
    return <>
        <div className="wrapper">
        <motion.div className="about-section"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 200, duration: 1, delay: 0.5 }}>
            <h1>About Me.</h1>
            <p>
                I am a passionate frontend developer with a keen interest in creating
                user-friendly and visually appealing web applications. My goal is to
                deliver high-quality code and enhance user experiences through
                innovative design and functionality.
            </p>
            <p>
                With a strong foundation in HTML, CSS, and JavaScript, I am always eager
                to learn new technologies and frameworks to stay up-to-date with the
                latest trends in web development.
            </p>
        </motion.div>
        <motion.div className="skills-section bento-box"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 200, duration: 1, delay: 1 }}>
            <h2>Skills</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>PHP</li>
                <li>Wordpress</li>
                <li>Responsive Design</li>
                <li>Version Control (Git)</li>
            </ul>
        </motion.div>
        <motion.div className="projects-section bento-box"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, duration: 1, delay: 2 }}>
            <h2>Projects</h2>
            <ul>
                <li>Portfolio Website</li>
                <li>Weather App</li>
                <li>Todo List Application</li>
                <li>E-commerce Website</li>
            </ul>
        </motion.div>
        <motion.div className="education-section bento-box" 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 200, duration: 1, delay: 1.5 }}>
        <h2>Education</h2>
        <ul>
            <li>Portfolio Website</li>
            <li>Weather App</li>
            <li>Todo List Application</li>
        </ul>
        </motion.div>    
        <motion.div className="img-section"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 3, delay: 2.5 }}>
            <motion.img src="/src/assets/ludde-transparent(1).png" alt="ludde" 
            initial={{ y: 0 }}
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
        </motion.div>
        <div className="logo-slider-section">
    <h2>Techniques I Use</h2>
    <Slider className="logo-slider"
    width="150px"
    duration={20}
    pauseOnHover={true}
    blurBorders={false}
    blurBorderColor={'#fff'}>
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
            <FontAwesomeIcon icon={faWordpress} title="WordPress" size="3x" />
        </Slider.Slide>
    </Slider>
</div>
        </div>
    </>
}

export default AboutSection;