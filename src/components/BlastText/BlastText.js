import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function BlastText({ children }) {
    const controls = useAnimationControls();
    const initialControls = useAnimationControls();
    const [isPlaying, setIsPlaying] = useState(false);
    const [ref, inView] = useInView();
    const variants = {
        visible: {
            opacity: 1,
            transition: { duration: 2 },
        },
        hidden: { opacity: 0 },
    };

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

    useEffect(() => {
        if (inView) {
            initialControls.start("visible");
        }
    }, [initialControls, inView]);

    return (
        <motion.span
            ref={ref}
            initial="hidden"
            variants={variants}
            animate={initialControls}
        >
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
        </motion.span>
    );
}
