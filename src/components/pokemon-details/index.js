import { getDetails } from "../../services/get-details"
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ThemeContext, themes } from '../../contexts/theme-context'
import { getAbililityEffect } from "../../services/get-ability";
import { Principal, Container, Img, TypeList, TypesUl, H1, H3, H4, P, SideContainer, Span, AsideWrap } from "./styles";

const PokemonDetails = () => {
    const { id } = useParams()
    const { theme } = useContext(ThemeContext)

    const [details, setDetails] = useState({
        name: '',
        image: '',
        moves: [],
        abilities: [],
        effect: [],
        types: []
    });
    
    useEffect(() => {
        const fetchData = async () =>{
            const pokemon = await getDetails(id)
            const abilityDescription = await getAbililityEffect()

            setDetails({
                name: pokemon.name,
                image: pokemon.sprites.other.home.front_default,
                moves: pokemon.moves.slice(0, 15).map(item => item.move.name),
                abilities: pokemon.abilities.map(item => item.ability.name),
                effect: abilityDescription.map(desc => {
                    const effect = desc.effect_entries

                    if (effect[1].language.name === 'en') {
                        return effect[1].short_effect
                    } else {
                        return effect[0].short_effect
                    }
                    
                }),
                types: pokemon.types.map(item => item.type.name)
            })
        }
        
        fetchData()
    }, [id])

    return (
        <>
            <Principal theme={theme}>
                <Container className={theme === themes.dark ? "darkMode" : ""}>
                    <AsideWrap>
                        <H1>{details.name}</H1>
                        <Img src={details.image} alt={details.name} />
                    </AsideWrap>
                    
                    <SideContainer>
                        <H3>type(s)</H3>
                        <TypesUl>
                            {details.types.map((type,id) => <TypeList className={type} key={id}>{type}</TypeList>)}
                        </TypesUl>
                        
                        <H3>moves</H3>
                        {details.moves.map((move, id) => <Span key={id}>•{move}</Span>)}

                        <H3>Abilities</H3>
                        <H4>{details.abilities[0]}</H4>
                        <P>{details.effect[0]}</P>
                        <H4>{details.abilities[1]}</H4>
                        <P>{details.effect[1]}</P>
                    </SideContainer>
                   
                </Container>
            </Principal>
        </>
    )
}

export { PokemonDetails }