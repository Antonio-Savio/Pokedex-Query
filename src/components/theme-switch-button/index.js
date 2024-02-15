import React, { useContext, useState } from "react"
import { themes, ThemeContext } from "../../contexts/theme-context"
import { Button, MoonIcon, Span, SunIcon } from "./styles"

const ThemeSwitchButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const [isDarkMode, setDarkMode] = useState(false)

    const toggleButton = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light)
        setDarkMode(!isDarkMode)
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