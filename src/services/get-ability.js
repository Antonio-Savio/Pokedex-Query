import { abilityURL } from "./get-details";

async function getAbililityEffect(){
    try {
        const responseData = await Promise.all(abilityURL.map(async url => {
            const response = await fetch(url);
            return response.json();
        }))

        return responseData

    } catch (error) {
        console.error('An error occurred at ability fetch: ', error);
    }
    
}

export { getAbililityEffect }