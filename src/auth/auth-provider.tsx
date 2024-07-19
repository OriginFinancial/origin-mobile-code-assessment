import { createContext, useContext, useState } from 'react';

type State = {
  isAuthenticated: boolean;
};

type Handler = {
  signIn: () => void;
  signOut: () => void;
};

type ContextValue = {
  state: State;
  handler: Handler;
};

const Context = createContext({} as ContextValue);

export const AuthProvider = (props: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = () => setIsAuthenticated(true);
  const signOut = () => setIsAuthenticated(false);

  const value: ContextValue = {
    state: { isAuthenticated },
    handler: { signIn, signOut },
  };

  return <Context.Provider value={value} {...props} />;
};

export const useAuthContext = () => useContext(Context);
