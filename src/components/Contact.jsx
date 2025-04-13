import React from "react";
import { motion } from "framer-motion";
import "../styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return <>
       <div className="contact-section wrapper">
        <h1>Connect with me.</h1>
        <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
        <div className="contact-info">
            <a href="mailto:luddeelv@hotmail.com"><FontAwesomeIcon icon={faEnvelope} className="icon" />luddeelv@hotmail.com</a>
            <a href="phone:0767746292"><FontAwesomeIcon icon={faPhone} className="icon" />076-7746292</a>
            <h2>Find me on</h2>
            <div className="social-links">
            <FontAwesomeIcon icon={faGithub} className="icon" />
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            </div>
        </div>
       </div>
    </>
}

export default Contact;