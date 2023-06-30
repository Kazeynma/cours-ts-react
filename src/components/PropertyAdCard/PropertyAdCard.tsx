import './PropertyAdCard.css';
import img from '../../assets/cat-img-house.jpg';
import { InitialStateType } from '../../utils/context';

type Props = {
  _id: number;
  id: string;
  date_pub: string;
  price: string;
  fee: string;
  adress: string;
  state: InitialStateType;
  description: string;
  addInFavorite: (newState: InitialStateType) => void;
};

const PropertyAdCard = (props: Props) => {
  const ad = {
    _id: props._id,
    id: props.id,
    date_pub: props.date_pub,
    price: props.price,
    adress: props.adress,
    fee: props.fee,
    description: props.description,
  };

  const handleClick = (): void => {
    // init default value
    let newState;
    let ads = props.state.ads;
    let favorite = props.state.favorite;
    // try if ad already exists in ads
    const index = ads.findIndex((ad) => ad._id === props._id);
    if (index !== -1) {
      //if ad not in ads
      const index = ads.findIndex((ad) => ad._id === props._id);
      console.log(index);
      ads.splice(index, 1);
      favorite -= 1;
      newState = { ads: ads, favorite: favorite };
    } else {
      //if ad already in ads
      ads.push(ad);
      favorite += 1;
      newState = { ads: ads, favorite: favorite };
    }
    console.log(newState);
    props.addInFavorite(newState);
  };

  return (
    <div key={props._id} className="ad-card-container" onClick={handleClick}>
      <div className="title-container">
        <span>
          N° de l'annonce : {props.id} - {props.date_pub}
        </span>
      </div>
      <img src={img} alt="property advertisment img" />
      <div className="content-container">
        <span className="ad-price">{props.price}</span>
        <span>{props.adress}</span>
      </div>
    </div>
  );
};

export default PropertyAdCard;
