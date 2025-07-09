import { useEffect, useRef, useState } from "react";

export default function CountUp({
    from = 0,
    to = 100,
    duration = 2000,
    prefix = "",
    suffix = "",
    className = "",
}) {
    const [count, setCount] = useState(from);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.6 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;

        let start = null;

        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const progressRatio = Math.min(progress / duration, 1);
            const newValue = from + (to - from) * progressRatio;

            setCount(Math.round(newValue));

            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [hasAnimated, from, to, duration]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            {count}
            {suffix}
        </span>
    );
}
