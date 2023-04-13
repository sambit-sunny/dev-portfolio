import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Heading2 from "../../components/Heading2/Heading2";
import Link from "../../components/Link/Link";

import "./Projects.css";

export default function Projects() {
    const text = "My Portfolio";

    const projects = [
        {
            id: 1,
            link: "https://milind452-react-moviedb.netlify.app/",
            imgSrc: "https://play-lh.googleusercontent.com/IO3niAyss5tFXAQP176P0Jk5rg_A_hfKPNqzC4gb15WjLPjo5I-f7oIZ9Dqxw2wPBAg",
            imgAlt: "Movie Tracking App",
            title: "Movie DB",
        },
        {
            id: 2,
            link: "https://milind452.github.io/oreo/",
            imgSrc: "https://apprecs.org/gp/images/app-icons/300/8a/io.tinbits.memorigi.jpg",
            imgAlt: "Project Management App",
            title: "Oreo",
        },
        {
            id: 3,
            link: "https://milind452.github.io/my-reads/",
            imgSrc: "https://play-lh.googleusercontent.com/6l3serA9ZbmHZxFYbISeSn0lmRAQqP2nyUDEuBtrUeI_M6umB48ebyP3Dci2k919SRJE",
            imgAlt: "Book Tracking App",
            title: "My Reads",
        },
        {
            id: 4,
            link: "https://milind452.github.io/hawking-tribute/",
            imgSrc: "https://i.guim.co.uk/img/media/289436add9165a86fd34cc60616e77e6e124aef5/0_63_3504_2102/master/3504.jpg?width=620&quality=85&auto=format&fit=max&s=797664405269816e9b1b1b2572024956",
            imgAlt: "Tribute Page for Stephen Hawking",
            title: "Tribute Page",
        },
        {
            id: 5,
            link: "https://milind452.github.io/js-documentation-page/",
            imgSrc: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png",
            imgAlt: "Technical Documentation of JavaScript",
            title: "JS Documentation",
        },
        {
            id: 6,
            link: "https://milind452.github.io/survey-form/",
            imgSrc: "https://as1.ftcdn.net/jpg/01/62/71/42/500_F_162714284_a1pESgqq4Rr4r7YAehTMHjJ6nResVeXw.jpg",
            imgAlt: "Survey Form",
            title: "Survey Form",
        },
    ];

    return (
        <div id="projects">
            <div className="section-full section-work">
                <div className="text-zone">
                    <header>
                        <Heading2 sentence={text} />
                    </header>
                    <p>
                        A collection of recent projects chosen by me. I've done
                        these with different technologies that I'm passionate
                        about.
                        <br />
                        Interested to see some more? Visit{" "}
                        <Link
                            href={"https://github.com/milind452"}
                            content={"my github"}
                        />{" "}
                        page
                    </p>
                    <Button title="See More!" rel="projects" href="#projects" />
                </div>
            </div>
            <div className="projects-section">
                <div className="projects-details">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            link={project.link}
                            imgSrc={project.imgSrc}
                            imgAlt={project.imgAlt}
                            title={project.title}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
