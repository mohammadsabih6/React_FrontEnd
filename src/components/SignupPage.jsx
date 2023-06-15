import React, { useState } from "react";
import {
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import plan_background from "../images/plan_background.jpeg";
import doctor from "../images/doctor.png";
import patient from "../images/patient.png";
import "./SignUp.module.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    address: "",
    email: "",
    cnic: "",
    password: "",
    gender: "",
    role: "",
    specialization: "",
    description: "",
    guardian_phone_number: "",
  });

  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    phone: "",
    address: "",
    email: "",
    cnic: "",
    password: "",
    gender: "",
    role: "",
    specialization: "",
    description: "",
    guardian_phone_number: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (formErrors) {
      setErrors(formErrors);
    } else {
      // Submit the form data
      try {
        const response = await fetch("http://localhost:8082/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("New User is registered!!!");
          if (formData.role === "COUNSELOR") {
            const counselorData = {
              specialization: formData.specialization,
              description: formData.description,
            };
            const counselorResponse = await fetch(
              "http://localhost:8081/counselor/post",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(counselorData),
              }
            );
            if (counselorResponse.ok) {
              console.log("Counselor data is saved!");
            } else {
              console.log("Failed to save counselor data.");
            }
          } else if (formData.role === "PATIENT") {
            const patientData = {
              guardian_phone_number: formData.guardian_phone_number,
            };
            const patientResponse = await fetch(
              "http://patient-app.us-west-2.elasticbeanstalk.com/patient/add",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(patientData),
              }
            );
            if (patientResponse.ok) {
              console.log("Patient data is saved!");
            } else {
              console.log("Failed to save patient data.");
            }
          }
          console.log(formData);
          resetForm();
        } else {
          console.log("Some error occurred");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const validateForm = () => {
    const formErrors = {};
    const {
      fname,
      lname,
      phone,
      address,
      email,
      cnic,
      password,
      gender,
      role,
      specialization,
      description,
      guardian_phone_number,
    } = formData;

    if (!role) {
      formErrors.role = "Role is required";
    }

    if (role === "COUNSELOR" && !specialization) {
      formErrors.specialization = "Specialization is required";
    }

    if (role === "COUNSELOR" && !description) {
      formErrors.description = "Description is required";
    }

    if (role === "PATIENT" && !guardian_phone_number) {
      formErrors.guardian_phone_number = "Guardian Phone Number is required";
    }

    // Add more validation rules for other form fields

    if (Object.keys(formErrors).length > 0) {
      return formErrors;
    }
    return null;
  };

  const resetForm = () => {
    setFormData({
      fname: "",
      lname: "",
      phone: "",
      address: "",
      email: "",
      cnic: "",
      password: "",
      gender: "",
      role: "",
      specialization: "",
      description: "",
      guardian_phone_number: "",
    });
    setErrors({
      fname: "",
      lname: "",
      phone: "",
      address: "",
      email: "",
      cnic: "",
      password: "",
      gender: "",
      role: "",
      specialization: "",
      description: "",
      guardian_phone_number: "",
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100%",
        width: "100%",

        minHeight: "100vh",
        backgroundImage: `url(${plan_background})`,
        backgroundSize: "cover",
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "2rem",
          paddingLeft: "1rem",
        }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Quicksand, sans-serif",
            fontSize: "3.2rem",
            fontWeight: "bolder",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}>
          PEACE OF MIND
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Quicksand, sans-serif",
            fontSize: "1rem",
            fontWeight: "bolder",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}>
          It's okay not to be okay
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(2, 84, 100, 0.7)",
         marginTop: "1rem",
         paddingTop: "1rem",
          
         borderRadius: "10px",
          maxWidth: "550px",
          width: "100%",
          border: "1px solid #717377",
          
          borderRadius: "16px",
          boxShadow: "0px 3px 15px rgba(113,115,119,0.7)",
        }}>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          style={{
            fontFamily: "Quicksand, sans-serif",
            fontSize: "2rem",
            fontWeight: "bolder",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}>
          Sign Up
        </Typography>

        <form onSubmit={handleFormSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              
            }}>
            <img
              src={formData.role === "COUNSELOR" ? doctor : patient}
              alt="role"
              style={{ width: "100px", marginBottom: "0.5rem" }}
            />

            <FormControl component="fieldset" error={!!errors.role} required>
              <RadioGroup
                row
                aria-label="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}>
                <FormControlLabel
                  value="COUNSELOR"
                  control={<Radio />}
                  label="Counselor"
                />
                <FormControlLabel
                  value="PATIENT"
                  control={<Radio />}
                  label="Patient"
                />
              </RadioGroup>
              {!!errors.role && (
                <Typography variant="caption" color="error">
                  {errors.role}
                </Typography>
              )}
            </FormControl>
          </Box>
          <Box sx={{paddingLeft: "3rem"}}>
            <TextField
              styles={{ margin: "2rem", border: "2px solid red" }}
              label="First Name"
              name="fname"
              value={formData.fname}
              onChange={handleInputChange}
              error={!!errors.fname}
              helperText={errors.fname}
              required
              sx={{ mb: 1 }}
            />
            <TextField
              label="Last Name"
              name="lname"
              value={formData.lname}
              onChange={handleInputChange}
              error={!!errors.lname}
              helperText={errors.lname}
              required
              sx={{ mb: 1, ml: 2 }}
            />
            <TextField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              error={!!errors.phone}
              helperText={errors.phone}
              required
              sx={{ mb: 1 }}
            />

            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              error={!!errors.address}
              helperText={errors.address}
              required
              sx={{ mb: 1, ml: 2 }}
            />
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              error={!!errors.address}
              helperText={errors.address}
              required
              sx={{ mb: 1 }}
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
              required
              sx={{ mb: 1, ml: 2 }}
            />
            <TextField
              label="CNIC"
              name="cnic"
              value={formData.cnic}
              onChange={handleInputChange}
              error={!!errors.cnic}
              helperText={errors.cnic}
              required
              sx={{ mb: 1 }}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              error={!!errors.password}
              helperText={errors.password}
              required
              sx={{ mb: 1, ml: 2 }}
            />

            {/* from role is here */}
            {formData.role === "COUNSELOR" && (
              <>
                <TextField
                  label="Specialization"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  error={!!errors.specialization}
                  helperText={errors.specialization}
                  required={formData.role === "COUNSELOR"}
                  sx={{ mb: 1 }}
                />
                <TextField
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  error={!!errors.description}
                  helperText={errors.description}
                  required={formData.role === "COUNSELOR"}
                  sx={{ mb: 1, ml: 2 }}
                />
              </>
            )}
            {formData.role === "PATIENT" && (
              <TextField
                label="Guardian Phone Number"
                name="guardian_phone_number"
                value={formData.guardian_phone_number}
                onChange={handleInputChange}
                error={!!errors.guardian_phone_number}
                helperText={errors.guardian_phone_number}
                required={formData.role === "PATIENT"}
                sx={{ mb: 1, ml: 15 }}
              />
            )}
            <br />

            <FormControl
              component="fieldset"
              error={!!errors.gender}
              sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="body1"
                sx={{ display: "inline-block", marginRight: "1rem" }}>
                Select the gender:
              </Typography>
              <RadioGroup
                row
                aria-label="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}>
                <FormControlLabel
                  value="MALE"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="FEMALE"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
              {!!errors.gender && (
                <Typography variant="caption" color="error">
                  {errors.gender}
                </Typography>
              )}
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 1 }}>
            <Button variant="contained" type="submit" sx={{ width: "25%" }}>
              Sign Up
            </Button>
          </Box>
        </form>
        <p
            style={{
              
              
      
              fontFamily: "Quicksand, sans-serif",

              fontSize: "13px",
              fontWeight: "bold",
              color: "black",
              margin: "1rem",
            }}>
            Already have an account? <a href="/login">Sign in now</a>
          </p>
      </Box>
     
    </Box>
  );
};

