type ThemeProp = { theme: string };

function SunMoon({theme}: ThemeProp) {
    return (
        <div className="flex flex-row -z-1 overflow-x-clip w-full">
            <div
                className={
                    "absolute left-0 top-9/10 -translate-x-1/2"
                }
            >
                <img
                    src={`/${theme}-sun-moon.png`}
                    className="rotate-45 w-161"
                ></img>
            </div>
            <div
                className={
                    "absolute right-0 top-9/10  translate-x-1/2"
                }
            >
                <img
                    src={`/${theme}-sun-moon.png`}
                    className="rotate-45 w-161"
                ></img>
            </div>
        </div>
    );
}

export default function Background({theme}: ThemeProp) {
    return (
        <>
            <div className="flex flex-col absolute -z-1 items-center">
                <img src={`/${theme}-bg.png`}></img>
                <img src={`/umbra.svg`} className={"w-223 opacity-25 "}></img>
                <SunMoon theme={theme}></SunMoon>
            </div>
        </>
    );
}
