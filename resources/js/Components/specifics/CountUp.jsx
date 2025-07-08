import { useState, useEffect } from "react";

export default function CountUp({
    from = 0,
    to = 100,
    duration = 2000,
    prefix = "",
    suffix = "",
    className = "",
}) {
    const [count, setCount] = useState(from);

    useEffect(() => {
        const totalFrames = Math.round(duration / 16); // ~60fps
        const increment = (to - from) / totalFrames;
        let frame = 0;

        const counter = setInterval(() => {
            frame++;
            setCount((prev) => {
                const next = prev + increment;
                return next >= to ? to : next;
            });

            if (frame >= totalFrames) clearInterval(counter);
        }, 16);

        return () => clearInterval(counter);
    }, [from, to, duration]);

    return (
        <span className={`${className}`}>
            {prefix}
            {Math.round(count)}
            {suffix}
        </span>
    );
}
