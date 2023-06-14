import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SignupForm from './components/SignupPage';
import Loginform from './components/LoginPage';
import NewPassword from './components/NewPassword';
import ForgetPassword from './components/ForgotPassword';
import Dashboard from './components/dashboard';
import { AuthProvider } from './components/AuthContext';
import { Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/login" element={<Loginform />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
