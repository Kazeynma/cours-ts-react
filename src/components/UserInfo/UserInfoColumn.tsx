import { useContext } from 'react';
import { InitialStateType } from '../../utils/context';
import PropertyAdCard from '../PropertyAdCard/PropertyAdCard';
import { Ads } from '../../utils/types';
import { AppContext } from '../../utils/context';

type Props = {
  lastname: string;
  firstname: string;
  email: string;
  annunces?: Ads[];
};

const UserInfoColumn = (props: Props) => {
  const { state, dispatch } = useContext(AppContext);

  const addInFavorite = (newState: InitialStateType) => {
    dispatch(newState);
  };
  return (
    <div className="flex column">
      <span>
        {props.lastname.toUpperCase()} {props.firstname}
      </span>
      <span>{props.email}</span>
      <div>
        {props.annunces !== undefined && props.annunces.length !== 0 ? (
          <div>
            <span>Vos favoris :</span>
            {props.annunces.map((ads) => {
              return (
                <PropertyAdCard
                  id={ads.id}
                  _id={ads._id}
                  date_pub={ads.date_update ? ads.date_update : ads.date_pub}
                  price={ads.price}
                  fee={ads.fee}
                  adress={ads.adress}
                  description={ads.description}
                  addInFavorite={addInFavorite}
                  state={state}
                />
              );
            })}
          </div>
        ) : (
          <span>Vous n'avez aucun favoris</span>
        )}
      </div>
    </div>
  );
};

export default UserInfoColumn;
