import { useContext, useEffect, useState } from 'react'
import { ThemeContext, themes } from '../../contexts/theme-context'
import { Img, Main, Li, Ul, Info, Number, Name, Types, Type } from './styles'
import { Button } from '../load-button'
import { getPokemon } from '../../services/get-pokemons'
import { FilterType } from '../filter'
import { Link } from 'react-router-dom'

const Card = () => {
    const { theme } = useContext(ThemeContext)

    const [list, setList] = useState({
        name: '',
        id: '',
        image: '',
        types: []
    });

    const [loadIncrement, setLoadIncrement] = useState(10)
    const [message, setMessage] = useState('')

    const LoadPokemons = (inc) => {
        setLoadIncrement((prevIncrement) => prevIncrement + inc)
        setMessage('')
    }

    const pokemonTypeFilter = (filteredPokemons) => {
        setList(filteredPokemons)
    }

    useEffect(() => {
        const fetchData = async () =>{
            await getPokemon(loadIncrement, setList)
        }
        
        fetchData()
    }, [loadIncrement])

    return (
        <Main theme={theme}>
            <FilterType list={list} sendFilterParameter={pokemonTypeFilter} loadIncrement={loadIncrement} setMessage={setMessage} message={message} setList={setList} />

            <Ul>
                {
                    Object.keys(list).map(id => {
                        const pokemon = list[id]

                        return (
                            <Link to={`/details/${pokemon.id}`} key={id}>
                                <Li className={theme === themes.dark ? "darkMode" : ""}>
                                    <Info>
                                        <Number>#00{pokemon.id}</Number>
                                        <Name>{pokemon.name}</Name>
                                    </Info>
                                    <Img src={pokemon.image} alt={pokemon.name} />
                                    
                                    <Types>
                                        {
                                        pokemon.types && pokemon.types.length !== undefined && (
                                            <>
                                                {pokemon.types.map((type,id) => <Type className={type} key={id}>{type}</Type>)}
                                            </>
                                        )
                                        }
                                        
                                    </Types>
                                </Li>
                            </Link>
                        )  
                    })
                }
            </Ul>

            {loadIncrement < 150 && <Button sendLoadParameter={LoadPokemons} />}
        </Main>        
    )
}

export { Card }