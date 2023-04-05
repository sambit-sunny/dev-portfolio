import BlastText from "../../components/BlastText/BlastText";
import TagCloud from "../../components/TagCloud/TagCloud";
import "./About.css";

export default function About() {
    const text = "About Me";

    const skills = [
        { href: "#git_", title: "Git" },
        { href: "#html_", title: "HTML" },
        { href: "#react_", title: "React" },
        { href: "#python_", title: "Python" },
        { href: "#sql_", title: "SQL" },
        { href: "#css_", title: "CSS" },
        { href: "#js_", title: "JavaScript" },
        { href: "#dotnet_", title: ".NET" },
        { href: "#blazor_", title: "Blazor" },
        { href: "#angular_", title: "Angular" },
        { href: "#csharp_", title: "C#" },
        { href: "#azure_", title: "Azure" },
        { href: "#web-development_", title: "Web Development" },
        { href: "#front-end", title: "Front End" },
        { href: "#solid-principles_", title: "SOLID" },
        { href: "#api_", title: "API" },
    ];

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
                <TagCloud skills={skills} />
            </div>
        </div>
    );
}
