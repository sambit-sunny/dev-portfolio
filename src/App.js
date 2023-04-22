import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Hamburger from "./components/Hamburger/Hamburger";
import Nav from "./pages/Nav/Nav";

import "./App.css";

function App() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
            <BrowserRouter>
                <Hamburger isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
                {isNavOpen ? (
                    <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
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
