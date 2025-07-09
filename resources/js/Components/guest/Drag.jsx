"use client";

import { motion, useSpring, frame } from "motion/react";
import { useEffect } from "react";

export default function Drag() {
    const { x, y } = useFollowPointer();

    return (
        <motion.div
            id="ball" // 👈 important for dynamic size access
            style={{
                ...ball,
                x,
                y,
                position: "fixed",
                pointerEvents: "none",
                zIndex: -1, // behind all content
                ...box,
            }}
            animate={{
                scale: [1, 1.2, 1.5, 1, 1.1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["30%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
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
            frame.read(() => {
                const el = document.getElementById("ball");
                if (!el) return;

                const { offsetWidth, offsetHeight } = el;

                const offsetX = clientX - offsetWidth / 2;
                const offsetY = clientY - offsetHeight / 2;

                x.set(offsetX);
                y.set(offsetY);
            });
        };

        window.addEventListener("pointermove", handlePointerMove);
        return () =>
            window.removeEventListener("pointermove", handlePointerMove);
    }, []);

    return { x, y };
}

/**
 * ==============   Styles   ================
 */
const ball = {
    width: "50px",
    height: "50px",
    backgroundColor: "#3b65af",
    borderRadius: "50%",
    opacity: 0.2,
};

const box = {
    backgroundColor: "#3b65af",
};
