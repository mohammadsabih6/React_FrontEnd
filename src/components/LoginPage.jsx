import { useState } from "react";
// import { borderColor, width } from "@mui/system";
import {
  Box,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
} from "@mui/material";

const Loginform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return;
    }

    console.log("Login successful");

    fetch("http://localhost:8080/user/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Login SuccessFully");
        } else {
          console.log("Login Fail");
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const validateEmail = (email) => {
    if (!email) {
      return "Email is required";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Invalid email address";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!password) {
      return "Password is required";
    }
    if (password.length < 8) {
      return "Password should be at least 8 characters long";
    }
    return "";
  };

  return (
    <>
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
       "& .MuiTextField-root": {
          m: 1,
          width: "18rem",
          backgroundColor: "white",
          border: "none",
          color: "black",
          borderRadius: "10px",
          borderColor: "#b0d2cb",
        },
        marginTop: "100px",
        backgroundImage:
          "url(https://thorekandersonville.org/wp-content/uploads/2023/04/Thorek-Andersonville-News.png)",
        backgroundRepeat: "no-repeat",
        borderRadius: "30px",
        marginLeft: "250px",
        height: "300%",
        width: "70%",
      }}
      
      noValidate
      autoComplete="on"
    >

<div style={{ marginLeft: "600px" }}>

      <div style={{ marginTop: "70px" }}>
           <h2
            style={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "2.8rem",
              fontWeight: "bolder",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            
            }}>
            PEACE OF MIND
          </h2>
         <p
            style={{
              marginTop: "-35px",
             fontFamily: "Quicksand, sans-serif",
             fontSize: "20px",            
                fontWeight: "bold",
            }}>
          It's okay not to be okay
         </p>
        </div>
       <h1
           style={{
            marginTop: "40px",
             fontFamily: "Quicksand, sans-serif",
            fontSize: "1.8rem",
            fontWeight: "bolder",
           }}>
          Login Now
                   </h1>
                          <div
          style={{
            display: "flex",
           justifyContent: "center",
            marginBottom: "19px",
            borderRadius: "10px",
            borderColor: "white",
          }}></div>
       </div>
       <div style={{ marginLeft: "750px" }}>
   <label style={{ marginRight: "22rem", fontSize: "0.8rem" }}>Enter Your Email:</label>
     <br />
        {/* Email Field */}
        <FormControl error={Boolean(errors.email)} sx= {{width: "500px"}}>
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
                  
                  backgroundColor: "white",
                  borderRadius: "10px",
                  borderColor: "white",
                },
              }}

            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <span style={{ color: "red" , fontSize: "0.8rem"}}>{errors.email}</span>
          )}
        </FormControl>
      </div>

      <div style={{ marginLeft: "750px", marginTop: "10px" }}>
    <label style={{ marginRight: "20rem", fontSize: "0.8rem" }}>Enter Your Password:</label>
    <br />
        {/* Password Field */}
        <FormControl error={Boolean(errors.password)} sx= {{width: "500px"}}>
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
                 
                  backgroundColor: "white",
                  borderRadius: "10px",
                  borderColor: "white",
                },
              }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <span style={{ color: "red", fontSize: "0.8rem" }}>{errors.password}</span>
          )}
        </FormControl>
      </div>
      

      <div>
       <a
          href="#"
          style={{
            marginLeft: "47rem",

            fontFamily: "Quicksand, sans-serif",
            fontSize: "12px",
            fontWeight: "bold",
            color: "black",
            textDecoration: "none",
          }}>
          Forgotten Password?
        </a>
      </div>


      <div
        style={{
          marginBottom: "5px",
          borderRadius: "10px",
          marginLeft: "600px",
        }}>

        </div>


      <Button
        type="submit"
        onClick={handleLogin}
        style={{
                      borderRadius: "10px",
                      marginLeft: "60rem",
                      padding: "5px",
                      width: "80px",
                      marginTop: "15px",
            
                    //   marginRight: "20px",
                      color: "black",
                      fontSize: "20px",
                      ontFamily: "Quicksand, sans-serif",
                      backgroundColor: "white",
                      fontSize: "12px",
                      fontWeight: "bold",
                      border: "1px solid black"
                    }}>
                    Login
       </Button>
                  <p
                    style={{
                      marginLeft: "47rem",
                      paddingTop: "18px",
                      marginBottom: "30px",
                      fontFamily: "Quicksand, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "black",
                    }}>
                    Don't have an account? <a href="">SignUp</a>
                  </p>
                </Box>
                </> 
            
            
   
  );
                
                }
            
        
    

export default Loginform;