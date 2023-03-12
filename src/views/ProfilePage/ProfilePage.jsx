import { ProfileInfo, Loader } from 'components';
import { useFetch } from 'hooks';
import { useCallback } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { getCharacterById } from 'services';
import images from 'images';
import './profile.scss';

export const ProfilePage = () => {
  const { state } = useLocation();
  const { characterId } = useParams();
  const getCharacter = useCallback(
    () => getCharacterById(characterId),
    [characterId]
  );
  const { data, isLoading, errorMessage } = useFetch(getCharacter);

  return (
    <div className="profile">
      <Link to={state?.from || '/'}>
        <img src={images.backImg} alt="back" className="btn-img" />
        GO BACK
      </Link>
      {!isLoading && data && (
        <>
          <img src={data.image} alt={data.name} className="profile__avatar" />
          <h1>{data.name}</h1>
          <ProfileInfo data={data} />
        </>
      )}
      {isLoading && <Loader size={150} />}
      {errorMessage && !isLoading && <p>{errorMessage}</p>}
    </div>
  );
};
