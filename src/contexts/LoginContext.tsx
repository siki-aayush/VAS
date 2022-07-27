import React, { useState } from 'react';

/**
 * Creates a UserLogin context to store whether the user is logged in or not
 * and provides the logged in information to the whole application scope
 * loginCtxInterface.
 */
export interface loginCtxInterface {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ctxProviderProps {
  children: JSX.Element;
}

// Create the login context
export const loginCtx = React.createContext<loginCtxInterface | null>(null);

// Creates the login Context provider to share the variable
export const LoginCtxProvider = (props: ctxProviderProps) => {
  const { children } = props;
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const ctxValue = {
    isUserLoggedIn,
    setIsUserLoggedIn,
  };

  // returns the provider with the user logged in value
  return <loginCtx.Provider value={ctxValue}>{children}</loginCtx.Provider>;
};
