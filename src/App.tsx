import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginCtxProvider } from './contexts';
import { Login } from './components/login';

import './App.css';

function App() {
  return (
    <LoginCtxProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Welcome to Homepage</h1>}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </LoginCtxProvider>
  );
}

export default App;
