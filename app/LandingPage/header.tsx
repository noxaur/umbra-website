import { Link } from "react-router";
import { useTheme } from "~/ThemeProvider";

function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	function handleClick(): void {
		setTheme(theme === "dark" ? "light" : "dark");
	}
	return (
		<>
			{
				<img
					onClick={handleClick}
					className={" size-19 "}
					src={`/${theme === "dark" ? "light" : "dark"}-mode.svg`}
				/>
			}
		</>
	);
}

export default function Header() {
	return (
		<div
			className={
				"flex content-center justify-between absolute w-full p-10 h-0 overflow-visible"
			}
		>
			<ThemeToggle />
			<Link to={"https://discord.gg/gTT5uhwXJB"}>
				<button className="bg-gold py-3.5 rounded-[0.9375rem] w-40.25 flex place-content-center gap-25.25 cursor-pointer">
					<p className={"text-text-opposite"}>DISCORD</p>
				</button>
			</Link>
		</div>
	);
}