export default SignupForm;

// import React, { useState } from "react";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import plan_background from "../images/plan_background.jpeg";

// import doctor from "../images/doctor.png";
// import patient from "../images/patient.png";

// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import FormControl from "@mui/material/FormControl";
// import FormControlLabel from "@mui/material/FormControlLabel";

// const SignupForm = () => {
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [email, setEmail] = useState("");
//   const [cnic, setCnic] = useState("");
//   const [password, setPassword] = useState("");
//   const [gender, setGender] = useState("");
//   const [role, setRole] = useState("");
//   const [specialization, setSpecialization] = useState("");
//   const [description, setDescription] = useState("");
//   const [guardian_phone_number, setGuardian_phone_number] = useState("");

//   const [errors, setErrors] = useState({
//     fname: "",
//     lname: "",
//     phone: "",
//     address: "",
//     email: "",
//     cnic: "",
//     password: "",
//     gender: "",
//     role: "",
//     specialization: "",
//     description: "",
//     guardian_phone_number: "",
//   });

//   const resetForm = () => {
//     setFname("");
//     setLname("");
//     setPhone("");
//     setAddress("");
//     setEmail("");
//     setCnic("");
//     setPassword("");
//     setGender("");
//     setRole("");
//     setDescription("");
//     setSpecialization("");
//     setGuardian_phone_number("");
//   };

