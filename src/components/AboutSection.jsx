import "../styles/about.css";
import { motion } from "framer-motion";
import Slider from 'react-infinite-logo-slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faPhp, faWordpress } from '@fortawesome/free-brands-svg-icons';

function AboutSection() {
    return <>
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
        </div>
        <motion.div className="skills-section bento-box"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 200, duration: 1, delay: 1.5 }}>
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
        <motion.div className="education-section bento-box" 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 200, duration: 1, delay: 2 }}>
        <h2>Education</h2>
        <ul>
            <li><strong>Digital Media</strong> - Stockholm University</li>
            <li><strong>Frontend Developer</strong> - Medieinstitutet</li>
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
                blurBorderColor={'#fff'}
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
                    <FontAwesomeIcon icon={faWordpress} title="WordPress" size="3x" />
                </Slider.Slide>
                </Slider>
            </div>
        </motion.div>
        </div>
    </>
}

export default AboutSection;