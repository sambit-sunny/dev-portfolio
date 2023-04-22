import "./Nav.css";
import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export default function Nav({ isNavOpen, setIsNavOpen }) {
    return (
        <AnimatePresence mode="wait">
            {isNavOpen && (
                <motion.div
                    key="modal"
                    initial={{ y: "100vh", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100vh", opacity: 0 }}
                >
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
                                <div className="link">
                                    <Link
                                        to="/"
                                        onClick={() => {
                                            setIsNavOpen(false);
                                        }}
                                    >
                                        Home
                                    </Link>
                                </div>
                                <div className="link">
                                    <Link
                                        to="/about"
                                        onClick={() => {
                                            setIsNavOpen(false);
                                        }}
                                    >
                                        About
                                    </Link>
                                </div>
                                <div className="link">
                                    <Link
                                        to="/projects"
                                        onClick={() => {
                                            setIsNavOpen(false);
                                        }}
                                    >
                                        Projects
                                    </Link>
                                </div>
                                <div className="link">
                                    <Link
                                        to="/contact"
                                        onClick={() => {
                                            setIsNavOpen(false);
                                        }}
                                    >
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
