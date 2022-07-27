import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { loginCtx, loginCtxInterface } from './contexts';
import { Login } from './components/login';

import './App.css';
import { getUserLoginFromLocalStorage } from './utils/localstorage.util';
import { Home } from './components/homepage';

function App() {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(loginCtx) as loginCtxInterface;
  useEffect(() => {
    const sessionLogin = getUserLoginFromLocalStorage();
    setIsUserLoggedIn(sessionLogin);
    console.log('session', sessionLogin);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
