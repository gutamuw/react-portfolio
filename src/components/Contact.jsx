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
                <a href="https://github.com/gutamuw" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/ludde-elverskog/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a>
                <a href="https://www.instagram.com/ludvigelverskog/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                </a>
            </div>
        </div>
       </div>
    </>
}

export default Contact;