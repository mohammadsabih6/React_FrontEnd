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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `url(${plan_background})`,
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "2rem",
          borderRadius: "10px",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <img
          src={formData.role === "COUNSELOR" ? doctor : patient}
          alt="role"
          style={{ width: "100px", marginBottom: "1rem" }}
        />
        <Typography variant="h5" align="center" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <TextField
            label="First Name"
            name="fname"
            value={formData.fname}
            onChange={handleInputChange}
            error={!!errors.fname}
            helperText={errors.fname}
            required
          />
          <TextField
            label="Last Name"
            name="lname"
            value={formData.lname}
            onChange={handleInputChange}
            error={!!errors.lname}
            helperText={errors.lname}
            required
          />
          <TextField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            error={!!errors.phone}
            helperText={errors.phone}
            required
          />
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            error={!!errors.address}
            helperText={errors.address}
            required
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            error={!!errors.email}
            helperText={errors.email}
            required
          />
          <TextField
            label="CNIC"
            name="cnic"
            value={formData.cnic}
            onChange={handleInputChange}
            error={!!errors.cnic}
            helperText={errors.cnic}
            required
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
          />
          <FormControl component="fieldset" error={!!errors.gender}>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
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
              <FormControlLabel
                value="OTHER"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
            {!!errors.gender && (
              <Typography variant="caption" color="error">
                {errors.gender}
              </Typography>
            )}
          </FormControl>
          <FormControl component="fieldset" error={!!errors.role} required>
            <RadioGroup
              row
              aria-label="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
            >
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
              />
              <TextField
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                error={!!errors.description}
                helperText={errors.description}
                required={formData.role === "COUNSELOR"}
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
            />
          )}
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Sign Up
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default SignupForm;