//   const handleForm = async (e) => {
//     e.preventDefault();
//     console.log("Clicking-----")

//     const fnameError = validateFname(fname);
//     const lnameError = validateLname(lname);
//     const phoneError = validatePhone(phone);
//     const addressError = validateAddress(address);
//     const emailError = validateEmail(email);
//     const cnicError = validateCnic(cnic);
//     const passwordError = validatePassword(password);
//     const genderError = validateGender(gender);
//     const roleError=validateRole(role);
//     const guardian_phone_numberError = validateGuardianPhoneNumber(
//       guardian_phone_number
//     );
//     const descriptionError = validateDescription(description);
//     const specializationError = validateSpecialization(specialization);

//     if (
//       emailError ||
//       passwordError ||
//       fnameError ||
//       lnameError ||
//       phoneError ||
//       addressError ||
//       cnicError ||
//       genderError ||
//       guardian_phone_numberError ||
//       descriptionError ||
//       specializationError||
//       roleError
//     ) {
//       setErrors({
//         email: emailError,
//         password: passwordError,
//         fname: fnameError,
//         lname: lnameError,
//         phone: phoneError,
//         address: addressError,
//         cnic: cnicError,
//         gender: genderError,
//         role:roleError,
//         guardian_phone_number: guardian_phone_numberError,
//         description: descriptionError,
//         specialization: specializationError,
//       });
//     }

//     const newUser = {
//       firstName: fname,
//       lastName: lname,
//       phoneNumber: phone,
//       address: address,
//       email: email,
//       nationalId: cnic,
//       password: password,
//       gender: gender,
//       role: role,

//     };

//     try {
//       const response = await fetch("http://localhost:8082/user/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newUser),
//       });

