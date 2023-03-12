import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { CharactersList, Loader } from 'components/';
import { useFetch } from 'hooks';
import { getCharacterByName, getCharacters } from 'services';
import images from 'images';
import './homepage.scss';

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname, search } = useLocation();
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const searchCharacter = useCallback(() => getCharacterByName(query), [query]);
  const { data, isLoading, errorMessage } = useFetch(
    query ? searchCharacter : getCharacters
  );

  const changeQuery = e => {
    setQuery(e.target.value);
    setSearchParams({ query: e.target.value });
  };

  return (
    <div className="homepage">
      <img
        className="homepage__hero"
        src={images.heroImg}
        alt="Rick and Morty"
      />
      <div className="homepage__filter">
        <img src={images.searchImg} alt="search" />
        <input
          type="text"
          value={query}
          onChange={changeQuery}
          placeholder="Filter by name..."
        />
      </div>

      {!isLoading && data && (
        <CharactersList items={data} loc={pathname + search} />
      )}
      {isLoading && <Loader size={100} />}
      {errorMessage && !isLoading && <p>{errorMessage}</p>}
    </div>
  );
};
