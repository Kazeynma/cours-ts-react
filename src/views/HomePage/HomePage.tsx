//#region import component
import CategoryMiniCard from '../../components/CategoryCard/CategoryMiniCard';
import ArticleCard from '../../components/ArticleCard/ArticleCard';

//#region import style
import './HomePage.css';
import img from '../../assets/img-HomePage.jpg';
import house from '../../assets/cat-img-house.jpg';
import flat from '../../assets/cat-img-flat.jpg';
import project from '../../assets/cat-img-project.jpg';
import all from '../../assets/cat-img-all.jpg';

const HomePage = () => {
  return (
    <>
      <div id="banner" className="homePage-container">
        <div className="side-left">
          <h1>Trouver l'endroit de vos rêves</h1>
          <span className="subtitle">
            Notre équipe est à votre disposition. Avec nos 100 agences à travers la France, soyez
            sûr de trouver le logement qui vous convient le mieux. Notre mission : louer, acheter,
            construire, conseiller.
          </span>
          <span className="slogan">Faites nous part de vos projets, même les plus fous.</span>
        </div>
        <div className="side-right">
          <img src={img} alt="img real estate" className="img-homePage" />
        </div>
      </div>
      <div className="homePage-container">
        <div className="category-card-container">
          <CategoryMiniCard title="Toutes les catégories" img={all} />
          <CategoryMiniCard title="Maisons" img={house} />
          <CategoryMiniCard title="Appartements" img={flat} />
          <CategoryMiniCard title="Nos autres locaux" img={project} />
        </div>
      </div>
      <div className="homePage-container">
        <ArticleCard
          category="Nos projets"
          title="Nous nous engageons à vous offrir un lieu de vie toujours plus confortable."
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
          image={project}
        />
      </div>
    </>
  );
};

export default HomePage;
