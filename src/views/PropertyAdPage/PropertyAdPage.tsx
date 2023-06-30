import { useEffect, useState, useContext } from 'react';
import { AppContext, InitialStateType } from '../../utils/context';
import { Ads } from '../../utils/types';
//#region import component
import PropertyAdCard from '../../components/PropertyAdCard/PropertyAdCard';
import CategoryMiniCard from '../../components/CategoryCard/CategoryMiniCard';

//#region import style
import './PropertyAdPage.css';
import house from '../../assets/cat-img-house.jpg';
import flat from '../../assets/cat-img-flat.jpg';
import project from '../../assets/cat-img-project.jpg';
import all from '../../assets/cat-img-all.jpg';

type Props = {};

const PropertyAdPage = (props: Props) => {
  const [ads, setAds] = useState<Ads[]>([]);
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    console.log(state);
    getAds().then((ads) => setAds(ads));
  }, []);

  useEffect(() => {
    console.log(state.favorite);
    console.log(state.ads);
  }, []);

  const getAds = async (): Promise<Ads[]> => {
    const response = await fetch('http://localhost:3003/product', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    return await response.json();
  };

  const addInFavorite = (newState: InitialStateType) => {
    dispatch(newState);
  };

  return (
    <>
      <div className="property-ad-container">
        <div className="category-card-container">
          <CategoryMiniCard title="Toutes les catégories" img={all} />
          <CategoryMiniCard title="Maisons" img={house} />
          <CategoryMiniCard title="Appartements" img={flat} />
          <CategoryMiniCard title="Nos autres locaux" img={project} />
        </div>
        {ads.length !== 0 ? (
          <div className="ad-container">
            {ads.map((product) => (
              <PropertyAdCard
                state={state}
                addInFavorite={addInFavorite}
                id={product.id}
                _id={product._id}
                date_pub={product.date_update ? product.date_update : product.date_pub}
                price={product.price}
                fee={product.fee}
                adress={product.adress}
                description={product.description}
              />
            ))}
          </div>
        ) : (
          <div className="ad-container-empty">
            <h1>Oops nous n'avons plus d'annonces :( </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default PropertyAdPage;
