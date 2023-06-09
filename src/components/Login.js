
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import { useState } from "react";
// import { Box, TextField, Button, FormControl, FormControlLabel } from "@mui/material";
// import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
// import PersonIcon from "@mui/icons-material/Person";
// import { borderColor, width } from "@mui/system";

// const Loginform = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
    
// const emailError = validateEmail(email);
// const passwordError = validatePassword(password);

// if(emailError || passwordError){
//   setErrors({email: emailError, password: passwordError});
//   return;
// }

// console.log("Login successful")
//   };

//     fetch("http://localhost:8080/user/login", {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log("Login SuccessFully");
//         } else {
//           console.log("Login Fail");
//         }
//       })
//       .catch((error) => {
//         console.error("Error", error);
//       });
//   };


//   const validateEmail = (email) => {
//     if (!email) {
//       return "Email is required";
//     }
//     if (!/\S+@\S+\.\S+/.test(email)) {
//       return "Invalid email address";
//     }
//     return "";
//   };
  
//   const validatePassword = (password) => {
//     if (!password) {
//       return "Password is required";
//     }
//     if (password.length < 8) {
//       return "Password should be at least 8 characters long";
//     }
//     return "";
//   };
  

//   return (
//     <Box
//       component="form"
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",

//         "& .MuiTextField-root": {
//           m: 1,
//           width: "18rem",
//           backgroundColor: "white",
//           border: "none",
//           color: "black",
//           borderRadius: "10px",
//           borderColor: "#b0d2cb",
//         },
//         marginTop: "100px",
//         backgroundImage:
//           "url(https://thorekandersonville.org/wp-content/uploads/2023/04/Thorek-Andersonville-News.png)",
//         backgroundRepeat: "no-repeat",
//         borderRadius: "30px",
//         marginLeft: "250px",
//         height: "300%",
//         width: "70%",
//       }}
//       noValidate
//       autoComplete="on">
>
// <div style={{ marginLeft: "600px" }}>
//     <label style={{ marginRight: "10rem", fontSize: "0.8rem" }}>Enter Your Email:</label>
//     <br />
//     <FormControl error={Boolean(errors.email)} sx={{ width: "500px" }}>
//       <TextField
//         id="outlined-multiline-flexible"
//         label="Email Address"
//         required
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
//     </FormControl>
//   </div>
//   <div style={{ marginLeft: "600px", marginTop: "15px" }}>
//     <label style={{ marginRight: "9rem", fontSize: "0.8rem" }}>Enter Your Password:</label>
//     <br />
//     <FormControl error={Boolean(errors.password)} sx={{ width: "500px" }}>
//       <TextField
//         id="outlined-multiline-flexible"
//         label="Password"
//         type="password"
//         required
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
//     </FormControl>
//   </div>
 

//   <div>
//   <a
//           href="#"
//           style={{
//             marginLeft: "47rem",

//             fontFamily: "Quicksand, sans-serif",
//             fontSize: "12px",
//             fontWeight: "bold",
//             color: "black",
//             textDecoration: "none",
//           }}>
//           Forgotten Password?
//         </a>
//       </div>
//       <div
//         style={{
//           marginBottom: "5px",
//           borderRadius: "10px",
//           marginLeft: "600px",
//         }}></div>
//       <button
//         type="submit"
//         onClick={handleLogin}
//         style={{
//           borderRadius: "10px",
//           marginLeft: "60rem",
//           // padding: "10px",
//           width: "80px",
//           marginTop: "20px",

//           // marginRight: "20px",
//           color: "black",
//           fontSize: "20px",
//           ontFamily: "Quicksand, sans-serif",
//           fontSize: "12px",
//           fontWeight: "bold",
//         }}>
//         Login
//       </button>
//       <p
//         style={{
//           marginLeft: "47rem",
//           paddingTop: "15px",
//           marginBottom: "30px",
//           fontFamily: "Quicksand, sans-serif",
//           fontSize: "12px",
//           fontWeight: "bold",
//           color: "black",
//         }}>
//         Don't have an account? <a href="">SignUp</a>
//       </p>{" "}
//     </Box>
//   );
// };

// </Box>


// export default Loginform;





