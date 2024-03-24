import { createContext, useEffect, useState } from "react";

const themes = {
    light: {
        color: '#000',
        background: '#C1C1C1'
    },

    dark: {
        color: '#D4D4D4',
        background: '#030303',
        darklessColor: '#292929'
    }
}


const ThemeContext = createContext({})
const ModeContext = createContext({})

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light)
    const [isDarkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme) {
            setTheme(JSON.parse(storedTheme))
        }
    }, [setTheme])

    useEffect(() => {
        const storedMode = localStorage.getItem('mode')
        if (storedMode) {
            setDarkMode(JSON.parse(storedMode))
        }
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ModeContext.Provider value={{ isDarkMode, setDarkMode }}>
                {props.children}
            </ModeContext.Provider>
        </ThemeContext.Provider>
    )
}

export { ThemeContext, themes, ModeContext, ThemeProvider }