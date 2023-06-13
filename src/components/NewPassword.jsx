import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const NewPassword = () => {
  const [password, setPassword] = useState("");  
  const emailAndToken = window.location.href.split('email=')[1];
  const [email, token] = emailAndToken.split("&token=");
  console.log('email:',email);
  console.log('token:',token);

  const handleForm = async (e) => {
    e.preventDefault();

    const newUser = {
      id: 1,
      email: email,
      token : token
    };

    console.log(newUser)

    try {
      const response = await fetch("http://localhost:8082/user/forgotpassword/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (response.ok) {
        console.log("User Password is Updated!");
        console.log(newUser);
      } else {
        console.log("Some error occurred");
      }
    } catch (error) {
      console.log(error);
    }
  };  

  return (
    <>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          '& .MuiTextField-root': {
            m: 1,
            width: '15rem',
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '10px',
            borderColor: 'white',
          },
          backgroundColor: '#b0d2cb'
        }}  
        noValidate
        autoComplete="off"
        onSubmit={handleForm}
      >
        <div>
          <h1
            style={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "2.5rem",
              fontWeight: "bolder",
              marginTop: "8rem",
              textAlign: "center",
              marginLeft: "25rem"
            }}
          >Sign Up</h1>
          <div style={{ textAlign: "left", marginLeft: "15rem", marginTop: "10rem",display: "block" }}>
            <h2
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "3.2rem",
                fontWeight: "bolder",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                marginRight: "10rem"
              }}
            >PEACE OF MIND</h2>
            <p
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "1rem",
                fontWeight: "bolder",
                marginLeft: "7rem",
                marginTop: "-2.5rem",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                textAlign: "left"
              }}
            >It's okay not to be okay</p>
          </div>
     
        </div>

        <div className="thirdrow" style={{ display: "flex", marginLeft: "50rem", marginTop: "3rem" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
            <label style={{ marginRight: "7rem", fontSize: "0.8rem" }}>Enter Your Password:</label>
            <TextField
              id="outlined-multiline-flexible"
              label="Password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div style={{ marginBottom: '1rem', borderRadius: '10px', textAlign: 'center' }}>
          <button type="submit" style={{ borderRadius: '10px', backgroundColor: '#6b8b85', color: 'white', fontSize: '20px' }}>
            Change Password
          </button>
        </div>
      </Box>
    </>
  );
}

export default NewPassword;