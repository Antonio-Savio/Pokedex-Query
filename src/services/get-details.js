import { baseUrl } from "./get-pokemons";

let abilityURL = []

async function getDetails(i) {
    try {
        const response = await fetch(`${baseUrl}/pokemon/${i}`)
        const data = await response.json()

        abilityURL = data.abilities.map(item => item.ability.url)
        return data
    } catch (error) {
        console.error('An error occurred at details fetch: ', error);
    }

}

export { getDetails, abilityURL }