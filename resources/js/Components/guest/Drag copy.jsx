"use client";

import { motion, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export default function Drag() {
    const { x, y } = useFollowPointer();
    const [morph, setMorph] = useState({
        width: 50,
        height: 50,
        borderRadius: "50%",
    });

    useEffect(() => {
        const handleMouseEnter = (e) => {
            const target = e.target.closest("[data-morph]");
            if (!target) return;

            const rect = target.getBoundingClientRect();

            setMorph({
                width: rect.width,
                height: rect.height,
                borderRadius: "12px",
            });
        };

        const handleMouseLeave = (e) => {
            if (!e.target.closest("[data-morph]")) return;

            setMorph({
                width: 50,
                height: 50,
                borderRadius: "50%",
            });
        };

        document.addEventListener("mouseenter", handleMouseEnter, true);
        document.addEventListener("mouseleave", handleMouseLeave, true);

        return () => {
            document.removeEventListener("mouseenter", handleMouseEnter, true);
            document.removeEventListener("mouseleave", handleMouseLeave, true);
        };
    }, []);

    return (
        <motion.div
            id="ball"
            style={{
                ...baseStyle,
                x,
                y,
            }}
            animate={{
                width: morph.width,
                height: morph.height,
                borderRadius: morph.borderRadius,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                mass: 0.5,
            }}
        />
    );
}

const spring = {
    damping: 10,
    stiffness: 75,
    restDelta: 0.001,
};

function useFollowPointer() {
    const x = useSpring(0, spring);
    const y = useSpring(0, spring);

    useEffect(() => {
        const handlePointerMove = ({ clientX, clientY }) => {
            const el = document.getElementById("ball");
            if (!el) return;

            const offsetX = clientX - el.offsetWidth / 2;
            const offsetY = clientY - el.offsetHeight / 2;

            x.set(offsetX);
            y.set(offsetY);
        };

        window.addEventListener("pointermove", handlePointerMove);
        return () =>
            window.removeEventListener("pointermove", handlePointerMove);
    }, []);

    return { x, y };
}

const baseStyle = {
    position: "fixed",
    backgroundColor: "#3b65af",
    opacity: 0.2,
    pointerEvents: "none",
    zIndex: -1,
};
