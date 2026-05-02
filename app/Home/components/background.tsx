import {useTheme} from "~/ThemeProvider";

type ThemeProp = { theme: string };

function SunMoon({theme}: ThemeProp) {
    return (
        <div className="flex -z-1 w-screen overflow-hidden justify-center opacity-50 lg:opacity-100 ">
            <div
                className={
                    "hidden lg:flex absolute left-0 mt-[20vh] -translate-x-1/2 rotate-45"
                }
            >
                <img
                    src={`/${theme}-sun-moon.png`}
                    alt={theme + "Luminaries left"}
                    className="w-121"
                ></img>
            </div>
            <div
                className={
                    "absolute lg:right-0 mt-[20vh] lg:translate-x-1/2 rotate-45"
                }
            >
                <img
                    src={`/${theme}-sun-moon.png`}
                    alt={theme + "Luminaries right"}
                    className="w-90 lg:w-121"
                ></img>
            </div>
        </div>
    );
}

export default function Background() {
    const {theme} = useTheme();
    return (
        <>
            <div className="flex flex-col absolute -z-1 items-center">
                <div className="relative w-screen h-[1200px] overflow-hidden">
                    <img src={`/${theme}-bg.png`}
                         alt={theme + "Luminaries Background"}
                         className="absolute bottom-0 left-1/2 -translate-x-1/2 min-w-[1200px] w-full h-full object-cover object-bottom"></img>
                </div>
                <img src={`/umbra.svg`} alt={theme + "Minecraft sky"}
                     className={"w-9/10 lg:w-[600px]  opacity-25"}></img>
                <SunMoon theme={theme}></SunMoon>
            </div>
        </>
    );
}
