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
      </BrowserRouter>
    </div>
  );
}

export default App;