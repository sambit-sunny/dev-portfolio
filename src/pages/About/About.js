import Heading2 from "../../components/Heading2/Heading2";
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
                    <Heading2 sentence={text} />
                </header>
                <p>
                    Ever since my family got a modem internet connection, I've
                    been fascinated by the web and all the endless possibilities
                    that come along with it.
                </p>
                <p>
                    Over the course of my career I've had several opportunities
                    to work in a vast spectrum of web technologies that let me
                    gather a significant amount of experience in a rather short
                    period of time. In the process, I've worked with and learnt
                    from countless amazing and ambitious people.
                </p>
                <p>
                    I currently work as a full stack developer with an
                    insatiable passion for technology
                </p>
            </div>
            <div className="skills-chart">
                <TagCloud skills={skills} />
            </div>
        </div>
    );
}
