import "./Nav.css";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Nav() {
    return (
        <div id="nav">
            <div className="icons-wrapper">
                <div className="icons">
                    <FaLinkedin />
                    <FaEnvelope />
                    <FaGithub />
                </div>
            </div>
            <div className="links-wrapper">
                <div className="links">
                    <div className="link">Home</div>
                    <div className="link">About</div>
                    <div className="link">Projects</div>
                    <div className="link">Contact</div>
                </div>
            </div>
        </div>
    );
}
