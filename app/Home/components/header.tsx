import {Link} from "react-router";
import {useTheme} from "~/ThemeProvider";

interface ThemeProps {
    theme: string;
    setTheme: Function;
}

function ThemeToggle({theme, setTheme}: ThemeProps) {
    function handleClick(): void {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <>
            {
                <img
                    onClick={handleClick}
                    alt={"toggle dark/light"}
                    className={" size-12 lg:size-19 "}
                    src={`/${theme === "dark" ? "light" : "dark"}-mode.svg`}
                />
            }
        </>
    );
}

export default function Header() {
    const theme = useTheme();
    return (
        <div
            className={
                "flex content-center justify-between absolute w-full p-10 h-0 overflow-visible"
            }
        >
            <ThemeToggle {...theme} />
            <Link to={"https://discord.gg/gTT5uhwXJB"}>
                <button
                    className="hidden lg:flex bg-gold py-3.5 rounded-[0.9375rem] w-40.25 place-content-center gap-25.25 cursor-pointer">
                    <p className={"text-text-opposite"}>DISCORD</p>
                </button>
            </Link>
        </div>
    );
}
