import { useEffect } from "react";
import TagCloud from "TagCloud";

import "./TextCloud.css";

export default function TextCloud() {
    useEffect(() => {
        return () => {
            const container = ".text-sphere";
            const tags = [
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
            const options = {
                radius: 300,
                maxSpeed: "fast",
                initSpeed: "normal",
                keep: true,
            };
            TagCloud(container, tags, options);
        };
    }, []);

    return <div className="text-sphere"></div>;
}
