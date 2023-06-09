import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PersonIcon from '@mui/icons-material/Person';

const Loginform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin=(e)=>{

    e.preventDefault();
    console.log('hello');
    fetch('http://localhost:8080/user/login',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email,password})
    })

    .then(response=>{
      if(response.ok){
        console.log("Login SuccessFully");
      }
      else{
        console.log("Login Fail");
      }
    })
    .catch(error=>{
      console.error("Error",error);
    })
  }

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
    >
      <div>
        <h1>Sign Up</h1>
        <div style={{ marginTop: '100px', fontFamily: 'cursive' }}>
          <h2>PEACE OF MIND</h2>
          <p>It's okay not to be okay</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '19px', borderRadius: '10px' }}>
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
      <div style={{ marginRight: '227px',marginLeft:'220px'}}>
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
        <button type="submit" onClick={handleLogin} style={{ borderRadius: '10px', backgroundColor: '#6b8b85', color: 'white',fontSize:'20px' }}>
            Login
        </button>
      </div>
    </Box>
  );
}

export default Loginform;