//       if (response.ok) {
//         console.log("New User is registered!!!");
//         if (role === "COUNSELOR") {
//           const counselorData = {
//             specialization: specialization,
//             description: description,
//           };
//           const counselorResponse = await fetch(
//             "http://localhost:8081/counselor/post",
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify(counselorData),
//             }
//           );
//           if (counselorResponse.ok) {
//             console.log("Counselor data is saved!");
//           } else {
//             console.log("Failed to save counselor data.");
//           }
//         } else if (role === "PATIENT") {
//           const patientData = {
//             guardian_phone_number: guardian_phone_number,
//           };
//           const patientResponse = await fetch(
//             "http://patient-app.us-west-2.elasticbeanstalk.com/patient/add",
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify(patientData),
//             }
//           );
//           if (patientResponse.ok) {
//             console.log("Patient data is saved!");
//           } else {
//             console.log("Failed to save patient data.");
//           }
//         }
//         console.log(newUser);
//         resetForm();
//       } else {
//         console.log("Some error occurred");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const validateRole=(role)=>{
//     if(!role){
//       return "Select the role"
//     }
//     return null;
//   }

//   const validateFname = (fname) => {
//     if (!fname) {
//       return "First name is required";
//     }
//     return null;
//   };

//   const validateLname = (lname) => {
//     if (!lname) {
//       return "Last name is required";
//     }
//     return null;
//   };

//   const validatePhone = (phone) => {
//     const phoneRegex = /^\d{10}$/;
//     if (!phone) {
//       return "Phone number is required";
//     } else if (!phoneRegex.test(phone)) {
//       return "Invalid phone number";
//     }
//     return null;
//   };

