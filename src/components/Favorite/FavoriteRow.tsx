import { StarIcon as StarFill } from "@heroicons/react/24/solid"
import "./FavoriteRow.css"

type Props = {
    ad: Ads
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
    return (
        <div className="favorite-row-container flex justify-around align-center">
            <img />
            <div className="favorite-description">
                <span>{props.ad.description}</span>
                <span>{props.ad.price}€</span>
            </div>
            <StarFill className="favorite-icon" />
        </div>
    )
}

export default FavoriteRow