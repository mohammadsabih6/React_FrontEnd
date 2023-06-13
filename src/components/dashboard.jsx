import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const history = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set the initial login state

  const handleLogout = () => {
    // Perform logout actions (e.g., clear session, reset state)
    console.log('Performing logout actions...');
    setIsLoggedIn(false);
    history.navigate('/login'); // Redirect to the login page after logout
  };

  if (!isLoggedIn) {
    // If the user is not logged in, redirect to the login page
    history.navigate('/login');
    return null;
  }

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <Button onClick={handleLogout} variant="contained" color="primary">
        Logout
      </Button>
    </div>
  );
}

export default Dashboard;
