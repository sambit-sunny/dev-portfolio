import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";

import "./Home.css";

export default function Home() {
    const sentence = "Hi,I'm Milind,Web Developer";
    const title = "Full Stack Developer";

    return (
        <div id="home" className="section-wrapper section-full">
            <div className="text-zone">
                <Heading sentence={sentence} />
                <p className="gray-text">{title}</p>
                <Button title="Contact me!" rel="contact" href="#contact" />
            </div>
        </div>
    );
}
