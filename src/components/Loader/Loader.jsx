import portal from 'images/portal.svg';
import './loader.css';

export const Loader = ({ size }) => {
  return (
    <div style={{ width: size, height: size }} className="loader">
      <img src={portal} alt="Loading..." className="loader__img" />
    </div>
  );
};
