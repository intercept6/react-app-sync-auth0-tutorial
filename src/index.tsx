import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { history } from './utils/history';
import { Auth0Provider } from './react-auth0-spa';
import authConfig from './auth-config.json';
import { AuthorizedApolloProvider } from './authorized-apollo-client';

const onRedirectCallback = async (url?: string) => {
  history.push(url ?? window.location.pathname);
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={authConfig.domain}
      client_id={authConfig.clientId}
      redirect_uri={window.location.origin}
      audience={authConfig.audience}
      onRedirectCallback={onRedirectCallback}
    >
      <AuthorizedApolloProvider>
        <App />
      </AuthorizedApolloProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


