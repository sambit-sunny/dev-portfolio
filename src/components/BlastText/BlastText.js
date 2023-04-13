import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

export default function BlastText({ children }) {
    const controls = useAnimationControls();
    const [isPlaying, setIsPlaying] = useState(false);

    const rubberBand = () => {
        controls.start({
            transform: [
                "scale(1, 1)",
                "scale(1.4, 0.55)",
                "scale(.75, 1.25)",
                "scale(1.25, 0.85)",
                "scale(0.9, 1.05)",
                "scale(1, 1)",
            ],
            transition: {
                times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
                duration: 0.8,
            },
        });
        setIsPlaying(true);
    };

    return (
        <motion.span
            animate={controls}
            onAnimationComplete={() => setIsPlaying(false)}
            onMouseOver={() => {
                if (!isPlaying) {
                    rubberBand();
                }
            }}
        >
            {children}
        </motion.span>
    );
}
