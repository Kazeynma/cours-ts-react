import { useState, useEffect } from "react"
import MiniCard from "../../components/Card/MiniCard"
import FavoriteRow from "../../components/Favorite/FavoriteRow"

import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline"
import "./UserHomePage.css"

type User = {
    lastname: String
    firstname: String
    email: String
    password: String
    favorite: [String]
}

const dataProducts = [
    { id: "1", description: "appartement Paris 45m2", price: "700", date_pub: "jeudi 11 septembre", fee: "gestion du dossier 100€", adress: "14 rue Duguesclin" },
    { id: "2", description: "appartement Paris 120m2", price: "34 000", date_pub: "mardi 31 octobre", fee: "gestion du dossier 100€", adress: "75 rue de la forge" },
]

const UserHomePage = () => {
    const [user, setUser] = useState<User>()

    useEffect(() => {
        getUser()
    }, [])

    const getUser = () => {
        //let user = localStorage.getItem("user")
        setUser(user)
    }

    return (
        <>
            <div className="user-page-container">
                <h1>Bienvenu dans votre espace personnel</h1>
                <div className="contact-card">
                    <MiniCard icon={PhoneIcon} text1="+334 74 57 57 57" text2={undefined} />
                    <MiniCard icon={EnvelopeIcon} text1="RealEstate@re.fr" text2={undefined} />
                    <MiniCard icon={MapPinIcon} text1="11 rue des entrepreuneurs" text2={'69007 Lyon'} />
                </div>

                <div className="user-home-content">
                    <div className="user-info">
                        <h2>Vos informations personnels</h2>
                        <span>Vous êtes : {user?.lastname.toUpperCase()} {user?.firstname}</span>
                        <span>Votre adresse email : {user?.email}</span>
                    </div>
                    <div className="user-favorite-container">
                        {dataProducts.map((ad) => (
                            <FavoriteRow ad={ad} />
                        ))}
                    </div>
                </div>

            </div>
        </>
    )

}

export default UserHomePage