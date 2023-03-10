import { Routes, Route } from 'react-router-dom';
import { HomePage, ProfilePage } from 'views';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path=":characterId" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};
