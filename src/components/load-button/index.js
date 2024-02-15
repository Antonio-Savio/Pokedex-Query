import { useContext } from "react"
import { Load } from "./styles"
import { ThemeContext, themes } from "../../contexts/theme-context"

const Button = (props) => {
    const { theme } = useContext(ThemeContext)

    let increment = 0
    const loadTenPokemons = () => {   
        props.sendLoadParameter(increment += 10)
    }

    return (
        <Load 
        className={theme === themes.dark ? "darkMode" : ""}
        onClick={() => loadTenPokemons()}>
            Load Pokémons
        </Load>
    )
}

export { Button }