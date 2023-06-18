import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SignupForm from './Pages/SignupPage';
import Loginform from './Pages/LoginPage';
import NewPassword from './Pages/NewPassword';
import ForgetPassword from './Pages/ForgotPassword';

import Dashboard from './Pages/dashboard';
import { AuthProvider } from './Pages/AuthContext';
import { Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Home from './Pages/Home';
import Sidebar from './global/Sidebar';
import UserProfile from './components/UserProfile';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/login" element={<Loginform />} />

          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/home" element={<Sidebar><Home /></Sidebar>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
