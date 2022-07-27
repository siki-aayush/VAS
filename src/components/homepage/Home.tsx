import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { loginCtx, loginCtxInterface } from '../../contexts';

export const Home = () => {
  const { isUserLoggedIn } = useContext(loginCtx) as loginCtxInterface;

  return isUserLoggedIn ? <h1>Welcome to Homepage</h1> : <Navigate to="/login" />;
};
