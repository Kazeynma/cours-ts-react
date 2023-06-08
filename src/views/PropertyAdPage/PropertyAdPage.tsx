import { useEffect, useState } from 'react';

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
  const [ads, setAds] = useState<Product[]>([]);

  useEffect(() => {
    getAds().then((ads) => setAds(ads));
  }, []);

  type Product = {
    _id: number;
    id: string;
    date_pub: string;
    date_update?: string;
    description: string;
    price: number;
    fee: string;
    adress: string;
  };

  const getAds = async (): Promise<Product[]> => {
    const response = await fetch('http://localhost:3003/product', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    return await response.json();
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
        <div className="ad-container">
          {ads.length !== 0 ? (
            <div>
              {ads.map((product) => (
                <PropertyAdCard
                  id={product.id}
                  _id={product._id}
                  date_pub={product.date_update ? product.date_update : product.date_pub}
                  description={product.description}
                  price={product.price}
                  fee={product.fee}
                  adress={product.adress}
                />
              ))}
            </div>
          ) : (
            <div className="ad-container-empty">
              <h1>Oops nous n'avons plus d'annonces :(</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PropertyAdPage;
