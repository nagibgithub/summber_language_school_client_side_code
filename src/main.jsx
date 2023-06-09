import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { RouterProvider, } from "react-router-dom";
import router from './routes/routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './contexts/AuthProvider';
import './pages/login_register/loginRegister.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
);