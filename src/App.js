import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";

import "./App.css";
import Hamburger from "./components/Hamburger/Hamburger";

function App() {
    return (
        <>
            <Hamburger />
            <Home />
            <About />
            <Projects />
            <Contact />
        </>
    );
}

export default App;
