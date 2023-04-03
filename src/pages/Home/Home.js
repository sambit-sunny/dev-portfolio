import BlastText from "../../components/BlastText/BlastText";

import "./Home.css";

export default function Home() {
    const sentence = "Hi, I'm Milind, Web Developer";
    const title = "Full Stack Developer";

    return (
        <div id="home" class="section-wrapper section-full">
            <div class="text-zone">
                <h1 class="heading" aria-label={sentence}>
                    {sentence.split(",").map((phrase, index) => (
                        <>
                            {phrase.split("").map((letter, index) => (
                                <BlastText
                                    aria-hidden="true"
                                    key={`phrase${index}`}
                                >
                                    {letter}
                                </BlastText>
                            ))}
                            <BlastText aria-hidden="true" key={`comma${index}`}>
                                ,
                            </BlastText>
                            <br key={`break${index}`} />
                        </>
                    ))}
                </h1>
                <p class="gray-text">{title}</p>
                <a class="contact" rel="contact" href="#contact">
                    Contact me!
                </a>
            </div>
        </div>
    );
}
