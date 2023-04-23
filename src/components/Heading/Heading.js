import { motion } from "framer-motion";
import BlastText from "../../components/BlastText/BlastText";
import Logo from "../Logo/Logo";

export default function Heading({ sentence }) {
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

    return (
        <h1 className="heading" aria-label={sentence}>
            <motion.div variants={container} initial="hidden" animate="show">
                {sentence.split(",").map((phrase, index) => (
                    <>
                        {phrase.split("").map((letter, index) => {
                            if (letter === " ") {
                                return <span>&nbsp;</span>;
                            } else {
                                if (letter === "M") {
                                    return (
                                        <motion.span
                                            animate={{
                                                opacity: 1,
                                                scale: [1, 2, 2, 1, 1],
                                                rotate: [0, 0, 270, 270, 0],
                                            }}
                                        >
                                            <Logo key={`phrase${index}`} />
                                        </motion.span>
                                    );
                                } else {
                                    return (
                                        <motion.span variants={item}>
                                            <BlastText
                                                aria-hidden="true"
                                                key={`phrase${index}`}
                                            >
                                                {letter}
                                            </BlastText>
                                        </motion.span>
                                    );
                                }
                            }
                        })}
                        {index + 1 !== sentence.split(",").length && (
                            <motion.span variants={item}>
                                <BlastText
                                    aria-hidden="true"
                                    key={`comma${index}`}
                                >
                                    ,
                                </BlastText>
                            </motion.span>
                        )}
                        <br key={`break${index}`} />
                    </>
                ))}
            </motion.div>
        </h1>
    );
}
