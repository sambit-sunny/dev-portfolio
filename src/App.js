import { useState } from "react";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Hamburger from "./components/Hamburger/Hamburger";

import "./App.css";
import Nav from "./pages/Nav/Nav";

function App() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    console.log(isNavOpen);
    return (
        <>
            <Hamburger isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
            {isNavOpen ? (
                <Nav />
            ) : (
                <>
                    <Home />
                    <About />
                    <Projects />
                    <Contact />
                </>
            )}
        </>
    );
}

export default App;
