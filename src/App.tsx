import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { loginCtx, loginCtxInterface, LoginCtxProvider } from './contexts';
import Login from './components/login/Login';

import 'antd/dist/antd.min.css';
import './App.css';
import './global.css';

function App() {
  return (
    <LoginCtxProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </LoginCtxProvider>
  );
}

export default App;
