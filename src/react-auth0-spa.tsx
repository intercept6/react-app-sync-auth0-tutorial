import React from 'react';
import createAuth0Client, {
  Auth0Client, Auth0ClientOptions,
  getIdTokenClaimsOptions, GetTokenSilentlyOptions, GetTokenWithPopupOptions, IdToken, LogoutOptions,
  PopupConfigOptions,
  PopupLoginOptions, RedirectLoginOptions,
} from '@auth0/auth0-spa-js';

type Auth0ContextOptions = {
  isAuthenticated: boolean;
  user: any;
  loading: boolean;
  popupOpen: boolean;
  loginWithPopup: (options?: PopupLoginOptions, config?: PopupConfigOptions) => Promise<void>;
  handleRedirectCallback: (path?: string) => Promise<void>;
  getIdTokenClaims: (options?: getIdTokenClaimsOptions) => Promise<IdToken>;
  loginWithRedirect: (options?: RedirectLoginOptions) => Promise<void>;
  getTokenSilently: (options?: GetTokenSilentlyOptions) => Promise<any>;
  getTokenWithPopup: (options?: GetTokenWithPopupOptions, config?: PopupConfigOptions) => Promise<string>;
  logout: (options?: LogoutOptions) => void;
}

export type Auth0ProviderOptions = Auth0ClientOptions & {
  children: React.ReactElement;
  onRedirectCallback: Auth0ContextOptions['handleRedirectCallback'];
}

export const Auth0Context = React.createContext({} as Auth0ContextOptions);
export const useAuth0 = () => React.useContext<Auth0ContextOptions>(Auth0Context);
export const Auth0Provider: React.FC<Auth0ProviderOptions> = (
  {
    children,
    onRedirectCallback,
    ...initOptions
  }
) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<any>(null);
  const [auth0Client, setAuth0] = React.useState<Auth0Client>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [popupOpen, setPopupOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0(auth0FromHook);

      if (window.location.search.includes('code=') &&
        window.location.search.includes('state=')) {
        const {appState} = await auth0FromHook.handleRedirectCallback();
        await onRedirectCallback(appState?.targetUrl);
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser();
        setUser(user);
      }

      setLoading(false);
    };
    initAuth0();
    // eslint-disable-next-line
  }, []);

  const loginWithPopup: Auth0ContextOptions['loginWithPopup'] = async (options, config) => {
    setPopupOpen(true);
    try {
      await auth0Client!.loginWithPopup(options, config);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const user = await auth0Client!.getUser();
    setUser(user);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback: Auth0ContextOptions['handleRedirectCallback'] = async (url) => {
    setLoading(true);
    await auth0Client!.handleRedirectCallback(url);
    const user = await auth0Client!.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setUser(user);
  };

  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (options) => auth0Client!.getIdTokenClaims(options),
        loginWithRedirect: (options) => auth0Client!.loginWithRedirect(options),
        getTokenSilently: (options) => auth0Client!.getTokenSilently(options),
        getTokenWithPopup: (options, config) => auth0Client!.getTokenWithPopup(options, config),
        logout: (options) => auth0Client!.logout(options)
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};
