import { ThemeSwitchButton } from "../theme-switch-button"
import pokedexLogo from '../../assets/pokedex-logo.svg'
import { Heading, Img } from "./styles"
import React, { useContext } from 'react'
import { ThemeContext } from "../../contexts/theme-context"
import { Link } from "react-router-dom"

const Header = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <Heading theme={theme}>
            <Link to={'/'}>
                <Img src={pokedexLogo} alt="Pokédex" />
            </Link>
            <ThemeSwitchButton />
        </Heading>
    )
}

export { Header }