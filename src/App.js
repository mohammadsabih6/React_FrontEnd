import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

import SignupForm from './Pages/SignupPage';
import Loginform from './Pages/LoginPage';
import NewPassword from './Pages/NewPassword';
import ForgetPassword from './Pages/ForgotPassword';
import Dashboard from './Pages/dashboard';
import { AuthProvider } from './Pages/AuthContext';
import Home from './Pages/Home';
import Sidebar from './global/Sidebar';
import UserProfile from './components/UserProfile';
import UserProfile  from './Pages/UserProfile';
// import SignupForm from './components/SignupPage';
// import Loginform from './components/LoginPage';
// import NewPassword from './components/NewPassword';
// import ForgetPassword from './components/ForgotPassword';
// import Dashboard from './components/dashboard';
// import { AuthProvider } from './components/AuthContext';
// import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <AuthProvider>
            <Routes>
            <Route path="/home" element={<Home />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/login" element={<Loginform />} />
              <Route path="/new-password" element={<NewPassword />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/home" element={<Sidebar><Home /></Sidebar>} />
              <Route path="/profile" element={<UserProfile />} />
            </Routes> 
            {/* Fix typo here */}
        </AuthProvider>
      </BrowserRouter> 
      <UserProfile />
    </div>
  );
}

export default App;