import './profile-info.scss';

export const ProfileInfo = ({ data }) => {
  const { gender, status, species, type, origin } = data;
  return (
    <>
      <h2 className="info__title">Informations</h2>
      <ul className="info__list">
        <li>
          <h3>Gender</h3>
          <p>{gender || 'Unknown'}</p>
        </li>
        <li>
          <h3>Status</h3>
          <p>{status || 'Unknown'}</p>
        </li>
        <li>
          <h3>Species</h3>
          <p>{species || 'Unknown'}</p>
        </li>
        <li>
          <h3>Origin</h3>
          <p>{origin.name || 'Unknown'}</p>
        </li>
        <li>
          <h3>Type</h3>
          <p>{type || 'Unknown'}</p>
        </li>
      </ul>
    </>
  );
};
