import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import plan_background from "../images/plan_background.jpeg";
import SvgIcon from '@mui/material/SvgIcon';
import counselor from '../images/counselor.svg';

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PersonIcon from "@mui/icons-material/Person";

const SignupForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [description, setDescription] = useState("");
  const [guardian_phone_number, setGuardian_phone_number] = useState("");

  const resetForm = () => {
    setFname("");
    setLname("");
    setPhone("");
    setAddress("");
    setEmail("");
    setCnic("");
    setPassword("");
    setGender("");
    setRole("");
    setGuardian_phone_number("");
  };

  const handleForm = async (e) => {
    e.preventDefault();

    const newUser = {
      firstName: fname,
      lastName: lname,
      phoneNumber: phone,
      address: address,
      email: email,
      nationalId: cnic,
      password: password,
      gender: gender,
      role: role,
      guardian_phone_number: guardian_phone_number,
    };

    try {
      const response = await fetch("http://localhost:8080/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (response.ok) {
        console.log("New User is registered!!!");
        console.log(newUser);
        resetForm(); // Reset the form after successful submission
      } else {
        console.log("Some error occurred");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <>
      <div
        className="signup-container"
        style={{
          backgroundImage: `url(${plan_background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            "& .MuiTextField-root": {
              m: 1,
              width: "15rem",
              backgroundColor: "white",
              color: "black",
              borderRadius: "5px",
              borderColor: "white",
            },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleForm}>
          <div>
            <h1
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "2.5rem",
                fontWeight: "bolder",
                marginTop: "5rem",
                textAlign: "center",
                marginLeft: "25rem",
              }}>
              Sign Up
            </h1>
            <div
              style={{
                textAlign: "left",
                marginLeft: "15rem",
                marginTop: "9rem",
                display: "block",
              }}>
              <h2
                style={{
                  fontFamily: "Quicksand, sans-serif",
                  fontSize: "3.2rem",
                  fontWeight: "bolder",
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  marginRight: "10rem",
                }}>
                PEACE OF MIND
              </h2>
              <p
                style={{
                  fontFamily: "Quicksand, sans-serif",
                  fontSize: "1rem",
                  fontWeight: "bolder",
                  marginLeft: "7rem",
                  marginTop: "-2.5rem",
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  textAlign: "left",
                }}>
                It's okay not to be okay
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "30px",
                borderRadius: "5px",
                marginLeft: "25rem",
                marginTop: "-10rem",
              }}>
              <div style={{ marginRight: "10%" }}>
                <FormControlLabel
                  value="COUNSELOR"
                  control={<Radio />}
                  label="COUNSELOR"
                  checked={role === "COUNSELOR"}
                  onChange={handleRoleChange}
                  icon={
                    <SvgIcon style={{ width: '2rem', height: '2rem' }}>
                    <img src={counselor} alt="Counselor Icon" style={{ width: '100%', height: '100%' }} />
                  </SvgIcon>
                  }

                />
              </div>
              <div style={{ marginTop: "" }}>
                <PersonIcon />
                <FormControlLabel
                  value="PATIENT"
                  control={<Radio />}
                  label="PATIENT"
                  checked={role === "PATIENT"}
                  onChange={handleRoleChange}
                />
              </div>
            </div>
            <div
              className="firstrow"
              style={
                //start
                {
                  display: "flex",
                  marginLeft: "50rem",
                  marginTop: "1rem",
                }
              }>
              <div style={{}}>
                {/* <label style={{ marginRight: "6rem", fontSize: "0.8rem" }}>Enter Your First Name:</label> */}
                <TextField
                  id="outlined-multiline-flexible"
                  label="First Name"
                  required
                  value={fname} 
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
              <div
                style={{
                  paddingLeft: "1rem",
                }}>
      
                <TextField
                  id="outlined-multiline-flexible"
                  label="Last Name"
                  required
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
            </div>

            <div
              className="secrow"
              style={
                //start
                {
                  display: "flex",
                  marginLeft: "50rem",
                  marginTop: "1rem",
                }
              }>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                {/* <label style={{ marginRight: "8rem", fontSize: "0.8rem", color: "white" }}>Enter Your Email:</label> */}
                <TextField
                  id="outlined-multiline-flexible"
                  label="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingLeft: "1rem",
                }}>
                {/* <label style={{ marginRight: "8rem", fontSize: "0.8rem" }}>Enter Your CNIC:</label> */}
                <TextField
                  id="outlined-multiline-flexible"
                  label="CNIC"
                  required
                  value={cnic}
                  onChange={(e) => setCnic(e.target.value)}
                />
              </div>
            </div>

            <div className="thirdrow">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "50rem",
                }}>
                

                {role === "COUNSELOR" && (
                  <div
                    style={{
                      marginTop: "1rem",
                      display: "flex",
                      FlexDirection: "row",
                      width: "100%",
                    }}>
                    <div>
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Specialization"
                        required
                        value={specialization}
                        onChange={(e) => setSpecialization(e.target.value)}
                      />
                    </div>
                    <div>
                      <TextField
                        style={{ marginLeft: "1.5rem" }}
                        id="outlined-multiline-flexible"
                        label="Description"
                        required
                        multiline
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/*  third row */}

            <div
              className="fourthrow"
              style={
                //start
                {
                  display: "flex",
                  marginLeft: "50rem",
                  marginTop: "1rem",
                }
              }>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div
                  style={{
                    paddingLeft: "1rem",
                  }}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {/*fourth row */}
            <div
              className="fifthrow"
              style={
                //start
                {
                  display: "flex",
                  marginLeft: "50rem",
                  marginTop: "1rem",
                }
              }>
                <div className="guardianNumber">

                  {role === "PATIENT" && (
                  <div style={{}}>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="guardian_phone_number"
                      required
                      value={guardian_phone_number}
                      onChange={(e) => setGuardian_phone_number(e.target.value)}
                    />
                  </div>
                )}
                </div>
              <div style={{marginTop: "5px", marginLeft: "10px"}}>
                <p>
                  Select Gender:
                
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="gender"
                    name="gender"
                    value={gender}
                    onChange={handleGenderChange}
                    style={{
                      flexDirection: "row",
                     marginTop: "-10px",
                      paddingLeft: "1rem",
                    }}>
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                </FormControl>
                </p>
              </div>
            </div>


          </div>

          <div
            style={{
              marginBottom: "1rem",
              borderRadius: "10px",
              textAlign: "center",
            }}>
            <button
              type="submit"
              style={{
                borderRadius: "10px",
                backgroundColor: "#437781",
                color: "white",
                fontSize: "20px",
                borderColor: "#6b8b85",
                width: "7rem",
                height: "2.5rem",
                marginLeft: "45%",
                marginTop: "1rem",
              }}>
              Sign Up
            </button>
          </div>

          <p
            style={{
              marginLeft: "30rem",
              paddingTop: "5px",
              marginBottom: "30px",
              fontFamily: "Quicksand, sans-serif",
              fontSize: "13px",
              fontWeight: "bold",
              color: "black",
            }}>
            Already have an account? <a href="">Sign in now</a>
          </p>
        </Box>
      </div>
    </>
  );
};

export default SignupForm;
