import React from 'react';
import { useAuth0 } from '../react-auth0-spa';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const {isAuthenticated, loginWithRedirect, logout} = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Log in</button>
      )}
      {isAuthenticated && (
        <>
          <button onClick={() => logout()}>Log out</button>
          <span>
            <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> | <Link to="/demo-table">Demo Table</Link>
          </span>
        </>
      )}
    </div>
  );
};
