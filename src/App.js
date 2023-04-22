import { useState } from "react";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Hamburger from "./components/Hamburger/Hamburger";

import "./App.css";
import Nav from "./pages/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    console.log(isNavOpen);
    return (
        <>
            <Hamburger isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
            <BrowserRouter>
                {isNavOpen ? (
                    <Nav setIsNavOpen={setIsNavOpen} />
                ) : (
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <>
                                    <Home />
                                    <About />
                                    <Projects />
                                    <Contact />
                                </>
                            }
                        />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                )}
            </BrowserRouter>
        </>
    );
}

export default App;