//   const validateAddress = (address) => {
//     if (!address) {
//       return "Address is required";
//     }
//     return null;
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email) {
//       return "Email is required";
//     } else if (!emailRegex.test(email)) {
//       return "Invalid email address";
//     }
//     return null;
//   };

//   const validateCnic = (cnic) => {
//     const cnicRegex = /^\d{5}-\d{7}-\d$/;
//     if (!cnic) {
//       return "CNIC is required";
//     } else if (!cnicRegex.test(cnic)) {
//       return "Invalid CNIC format (e.g., 12345-1234567-1)";
//     }
//     return null;
//   };

//   const validatePassword = (password) => {
//     if (!password) {
//       return "Password is required";
//     } else if (password.length < 6) {
//       return "Password must be at least 6 characters long";
//     }
//     return null;
//   };

//   const validateGender = (gender) => {
//     if (!gender) {
//       return "Gender is required";
//     }
//     return null;
//   };
//   const validateGuardianPhoneNumber = (guardian_phone_number) => {
//     const phoneRegex = /^\d{10}$/;
//     if (!guardian_phone_number) {
//       return "Guardian phone number is required";
//     } else if (!phoneRegex.test(guardian_phone_number)) {
//       return "Invalid phone number";
//     }
//     return null;
//   };

//   const validateSpecialization = (specialization) => {
//     if (!specialization) {
//       return "Specialization is required";
//     }
//     return null;
//   };

//   const validateDescription = (description) => {
//     if (!description) {
//       return "Description is required";
//     }
//     return null;
//   };

//   const handleGenderChange = (event) => {
//     setGender(event.target.value);
//   };

//   const handleRoleChange = (event) => {
//     setRole(event.target.value);
//   };

//   return (
//     <>
//       <div
//        className="signup-container"
//         style={{
//           backgroundImage: `url(${plan_background})`,
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           minHeight: "100vh",
//           width: "100vw",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",

//         }}>
//         <Box
//           component="form"
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             // backgroundColor: "white",
//             padding: "2rem",
//             borderRadius: "5px",
//             // maxWidth: "400px",
//             // width: "90%",
//             boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
//           }}
//           noValidate
//           autoComplete="off"
//           onSubmit={handleForm}
//         >
//           <div>
//             <h1
//               style={{
//                 fontFamily: "Quicksand, sans-serif",
//                 fontSize: "2.5rem",
//                 fontWeight: "bolder",
//                 marginBottom: "2rem",
//                 textAlign: "center",
//               }}>
//               Sign Up
//             </h1>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 marginBottom: "1.5rem",
//               }}>
//               <h2
//                 style={{
//                   fontFamily: "Quicksand, sans-serif",
//                   fontSize: "3.2rem",
//                   fontWeight: "bolder",
//                   textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
//                   marginRight: "10rem",
//                 }}>
//                 PEACE OF MIND
//               </h2>
//               <p
//                 style={{
//                   fontFamily: "Quicksand, sans-serif",
//                   fontSize: "1rem",
//                   fontWeight: "bolder",
//                   marginLeft: "7rem",
//                   marginTop: "-2.5rem",
//                   textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
//                   textAlign: "left",
//                 }}>
//                 It's okay not to be okay
//               </p>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 marginBottom: "30px",
//                 borderRadius: "5px",
//                 marginLeft: "25rem",
//                 marginTop: "-10rem",
//               }}>
//               <div style={{ marginRight: "10%" }}>
//                 <img
//                   src={doctor}
//                   style={{ width: "5rem", height: "5rem" }}
//                 />{" "}
//                 <br />
//                 <FormControlLabel
//                   value="COUNSELOR"
//                   control={<Radio />}
//                   label="COUNSELOR"
//                   helperText={errors.role}
//                   checked={role === "COUNSELOR"}
//                   onChange={handleRoleChange}
//                 />
//               </div>
//               <div style={{ marginTop: "" }}>
//                 <img
//                   src={patient}
//                   style={{ width: "5rem", height: "5rem" }}
//                 />{" "}
//                 <br />
//                 <FormControlLabel
//                   value="PATIENT"
//                   control={<Radio />}
//                   label="PATIENT"
//                   helperText={errors.role}
//                   checked={role === "PATIENT"}
//                   onChange={handleRoleChange}
//                 />
//               </div>
//             </div>
//             <div
//               className="firstrow"
//               style={
//                 //start
//                 {
//                   display: "flex",
//                   marginLeft: "50rem",
//                   marginTop: "1rem",
//                 }
//               }>
//               <div style={{}}>
//                 {/* <label style={{ marginRight: "6rem", fontSize: "0.8rem" }}>Enter Your First Name:</label> */}
//                 <TextField
//                   id="outlined-multiline-flexible"
//                   label="First Name"
//                   error={errors.fname ? true : false}
//                   helperText={errors.fname} //error setting
//                   value={fname}
//                   onChange={(e) => setFname(e.target.value)}
//                 />
//               </div>
//               <div
//                 style={{
//                   paddingLeft: "1rem",
//                 }}>
//                 <TextField
//                   id="outlined-multiline-flexible"
//                   label="Last Name"
//                   error={errors.lname ? true : false}
//                   helperText={errors.lname}
//                   value={lname}
//                   onChange={(e) => setLname(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div
//               className="secrow"
//               style={
//                 //start
//                 {
//                   display: "flex",
//                   marginLeft: "50rem",
//                   marginTop: "1rem",
//                 }
//               }>
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                 }}>
//                 {/* <label style={{ marginRight: "8rem", fontSize: "0.8rem", color: "white" }}>Enter Your Email:</label> */}
//                 <TextField
//                   id="outlined-multiline-flexible"
//                   label="Email Address"
//                   error={errors.email ? true : false}
//                   helperText={errors.email}
//                   fullWidth
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   paddingLeft: "1rem",
//                 }}>
//                 {/* <label style={{ marginRight: "8rem", fontSize: "0.8rem" }}>Enter Your CNIC:</label> */}
//                 <TextField
//                   id="outlined-multiline-flexible"
//                   label="CNIC"
//                   error={errors.cnic ? true : false}
//                   helperText={errors.cnic}
//                   value={cnic}
//                   onChange={(e) => setCnic(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className="thirdrow">
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   marginLeft: "50rem",
//                 }}>
//                 {role === "COUNSELOR" && (
//                   <div
//                     style={{
//                       marginTop: "1rem",
//                       display: "flex",
//                       FlexDirection: "row",
//                       width: "100%",
//                     }}>
//                     <div>
//                       <TextField
//                         id="outlined-multiline-flexible"
//                         label="Specialization"
//                         error={errors.specialization ? true : false}
//                         helperText={errors.specialization}
//                         value={specialization}
//                         onChange={(e) => setSpecialization(e.target.value)}
//                       />
//                     </div>
//                     <div>
//                       <TextField
//                         style={{ marginLeft: "1.5rem" }}
//                         id="outlined-multiline-flexible"
//                         label="Description"
//                         error={errors.description ? true : false}
//                         helperText={errors.description}
//                         multiline
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                       />
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//             {/*  third row */}

