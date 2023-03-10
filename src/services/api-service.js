import axios from 'axios';
axios.defaults.baseURL = 'https://rickandmortyapi.com/api/character';

export const getCharacters = async () => {
  const { data } = await axios.get('/');
  return sortByName(data.results);
};

export const getCharacterByName = async query => {
  const { data } = await axios.get(`/?name=${query}`);
  return sortByName(data.results);
};

export const getCharacterById = async id => {
  const { data } = await axios.get(`/${id}`);
  return data;
};

const sortByName = arr => arr.sort((a, b) => a.name.localeCompare(b.name));
