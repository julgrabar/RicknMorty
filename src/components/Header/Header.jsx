import { Loader } from 'components';
import { useState } from 'react';
import { signIn, logOut } from 'services';
import './header.scss';

export const Header = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const user = await signIn();
      setUser(user);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await logOut();
      setUser(null);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <header>
      {!isLoading && (
        <div className="user-info">
          {user ? (
            <>
              <span>{user.displayName}</span>
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <button type="button" onClick={handleLogin}>
              Sign in with Google
            </button>
          )}
        </div>
      )}
      {isLoading && (
        <div className="user-info">
          <Loader size={35} />
        </div>
      )}
    </header>
  );
};
