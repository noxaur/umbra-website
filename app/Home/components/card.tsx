import {type ReactNode} from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export default function Card({children, className}: CardProps) {
    return (
        <div
            className={`p-6 bg-card-bg rounded-xl flex flex-col items-center ${className}`}
        >
            {children}
        </div>
    );
}
