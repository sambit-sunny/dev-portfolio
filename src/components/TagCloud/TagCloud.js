import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { TagCanvas } from "jquery-tagcanvas";

export default function TagCloud({ skills }) {
    useEffect(() => {
        const cloud = window.TagCanvas;
        const tagCanvasOptions = {
            textColour: "#08fdd8",
            outlineThickness: 0.5,
            outlineColour: "#fe0853",
            maxSpeed: 0.03,
            freezeActive: true,
            shuffleTags: true,
            shape: "sphere",
            zoom: 0.9,
            wheelZoom: false,
            noSelect: true,
            textFont: null,
            freezeDecel: true,
            fadeIn: 3000,
            initial: [0.3, -0.1],
            depth: 1.1,
            pinchZoom: true,
        };
        try {
            cloud.Start("canvas", "taglist", tagCanvasOptions);
        } catch (e) {
            console.log("Canvas error.");
            console.log(e);
        }
    }, []);

    return (
        <div id="canvas-container" className="container">
            <canvas
                id="canvas"
                width="820"
                height="600"
                style={{
                    maxWidth: "1000px",
                    width: "100%",
                    zIndex: "99",
                    position: "relative",
                    margin: "0 auto",
                }}
                className="to-fade-in fast-anim"
            ></canvas>
            <div id="taglist" style={{ display: "none" }}>
                <ul>
                    {skills.map((skill) => (
                        <li key={skill.title}>
                            <a href={skill.href}>{skill.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