//             <div
//               className="fourthrow"
//               style={
//                 //start
//                 {
//                   display: "flex",
//                   marginLeft: "50rem",
//                   marginTop: "1rem",
//                 }
//               }>
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                 }}>
//                 <TextField
//                   id="outlined-multiline-flexible"
//                   label="Password"
//                   type="password"
//                   error={errors.password ? true : false}
//                   helperText={errors.password}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />

//                 <div
//                   style={{
//                     paddingLeft: "1rem",
//                   }}>
//                   <TextField
//                     id="outlined-multiline-flexible"
//                     label="phone"
//                     error={errors.phone ? true : false}
//                     helperText={errors.phone}
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                   />
//                 </div>
//               </div>
//             </div>
//             {/*fourth row */}
//             <div
//               className="fifthrow"
//               style={
//                 //start
//                 {
//                   display: "flex",
//                   marginLeft: "50rem",
//                   marginTop: "1rem",
//                 }
//               }>
//               <div className="guardianNumber">
//                 {role === "PATIENT" && (
//                   <div style={{}}>
//                     <TextField
//                       id="outlined-multiline-flexible"
//                       label="guardian_phone_number"
//                       error={errors.guardian_phone_number ? true : false}
//                       helperText={errors.guardian_phone_number}
//                       value={guardian_phone_number}
//                       onChange={(e) => setGuardian_phone_number(e.target.value)}
//                     />
//                   </div>
//                 )}
//               </div>
//               <div style={{ marginTop: "5px", marginLeft: "10px" }}>
//                 <p>
//                   Select Gender:
//                   <FormControl
//                     component="fieldset"
//                     error={errors.gender ? true : false}>
//                     <RadioGroup
//                       aria-label="gender"
//                       name="gender"
//                       value={gender}
//                       onChange={handleGenderChange}
//                       style={{
//                         flexDirection: "row",
//                         marginTop: "-10px",
//                         paddingLeft: "1rem",
//                       }}>
//                       <FormControlLabel
//                         value="female"
//                         control={<Radio />}
//                         label="Female"
//                       />
//                       <FormControlLabel
//                         value="male"
//                         control={<Radio />}
//                         label="Male"
//                       />
//                     </RadioGroup>
//                     {errors.gender && (
//                       <div style={{ color: "red" }}>{errors.gender}</div>
//                     )}
//                   </FormControl>
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div
//             style={{
//               marginBottom: "1rem",
//               borderRadius: "10px",
//               textAlign: "center",
//             }}>
//             <button
//               type="submit"
//               style={{
//                 borderRadius: "10px",
//                 backgroundColor: "#437781",
//                 color: "white",
//                 fontSize: "20px",
//                 borderColor: "#6b8b85",
//                 width: "7rem",
//                 height: "2.5rem",
//                 marginLeft: "45%",
//                 marginTop: "1rem",
//               }}>
//               Sign Up
//             </button>
//           </div>

//           <p
//             style={{
//               marginLeft: "30rem",
//               paddingTop: "5px",
//               marginBottom: "30px",
//               fontFamily: "Quicksand, sans-serif",
//               fontSize: "13px",
//               fontWeight: "bold",
//               color: "black",
//             }}>
//             Already have an account? <a href="/login">Sign in now</a>
//           </p>
//         </Box>
//       </div>
//     </>
//   );
// };

// export default SignupForm;
