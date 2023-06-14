import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import bg from "../images/bg.jpeg";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  FormControl,
} from "@mui/material";

const Loginform = () => {
  const navigate = useNavigate();
  const { setLoginStatus } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return;
    }

    console.log('Login successful');

    fetch('http://localhost:8082/user/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Login Successfully');
          setLoginStatus(true); // Set login status to true
          setTimeout(() => {
            navigate('/dashboard'); // Navigate to dashboard
          }, 3000);  // Navigate to dashboard
        } else {
          console.log('Login Fail');
          setLoginStatus(false); // Set login status to false
        }
      })
      .catch((error) => {
        console.error('Error', error);
        setLoginStatus(false); // Set login status to false in case of an error
      });
  };

  const validateEmail = (email) => {
    if (!email) {
      return 'Email is required';
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return 'Invalid email address';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (!password) {
      return 'Password is required';
    }
    if (password.length < 8) {
      return 'Password should be at least 8 characters long';
    }
    return '';
  };

  // if (isLoggedIn) {
  //   return null; // Render nothing if already logged in
  // }

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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            "@media screen and (max-width: 600px)": {
              // flexDirection: "column",
              width:'30vh',
              marginLeft:"-2rem",
              justifyContent: "center",
            },
            "& .MuiTextField-root": {
              m: 1,
              width: "18rem",
              backgroundColor: "white",
              border: "none",
              color: "black",
              borderRadius: "10px",
              borderColor: "#b0d2cb",
              "@media screen and (max-width: 600px)": {
                // flexDirection: "column",
                width:'35vh',
                marginLeft:"-4rem",
                justifyContent: "center",
              },
              
            }
          }}
          noValidate
          autoComplete="on"
        >
          <div style={{ marginLeft: "37%"
        
          }}>
            <div style={{ marginTop: "13%" }}>
              <h2
                style={{
                  fontFamily: "Quicksand, sans-serif",
                  fontSize: "2.8rem",
                  fontWeight: "bolder",
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                PEACE OF MIND
              </h2>
              <p
                style={{
                  marginTop: "-35px",
                  fontFamily: "Quicksand, sans-serif",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                It's okay not to be okay
              </p>
            </div>
            <h1
              style={{
                marginTop: "8%",
                fontFamily: "Quicksand, sans-serif",
                fontSize: "1.8rem",
                fontWeight: "bolder",
              }}
            >
              Login Now
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "19px",
                borderRadius: "10px",
                borderColor: "white"
              }}
            ></div>
          </div>
          <div style={{ marginLeft: "50%" }}>
            <label style={{ marginRight: "22rem", fontSize: "1rem" ,fontFamily:"Quicksand, sans-serif" }}>
              Enter Your Email:
            </label>
            <br />
            {/* Email Field */}
            <FormControl error={Boolean(errors.email)} sx={{ width: "500px" }}>
              <TextField
                id="outlined-multiline-flexible"
                label="Email Address"
                required
                sx={{
                  width: "200px",
                  "& label": {
                    fontSize: "0.8rem",
                  },
                  "& fieldset": {
                    color: "black",

                    borderRadius: "10px",
                    borderColor: "white",
                  },
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <span style={{ color: "red", fontSize: "0.8rem" }}>
                  {errors.email}
                </span>
              )}
            </FormControl>
          </div>

          <div style={{ marginLeft: "50%", marginTop: "10px"  ,fontFamily:"Quicksand, sans-serif" }}>
            <label style={{ marginRight: "20.5rem", fontSize: "1rem" }}>
              Enter Your Password:
            </label>
            <br />
            <FormControl
              error={Boolean(errors.password)}
              sx={{ width: "500px" }}
            >
              <TextField
                id="outlined-multiline-flexible"
                label="Password"
                type="password"
                required
                sx={{
                  width: "200px",
                  "& label": {
                    fontSize: "0.8rem",
                  },
                  "& fieldset": {
                    color: "black",

                    borderRadius: "10px",
                    borderColor: "white",
                  },
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <span
                  style={{
                    color: "red",
                    fontSize: "0.8rem",
                  }}
                >
                  {errors.password}
                </span>
              )}
            </FormControl>
          </div>

          <div>
            <a
              href="/forget-password"
              style={{
                marginLeft: "45rem",

                fontFamily: "Quicksand, sans-serif",
                fontSize: "12px",
                fontWeight: "bold",
                color: "black",
                textDecoration: "none",

              }}
            >
              Forgotten Password?
            </a>
          </div>

          <div
            style={{
              marginBottom: "20px",
              borderRadius: "10px",
              // marginLeft: "600px",
            }}
          ></div>

          <Button
            type="submit"
            onClick={handleLogin}
            style={{
              borderRadius: "10px",
              marginLeft: "70rem",
              padding: "5px",
              width: "80px",
              marginTop: "15px",
              color: "black",
              fontSize: "20px",
              fontFamily: "Quicksand, sans-serif",
              backgroundColor: "white",
              fontSize: "12px",
              fontWeight: "bold",
              border: "1px solid black",
            }}
          >
            Login
          </Button>
          <p
            style={{
              marginLeft: "35rem",
              paddingTop: "18px",
              marginBottom: "30px",
              fontFamily: "Quicksand, sans-serif",
              fontSize: "13px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            Don't have an account? <a href="/">SignUp</a>
          </p>
        </Box>
      </div>
    </>
  );
};

export default Loginform;
