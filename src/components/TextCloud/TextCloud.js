import { useEffect } from "react";
import TagCloud from "TagCloud";

import "./TextCloud.css";

export default function TextCloud({ tags, options }) {
    useEffect(() => {
        return () => {
            const container = ".text-sphere";
            TagCloud(container, tags, options);
        };
    }, [tags, options]);

    return <div className="text-sphere"></div>;
}
