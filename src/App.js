import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import SignupForm from './Pages/SignupPage';
import Loginform from './Pages/LoginPage';
import NewPassword from './Pages/NewPassword';
import ForgetPassword from './Pages/ForgotPassword';
import Dashboard from './Pages/dashboard';
import { AuthProvider } from './Pages/AuthContext';
import Home from './Pages/Home';
import Sidebar from './global/Sidebar';
=======
import SignupForm from './components/SignupPage';
import Loginform from './components/LoginPage';
import NewPassword from './components/NewPassword';
import ForgetPassword from './components/ForgotPassword';
import Dashboard from './components/dashboard';
import { AuthProvider } from './components/AuthContext';
import Signup from './components/Signup';

>>>>>>> 191a84fad3ac19472684dc361889094e2bacecdb
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
            </Routes> {/* Fix typo here */}
        </AuthProvider>
<<<<<<< HEAD
      </BrowserRouter>
=======
        </BrowserRouter>
     
>>>>>>> 191a84fad3ac19472684dc361889094e2bacecdb
    </div>
  );
}

export default App;