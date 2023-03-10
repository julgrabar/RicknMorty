import { CharactersList } from 'components/CharactersList/CharactersList';
import { useSearchParams, useLocation } from 'react-router-dom';
import { statusList, useFetch } from 'hooks';
import { useState, useCallback } from 'react';
import { getCharacterByName, getCharacters } from 'services/api-service';
import hero from 'images/hero.png';
import searchImg from 'images/search.svg';
import './homepage.scss';

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname, search } = useLocation();
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const searchCharacter = useCallback(() => getCharacterByName(query), [query]);
  const { data, status } = useFetch(query ? searchCharacter : getCharacters);

  return (
    <div className="homepage">
      <img className="homepage__hero" src={hero} alt="Rick and Morty" />
      <div className="homepage__filter">
        <img src={searchImg} alt="search" />
        <input
          type="text"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            setSearchParams({ query: e.target.value });
          }}
          placeholder="Filter by name..."
        />
      </div>
      {status === statusList.IDLE && data && (
        <CharactersList items={data} loc={pathname + search} />
      )}
      {status === statusList.LOAD && <p>Loading...</p>}
      {status === statusList.ERR && <p>Something went wrong...</p>}
    </div>
  );
};
