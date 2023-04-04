import BlastText from "../../components/BlastText/BlastText";
import TextCloud from "../../components/TextCloud/TextCloud";
import "./About.css";

export default function About() {
    const text = "Me, Myself and I";
    const skillsTags = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Angular",
        "Blazor",
        ".NET",
        "SQL",
        "GIT",
        "GITHUB",
        "C#",
        "Python",
        "Linux",
        "OOPS",
    ];

    const skillsOptions = {
        radius: 300,
        maxSpeed: "fast",
        initSpeed: "normal",
        keep: true,
    };

    return (
        <div id="about" className="section-full section-about">
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
                    I'm Highly motivated and skilled software engineer with 2
                    years of experience in developing and implementing software
                    solutions.
                </p>
                <p>
                    Proficient in .NET, Python, React, JavaScript, and SQL.
                    Skilled in problem-solving and teamwork, with a track record
                    of delivering high-quality projects on time and within
                    budget.
                </p>
                <p>
                    Committed to continuous learning and development to stay up
                    to date with the latest industry trends. Seeking a
                    challenging software engineering role to drive innovation
                    and success.
                </p>
            </div>
            <div className="skills-chart">
                <TextCloud tags={skillsTags} options={skillsOptions} />
            </div>
        </div>
    );
}
