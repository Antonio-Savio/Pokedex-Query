import { baseUrl } from "./get-pokemons";

async function getTypes() {
    const typesList = []

    try {
        const response = await fetch(`${baseUrl}/type`)
        const data = await response.json()

        typesList.push(data.results)
    } catch (error) {
        console.log('An error occurred at type fetch: ', error);
    }

    return typesList
}

export { getTypes }