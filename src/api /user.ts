import { Ads } from "../utils/types";


export const updateFavorite = async (id: string, favorite: Ads[]) => {
    const url = 'http://localhost:3003/user/favorite/' + id
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                'Accept': "application/json",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(favorite)
        })

        return await response.json()
    } catch (err) {
        console.log(err)
    }
}