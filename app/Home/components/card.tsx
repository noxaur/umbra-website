import {type ReactNode} from "react";
import {motion} from "motion/react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export default function Card({children, className}: CardProps) {
    return (
        <motion.div
            className={`p-6 bg-card-bg rounded-xl flex flex-col items-center ${className}`}
            initial={{scale: 0.5}}
            whileInView={{scale: 1}}
            layout
        >
            {children}
        </motion.div>
    );
}
