import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleForm = async (e) => {
    e.preventDefault();

    const newUser = {
      email: email,
      password: password
    };

    try {
      const response = await fetch("http://localhost:8082/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (response.ok) {
        console.log("New User is registered!!!");
        console.log(newUser);
      } else {
        console.log("Some error occurred");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '& .MuiTextField-root': {
          m: 1,
          width: '25ch',
          backgroundColor: 'white',
          color: 'black',
          borderRadius: '18px',
          borderColor: 'white'
        },
        backgroundColor: '#b0d2cb'
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleForm}
    >
      <div>
        <h1>Sign Up</h1>
        <div style={{ marginRight: '800px', marginTop: '200px', marginBottom: '-200px', fontFamily: 'cursive' }}>
          <h2>PEACE OF MIND</h2>
          <p>It's okay not to be okay</p>
        </div>
      </div>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div style={{ marginRight: '227px' }}>
        <TextField
          id="outlined-multiline-flexible"
          label="Password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      <div style={{ marginBottom: '192px', borderRadius: '10px' }}>
        <button type="submit" style={{ borderRadius: '10px', backgroundColor: '#6b8b85', color: 'white',fontSize:'20px' }}>
            Login
        </button>
      </div>
    </Box>
  );
}

export default LoginForm;
