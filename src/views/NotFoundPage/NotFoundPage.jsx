import images from 'images';
import './404.scss';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="notfound">
      <div className="notfound__code">
        4<img src={images.notfoundImg} alt="0" />4
      </div>
      <p>Maybe this page exists in another universe... But not here.</p>
      <Link to="/" className="button">
        GET ME HOME
      </Link>
    </div>
  );
};
