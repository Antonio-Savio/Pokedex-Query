import { useContext } from "react"
import { Load } from "./styles"
import { ModeContext } from "../../contexts/theme-context"

const Button = (props) => {
    const { isDarkMode } = useContext(ModeContext)

    let increment = 0
    const loadTenPokemons = () => {   
        props.sendLoadParameter(increment += 10)
    }

    return (
        <Load 
        className={isDarkMode ? "darkMode" : ""}
        onClick={() => loadTenPokemons()}>
            Load Pokémons
        </Load>
    )
}

export { Button }