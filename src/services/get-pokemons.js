const baseUrl = 'https://pokeapi.co/api/v2'

async function getPokemon(limit, setList) {
    const results = []

    for (let id = 1; id <= limit; id++) {
        try {
            const response = await fetch(`${baseUrl}/pokemon/${id}`);
            const data = await response.json();

            results.push(data);
        } catch (error) {
            console.error('An error occurred at Pokémon fetch: ', error);
        }
    }
    
    setList( results.map(pokemon => ({
        name: pokemon.name,
        id: pokemon.id,
        image: pokemon.sprites.other.home.front_default,
        types: pokemon.types.map(item => item.type.name)
    }))
    )

    return setList
}

export { getPokemon, baseUrl }