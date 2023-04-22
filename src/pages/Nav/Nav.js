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
                                <motion.div
                                    initial={{ y: "100vh", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.3,
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    }}
                                >
                                    <a
                                        rel="noreferrer"
                                        href="https://www.linkedin.com/in/milind452"
                                        target="_blank"
                                    >
                                        <FaLinkedin />
                                    </a>
                                </motion.div>
                                <motion.div
                                    initial={{ y: "100vh", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.4,
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    }}
                                >
                                    <a href="mailto:mohapatra.milind@gmail.com">
                                        <FaEnvelope />
                                    </a>
                                </motion.div>
                                <motion.div
                                    initial={{ y: "100vh", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.5,
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    }}
                                >
                                    <a
                                        rel="noreferrer"
                                        href="https://github.com/milind452"
                                        target="_blank"
                                    >
                                        <FaGithub />
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                        <div className="links-wrapper">
                            <div className="links">
                                <motion.div
                                    className="link"
                                    initial={{ x: "100vh", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.3,
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    }}
                                >
                                    <Link
                                        to="/"
                                        onClick={() => {
                                            setIsNavOpen(false);
                                        }}
                                    >
                                        Home
                                    </Link>
                                </motion.div>
                                <motion.div
                                    className="link"
                                    initial={{ x: "100vh", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.4,
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    }}
                                >
                                    <Link
                                        to="/about"
                                        onClick={() => {
                                            setIsNavOpen(false);
                                        }}
                                    >
                                        About
                                    </Link>
                                </motion.div>
                                <motion.div
                                    className="link"
                                    initial={{ x: "100vh", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.5,
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    }}
                                >
                                    <Link
                                        to="/projects"
                                        onClick={() => {
                                            setIsNavOpen(false);
                                        }}
                                    >
                                        Projects
                                    </Link>
                                </motion.div>
                                <motion.div
                                    className="link"
                                    initial={{ x: "100vh", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.6,
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    }}
                                >
                                    <Link
                                        to="/contact"
                                        onClick={() => {
                                            setIsNavOpen(false);
                                        }}
                                    >
                                        Contact
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
