import './PropertyAdCard.css';
import img from '../../assets/cat-img-house.jpg';

type Props = {
  _id: number;
  id: string;
  date_pub: string;
  description: string;
  price: number;
  fee: string;
  adress: string;
};

const PropertyAdCard = (props: Props) => {
  return (
    <div key={props._id} className="ad-card-container">
      <div className="title-container">
        <span>
          {props.date_pub} - Numéro de l'annonce : {props.id}
        </span>
      </div>
      <img src={img} alt="property advertisment img" />
      <div className="content-container">
        <span className="ad-price">{props.price}€/mois</span>
        <span>{props.adress}</span>
        <span>{props.description}</span>
      </div>
    </div>
  );
};

export default PropertyAdCard;
