import { type ReactNode } from "react";

interface CardProps {
	children: ReactNode;
	className?: string;
}

export default function Card({ children, className }: CardProps) {
	return (
		<div
			className={`p-12 bg-card-bg rounded-[1.5625rem] flex flex-col items-center ${className}`}
		>
			{children}
		</div>
	);
}
