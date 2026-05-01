import {createContext, type ReactNode, useContext, useEffect, useState} from "react";

type Theme = "dark" | "light"; /*| "system"*/

// 1. Explicitly type the Context State
type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

// 2. Apply the type to createContext
const ThemeProviderContext = createContext<ThemeProviderState>({
    //theme: "system",
    theme: "dark",
    setTheme: () => null,
});

export function ThemeProvider({children}: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark");

    useEffect(() => {
        // On mount, sync React state with whatever is in localStorage
        const savedTheme = localStorage.getItem("theme") as Theme;
        if (savedTheme) setTheme(savedTheme);
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");

        // if (theme === "system") {
        //   const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        //     .matches
        //     ? "dark"
        //     : "light";
        //   root.classList.add(systemTheme);
        //   return;
        // }

        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeProviderContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

// Custom hook to use the theme easily in other components
export const useTheme = () => useContext(ThemeProviderContext);
