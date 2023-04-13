import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import BlastText from "../../components/BlastText/BlastText";

export default function Heading2({ sentence }) {
    const controls = useAnimationControls();
    const [ref, inView] = useInView();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, scale: 0.3 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                    type: "spring",
                    damping: 4,
                    stiffness: 100,
                    restDelta: 0.001,
                },
            },
        },
    };

    useEffect(() => {
        if (inView) {
            controls.start("show");
        }
    }, [controls, inView]);

    return (
        <h2 aria-label={sentence}>
            <motion.div
                ref={ref}
                variants={container}
                initial="hidden"
                animate={controls}
            >
                {sentence.split("").map((letter, index) => {
                    if (letter === " ") {
                        return <span>&nbsp;</span>;
                    } else {
                        return (
                            <motion.span variants={item}>
                                <BlastText aria-hidden="true" key={index}>
                                    {letter}
                                </BlastText>
                            </motion.span>
                        );
                    }
                })}
            </motion.div>
        </h2>
    );
}
