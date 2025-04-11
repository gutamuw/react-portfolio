import React from "react";
import "../styles/about.css";
import { motion } from "framer-motion";

function AboutSection() {
    return <>
        <div className="wrapper">
        <motion.div className="about-section bento-box"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 200, duration: 1, delay: 0.5 }}>
            <h1>About Me</h1>
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
        transition={{ type: "spring", stiffness: 200, duration: 1, delay: 1.5 }}>
            <h2>Projects</h2>
            <ul>
                <li>Portfolio Website</li>
                <li>Weather App</li>
                <li>Todo List Application</li>
                <li>E-commerce Website</li>
            </ul>
        </motion.div>    
        <motion.div className="img-section"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 3, delay: 2 }}>
            <motion.img src="/src/assets/ludde-transparent(1).png" alt="ludde" 
            initial={{ y: 0 }}
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
        </motion.div>
        </div>
    </>
}

export default AboutSection;