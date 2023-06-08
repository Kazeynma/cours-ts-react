import './CategoryMiniCard.css';

type Props = {
  title: string;
  img: string;
};

const CategoryMiniCard = ({ title, img }: Props) => {
  return (
    <div className="category-mini-container">
      <img src={img} alt="img category" className="image" />
      <div className="overlay">
        <div className="text">{title}</div>
      </div>
    </div>
  );
};

export default CategoryMiniCard;
