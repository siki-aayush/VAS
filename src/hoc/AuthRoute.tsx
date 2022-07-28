import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getUserLoginFromLocalStorage } from '../utils/localstorage.util';

const AuthRoute = () => {
  // Gets the login status from the local storage
  const isLoggedIn = getUserLoginFromLocalStorage();

  /* Returns the child elements if the user is logged in
   * else navigate to the login page
   */
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRoute;
