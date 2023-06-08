import './ArticleCard.css';

type Props = {
  category: string;
  title: string;
  text: string;
  image: string;
};

const ArticleCard = ({ category, title, text, image }: Props) => {
  return (
    <div className="article-container">
      <span className="category">{category}</span>
      <div className="article-subcontainer">
        <div className="sidebar-left">
          <h2>{title}</h2>
          <span>{text}</span>
        </div>
        <img src={image} alt="image article" className="img-article" />
      </div>
    </div>
  );
};

export default ArticleCard;
