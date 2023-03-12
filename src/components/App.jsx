import { Routes, Route } from 'react-router-dom';
import { HomePage, ProfilePage, NotFoundPage } from 'views';
import { Layout } from 'components';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path=":characterId" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
