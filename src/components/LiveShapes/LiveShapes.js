import { useRef, useEffect } from "react";
import "./LiveShapes.css";

export default function LiveShapes() {
    const wrapper = useRef();

    useEffect(() => {
        const rand = (min, max) =>
            Math.floor(Math.random() * (max - min + 1) + min);

        const uniqueRand = (min, max, prev) => {
            let next = prev;

            while (prev === next) next = rand(min, max);

            return next;
        };

        const combinations = [
            { configuration: 1, roundness: 1 },
            { configuration: 1, roundness: 2 },
            { configuration: 1, roundness: 4 },
            { configuration: 2, roundness: 2 },
            { configuration: 2, roundness: 3 },
            { configuration: 3, roundness: 3 },
        ];

        let prev = 0;
        let interval = setInterval(() => {
            const index = uniqueRand(0, combinations.length - 1, prev),
                combination = combinations[index];

            wrapper.current.dataset.configuration = combination.configuration;
            wrapper.current.dataset.roundness = combination.roundness;

            prev = index;
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div
            id="wrapper"
            ref={wrapper}
            data-configuration="1"
            data-roundness="1"
        >
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
    );
}
