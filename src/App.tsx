import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/login';

import './App.css';
import { getUserLoginFromLocalStorage } from './utils/localstorage.util';
import { Home } from './components/homepage';
import { useDispatch } from 'react-redux';
import { setIsUserLoggedIn } from './reducers/authSlice';
import AuthRoute from './hoc/AuthRoute';

function App() {
  const dispatch = useDispatch();
  const userLogin = getUserLoginFromLocalStorage();

  React.useEffect(() => {
    if (userLogin) {
      dispatch(setIsUserLoggedIn(true));
    }
  }, [dispatch, userLogin]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
