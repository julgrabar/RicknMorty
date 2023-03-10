import { ProfileInfo } from 'components/Profile/ProfileInfo';
import { statusList, useFetch } from 'hooks';
import { useCallback } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { getCharacterById } from 'services';
import arrow from 'images/back.svg';
import './profile.scss';

export const ProfilePage = () => {
  const { state } = useLocation();
  const { characterId } = useParams();
  const getCharacter = useCallback(
    () => getCharacterById(characterId),
    [characterId]
  );
  const { data, status } = useFetch(getCharacter);

  return (
    <div className="profile">
      <Link to={state?.from || '/'}>
        <img src={arrow} alt="back" className="btn-img" />
        GO BACK
      </Link>
      {status === statusList.IDLE && data && (
        <>
          <img src={data.image} alt={data.name} className="profile__avatar" />
          <h1>{data.name}</h1>
          <ProfileInfo data={data} />
        </>
      )}
      {status === statusList.LOAD && <p>Loading...</p>}
      {status === statusList.ERR && <p>Something went wrong...</p>}
    </div>
  );
};
