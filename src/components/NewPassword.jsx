import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import bg from "../images/bg.jpeg";

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
      token : token,
      password:password
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
    <div
        className="login-container"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          height:'100vh',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // height: "100vh",
          boxSizing: "border-box",
          // "@media screen and (max-width: 600px)": {
          //   // flexDirection: "column",
          //   // width:"160vh",
          //   justifyContent: "center",
          //   marginLeft:'-5rem'
          // },
        }}
      >
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          '& .MuiTextField-root': {
            m: 1,
            marginTop:'35px',
            width: '19rem',
            marginRight:'3.0rem',
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '10px',
            borderColor: 'white',
          },
          // backgroundColor: '#b0d2cb'
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
          >Forgot Password</h1>
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

        <div className="thirdrow" style={{ display: "flex", marginLeft: "50rem",marginTop: "-10rem" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
            <label style={{ marginRight: "2.5rem" ,fontSize: "1.4rem", fontFamily: "Quicksand, sans-serif",fontWeight: "bolder"}}>Enter Your New Password</label>
            <TextField
              id="outlined-multiline-flexible"
              label="New Password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div style={{ marginBottom: '1rem', borderRadius: '10px',marginLeft:'27rem',marginTop:'40px', textAlign: 'center' }}>
          <button type="submit" style={{ borderRadius: '10px',padding:'15px',color:'black' ,backgroundColor: "white", fontSize: '20px' }}>
            Submit
          </button>
        </div>
      </Box>
      </div>
    </>
  );
}

export default NewPassword;