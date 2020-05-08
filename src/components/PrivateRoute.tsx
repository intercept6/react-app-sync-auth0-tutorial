import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';

export const PrivateRoute: React.FC<RouteProps> = ({ component: Component, path, ...rest }) => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  React.useEffect(() => {
    if (loading || isAuthenticated) {
      return;
    }
    const fn = async () => {
      await loginWithRedirect({
        appState: {targetUrl: window.location.pathname}
      });
    };
    fn();
  }, [loading, isAuthenticated, loginWithRedirect, path]);

  const render: RouteProps['render'] = props => {
    if (isAuthenticated && Component != null) {
      return <Component {...props} />;
    }

    return null;
  };

  return <Route path={path} render={render} {...rest} />;
};

