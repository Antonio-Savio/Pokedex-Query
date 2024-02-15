import { createContext, useState } from "react";

const themes = {
    light: {
        color: '#000',
        background: '#C1C1C1'
    },

    dark: {
        color: '#D4D4D4',
        background: '#030303'
    }
}


const ThemeContext = createContext({})

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, themes, ThemeProvider }