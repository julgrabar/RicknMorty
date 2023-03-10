import { Link } from 'react-router-dom';
import './characters-list.scss';
export const CharactersList = ({ items, loc }) => {
  return (
    <ul className="list">
      {items.map(({ id, name, species, image }) => (
        <li key={id}>
          <Link to={`/${id}`} state={{ from: loc }}>
            <img src={image} alt={name} />
            <div className="item-info">
              <p className="item-info__name">{name}</p>
              <p className="item-info__species">{species}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
