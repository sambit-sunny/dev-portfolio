// import styled from "styled-components";
import "./Home.css";

export default function Home() {
    const sentence = "Hi, I'm Milind, Web Developer";

    return (
        <div id="home" class="wrapper">
            <div class="container">
                <h1 class="heading" aria-label={sentence}>
                    {sentence.split(",").map((phrase, index) => (
                        <>
                            {phrase.split("").map((letter, index) => (
                                <span aria-hidden="true" key={`phrase${index}`}>
                                    {letter}
                                </span>
                            ))}
                            <span aria-hidden="true" key={`comma${index}`}>
                                ,
                            </span>
                            <br key={`break${index}`} />
                        </>
                    ))}
                </h1>
                <p class="title">Full Stack Developer</p>
                <a class="contact" rel="contact" href="#contact">
                    Contact me!
                </a>
            </div>
        </div>
    );
}
