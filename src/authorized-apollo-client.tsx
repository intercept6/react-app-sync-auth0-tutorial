import React from 'react';
import { useAuth0 } from './react-auth0-spa';
import { HttpLink } from 'apollo-link-http';
import appSyncConfig from './app-sync-config.json';
import { setContext } from 'apollo-link-context';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';

export const AuthorizedApolloProvider: React.FC = ({children}) => {
  const [token, setToken] = React.useState<string>('');
  const {loading, getTokenSilently} = useAuth0();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const httpLink = new HttpLink({
    uri: appSyncConfig.uri,
    fetchOptions: {credentials: 'same-origin'}
  });

  const withTokenLink = setContext(async () => {
    if (token) {
      return {auth0Token: token};
    }

    const newToken = await getTokenSilently();
    setToken(newToken);
    return {auth0Token: newToken};
  });

  const authLink = setContext((_, {headers, auth0Token}) => ({
    headers: {
      ...headers,
      ...(auth0Token ? {authorization: auth0Token} : {})
    }
  }));

  const client = new ApolloClient({
    link: ApolloLink.from([withTokenLink, authLink, httpLink]),
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
};
