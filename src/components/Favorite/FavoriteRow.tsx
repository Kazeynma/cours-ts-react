import { InitialStateType } from "../../utils/context"
import { StarIcon as StarFill } from "@heroicons/react/24/solid"
import "./FavoriteRow.css"

type Props = {
    ad: Ads,
    state: InitialStateType,
    deleteFavorite: (newState: InitialStateType) => void
}
type Ads = {
    id: String
    description: String
    price: String
    date_pub: String
    date_update?: String
    fee: String
    adress: String
}

const FavoriteRow = (props: Props) => {


    const handleClick = () => {
        let newState
        let ads = props.state.ads
        let favorite = props.state.favorite

        //trouver l'index du produit que l'on veut enlever
        let adIndex = ads.findIndex(ads => ads.id === props.ad.id)
        let newAds = ads.splice(adIndex, 1)
        newState = { ads: newAds, favorite: favorite - 1 }
        props.deleteFavorite(newState)
    }

    return (
        <div className="favorite-row-container flex justify-around align-center">
            <img />
            <div className="favorite-description">
                <span>{props.ad.description}</span>
                <span>{props.ad.price}€</span>
            </div>
            <StarFill className="favorite-icon" onClick={handleClick} />
        </div>
    )
}

export default FavoriteRow