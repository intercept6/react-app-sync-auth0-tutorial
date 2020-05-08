import React from "react";
import { NavBar } from "./components/NavBar";
import { Router, Route, Switch } from "react-router-dom";
import { Profile } from "./components/Profile";
import { DemoTable } from "./components/DemoTable";
import { createBrowserHistory } from "history";
import { PrivateRoute } from './components/PrivateRoute';
import { AuthorizedApolloProvider } from './authorized-apollo-client';
import { Auth0Provider } from './react-auth0-spa';
import authConfig from './auth-config.json';

export const App = () => {
  const history = createBrowserHistory();

  const onRedirectCallback = async (url?: string) => {
    history.push(url ?? window.location.pathname);
  };

  return (
    <div className="App">
      <Auth0Provider
        domain={authConfig.domain}
        client_id={authConfig.clientId}
        redirect_uri={window.location.origin}
        audience={authConfig.audience}
        onRedirectCallback={onRedirectCallback}
      >
        <AuthorizedApolloProvider>
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/demo-table" component={DemoTable} />
        </Switch>
      </Router>

        </AuthorizedApolloProvider>
      </Auth0Provider>
    </div>
  );
};
