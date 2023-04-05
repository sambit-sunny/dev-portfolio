import BlastText from "../../components/BlastText/BlastText";
import Button from "../../components/Button/Button";

import "./Home.css";

export default function Home() {
    const sentence = "Hi,I'm Milind,Web Developer";
    const title = "Full Stack Developer";

    return (
        <div id="home" class="section-wrapper section-full">
            <div class="text-zone">
                <h1 class="heading" aria-label={sentence}>
                    {sentence.split(",").map((phrase, index) => (
                        <>
                            {phrase.split("").map((letter, index) => {
                                if (letter === " ") {
                                    return <span>&nbsp;</span>;
                                } else {
                                    return (
                                        <BlastText
                                            aria-hidden="true"
                                            key={`phrase${index}`}
                                        >
                                            {letter}
                                        </BlastText>
                                    );
                                }
                            })}
                            <BlastText aria-hidden="true" key={`comma${index}`}>
                                ,
                            </BlastText>
                            <br key={`break${index}`} />
                        </>
                    ))}
                </h1>
                <p class="gray-text">{title}</p>
                <Button title="Contact me!" rel="contact" href="#contact" />
            </div>
        </div>
    );
}