// {/* 
// //       <div style={{ marginLeft: "600px" }}>
// //         <div style={{ marginTop: "100px" }}>
// //           <h2
// //             style={{
// //               fontFamily: "Quicksand, sans-serif",
// //               fontSize: "2.8rem",
// //               fontWeight: "bolder",
// //               textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
// //               // border: "1px solid #000000",
// //             }}>
// //             PEACE OF MIND
// //           </h2>
// //           <p
// //             style={{
// //               marginTop: "-35px",
// //               fontFamily: "Quicksand, sans-serif",
// //               fontSize: "20px",
// //               fontWeight: "bold",
// //             }}>
// //             It's okay not to be okay
// //           </p>
// //         </div>
// //         <h1
// //           style={{
// //             marginTop: "55px",
// //             fontFamily: "Quicksand, sans-serif",
// //             fontSize: "1.8rem",
// //             fontWeight: "bolder",
// //           }}>
// //           Login Now
// //         </h1>
// //         <div
// //           style={{
// //             display: "flex",
// //             justifyContent: "center",
// //             marginBottom: "19px",
// //             borderRadius: "10px",
// //             borderColor: "white",
// //           }}></div>
// //       </div>
// //       <div style={{ marginLeft: "600px" }}>
// //         <label style={{ marginRight: "10rem", fontSize: "0.8rem" }}>
// //           Enter Your Email:
// //         </label>
       
// //         <br />
// //         <FormControl error= {Boolean(errors.email)} sx={{width:"500px"}}>

// //         <TextField
// //           id="outlined-multiline-flexible"
// //           label="Email Address"
// //           required
// //           sx={{
// //             width: "500px",
// //             "& label": {
// //               fontSize: "0.8rem",
// //             },
// //             "& fieldset": {
// //               backgroundColor: "white",
// //               borderRadius: "10px",
// //               borderColor: "white",
// //             },
// //           }}
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         />
// //  {errors.email && <span style={{color: "red"}}>{errors.email}</span>}
// //         </FormControl>
// //       </div>
// //       </div>
// //       <div style={{ marginLeft: "600px", marginTop: "15px" }}>
// //         <label style={{ marginRight: "9rem", fontSize: "0.8rem" }}>
// //           Enter Your Password:
// //         </label>
// //         <br />

        
        
// //         <TextField
// //           id="outlined-multiline-flexible"
// //           label="Password"
// //           type="password"
// //           required
// //           sx={{
// //             width: "500px",

// //             "& label": {
// //               fontSize: "0.8rem", // Apply styles to the label
// //             },
// //             "& fieldset": {
// //               // Apply styles to the TextField background
// //               backgroundColor: "white",
// //               borderRadius: "10px",
// //               borderColor: "white",
// //             },
// //           }}
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
       
        
// //       <div>
// //         <a
// //           href="#"
// //           style={{
// //             marginLeft: "47rem",

// //             fontFamily: "Quicksand, sans-serif",
// //             fontSize: "12px",
// //             fontWeight: "bold",
// //             color: "black",
// //             textDecoration: "none",
// //           }}>
// //           Forgotten Password?
// //         </a>
// //       </div>
// //       <div
// //         style={{
// //           marginBottom: "5px",
// //           borderRadius: "10px",
// //           marginLeft: "600px",
// //         }}></div>
// //       <button
// //         type="submit"
// //         onClick={handleLogin}
// //         style={{
// //           borderRadius: "10px",
// //           marginLeft: "60rem",
// //           // padding: "10px",
// //           width: "80px",
// //           marginTop: "20px",

// //           // marginRight: "20px",
// //           color: "black",
// //           fontSize: "20px",
// //           ontFamily: "Quicksand, sans-serif",
// //           fontSize: "12px",
// //           fontWeight: "bold",
// //         }}>
// //         Login
// //       </button>
// //       <p
// //         style={{
// //           marginLeft: "47rem",
// //           paddingTop: "15px",
// //           marginBottom: "30px",
// //           fontFamily: "Quicksand, sans-serif",
// //           fontSize: "12px",
// //           fontWeight: "bold",
// //           color: "black",
// //         }}>
// //         Don't have an account? <a href="">SignUp</a>
// //       </p>{" "}
// //     </Box>
// //   );
// // };

// // export default Loginform; */}



 
  