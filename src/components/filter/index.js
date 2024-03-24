import { useEffect, useState, useContext } from "react";
import { getTypes } from "../../services/get-types";
import { Select, P } from "./styles";
import { ModeContext } from "../../contexts/theme-context"
import { getPokemon } from "../../services/get-pokemons";

const FilterType = ({ list, setList, sendFilterParameter, loadIncrement, message, setMessage }) => {
    const { isDarkMode } = useContext(ModeContext)
    const [types, setTypes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const types = await getTypes()
            
            setTypes(types[0])
        }

        fetchData()
    }, [])

    const filteredPokemons = []

    const pokemonTypeFilter = (selectedType) => {
        Object.keys(list).map(id => {
            const pokemon = list[id] 

            if (pokemon.types.includes(selectedType)){
                filteredPokemons.push(pokemon)
            }
        })

        if (selectedType === '') {
            getPokemon(loadIncrement, setList)
            setMessage('')
        } else if (filteredPokemons.length === 0) {
            setMessage(`No Pokémon found with ${selectedType} type`)
        }
        
        sendFilterParameter(filteredPokemons)
    }

    return (
        <>
            <Select
            className={isDarkMode ? "darkMode" : ""}
            onChange={(e) => pokemonTypeFilter(e.target.value)}>
                <option value="">All types</option>
                {
                    types.map((type, id) => (
                        <option value={type.name} key={id}>{type.name}</option>
                    ))
                }
            </Select>

            <P>{message}</P>
                
        </>
    )
}

export { FilterType }