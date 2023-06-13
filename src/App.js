import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from './components/SignupPage';
import { Login } from '@mui/icons-material';
import Loginform from './components/LoginPage';
import NewPassword from './components/NewPassword';
import ForgetPassword from './components/ForgotPassword';
// import SignupForm from './components/SignupPage';
// import LoginPage from './components/LoginPage';
// import ForgetPassword from './components/ForgetPassword';
// import NewPassword from './components/NewPassword';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/login" element={<Loginform />} />
          <Route path="/new-password" element={<NewPassword />} />
        </Routes>
      </Router>
      {/* <ForgetPassword/> */}
      {/* <NewPassword/> */}
    </div>
  );
}

export default App;
