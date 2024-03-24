import React, { useContext } from "react"
import { themes, ThemeContext, ModeContext } from "../../contexts/theme-context"
import { Button, MoonIcon, Span, SunIcon } from "./styles"

const ThemeSwitchButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { isDarkMode, setDarkMode } = useContext(ModeContext)

    const toggleButton = () => {
        setTheme(isDarkMode ? themes.light : themes.dark)
        setDarkMode(!isDarkMode)
        
        localStorage.setItem('theme', isDarkMode ? JSON.stringify(themes.light) : JSON.stringify(themes.dark))
        localStorage.setItem('mode', !isDarkMode)
    }

    return (
        <Button 
            onClick={() => toggleButton()}
            theme={theme}
        >
            <MoonIcon />
            <Span 
                className={isDarkMode ? "darkMode" : ""} 
            />
            <SunIcon />
        </Button>
        
    )

}

export { ThemeSwitchButton }