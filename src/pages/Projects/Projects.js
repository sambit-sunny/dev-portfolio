import BlastText from "../../components/BlastText/BlastText";
import Button from "../../components/Button/Button";

import "./Projects.css";

export default function Projects() {
    const text = "My Portfolio";

    return (
        <div id="projects" className="section-full section-work">
            <div className="text-zone">
                <header>
                    <h2 aria-label={text}>
                        {text.split("").map((letter, index) => {
                            if (letter === " ") {
                                return <span>&nbsp;</span>;
                            } else {
                                return (
                                    <BlastText aria-hidden="true" key={index}>
                                        {letter}
                                    </BlastText>
                                );
                            }
                        })}
                    </h2>
                </header>
                <p>
                    A collection of recent projects chosen by me. I've done
                    these with different technologies that I'm passionate about.
                    <br />
                    Interested to see some more? Visit{" "}
                    <a
                        rel="noopener noreferrer"
                        href="https://github.com/milind452"
                        target="_blank"
                    >
                        my github
                    </a>{" "}
                    page
                </p>
                <Button title="See More!" rel="projects" href="#projects" />
            </div>
        </div>
    );
}
