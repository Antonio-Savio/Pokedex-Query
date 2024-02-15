import { PokemonDetails } from "../../components/pokemon-details";
import { Header } from "../../components/header";
import { Body } from "./styles";
import { ThemeContext } from "../../contexts/theme-context";
import { useContext} from 'react'

const Details = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <Body theme={theme}>
                <Header />
                <PokemonDetails />
            </Body>   
        </>
    )
}

export { Details }