import { type ReactNode } from "react";

export default function Card({
	children,
}: {
	children: ReactNode;
	cssClasses?: string;
}) {
	return (
		<div
			className={`p-12 bg-card-bg rounded-[1.5625rem] flex flex-col items-center w-full`}
		>
			{children}
		</div>
	);
}
