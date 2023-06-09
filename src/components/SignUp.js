import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PersonIcon from '@mui/icons-material/Person';

const SignupForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');

  const resetForm = () => {
    setFname("");
    setLname("");
    setPhone("");
    setAddress("");
    setEmail("");
    setCnic("");
    setPassword("");
    setGender('');
    setRole('');
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
      role: role
    };

    try {
      const response = await fetch("http://localhost:8082/user/signup", {
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
      onSubmit={handleForm} // Add onSubmit attribute to the form
    >
      <div>
        <h1>Sign Up</h1>
        <div style={{ marginRight: '800px', marginTop: '200px', marginBottom: '-200px', fontFamily: 'cursive' }}>
          <h2>PEACE OF MIND</h2>
          <p>It's okay not to be okay</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '19px', borderRadius: '10px' }}>
        <div style={{ marginRight: '20px' }}>
          <MedicalServicesIcon />
          <FormControlLabel
            value="COUNSELOR"
            control={<Radio />}
            label="COUNSELOR"
            checked={role === 'COUNSELOR'}
            onChange={handleRoleChange}
          />
        </div>
        <div>
          <PersonIcon />
          <FormControlLabel
            value="PATIENT"
            control={<Radio />}
            label="PATIENT"
            checked={role === 'PATIENT'}
            onChange={handleRoleChange}
          />
        </div>
      </div>
        <TextField
          id="outlined-multiline-flexible"
          label="First Name"
          required
          value={fname} // Connect value to state variable
          onChange={(e) => setFname(e.target.value)} // Update state on change
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Last Name"
          required
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Phone No"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Address"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="CNIC"
          required
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
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
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '65%', marginTop: '-70px' }}>
          <p style={{ marginRight: '330px' }}>Select Gender</p>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={gender}
              onChange={handleGenderChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      
      <div style={{ marginBottom: '192px', borderRadius: '10px' }}>
        <button type="submit" style={{ borderRadius: '10px', backgroundColor: '#6b8b85', color: 'white',fontSize:'20px' }}>
            Sign Up
        </button>
      </div>
    </Box>
  );
}

export default SignupForm;
