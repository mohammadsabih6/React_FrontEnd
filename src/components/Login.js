import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PersonIcon from '@mui/icons-material/Person';
import { borderColor, width } from '@mui/system';

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
          borderColor:"#b0d2cb"
        },
        marginTop:'150px',
        backgroundImage:"url(https://thorekandersonville.org/wp-content/uploads/2023/04/Thorek-Andersonville-News.png)",
        backgroundRepeat:'no-repeat',
        borderRadius:'30px',
        marginLeft:'250px',
        height:'300%',
        width:'70%'
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{marginLeft:'600px'}}>
        
        <div style={{ marginTop: '50px', fontFamily: 'cursive' }}>
          <h2>PEACE OF MIND</h2>
          <p>It's okay not to be okay</p>
        </div>
        <h1>Login</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '19px', borderRadius: '10px' }}>
      </div>
      </div>

      <div style={{marginLeft:'600px'}}>
        <TextField
          id="outlined-multiline-flexible"
          label="Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div style={{ marginLeft:'600px',marginTop:'15px' }}>
        <TextField
          id="outlined-multiline-flexible"
          label="Password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <Text
          name="password"
        />
      </div>
      
      <div style={{ marginBottom: '192px', borderRadius: '10px' ,marginLeft:'600px'}}>
        <button type="submit" onClick={handleLogin} style={{ borderRadius: '10px',padding:'10px',marginTop:'20px', backgroundColor: '#6b8b85', color: 'white',fontSize:'20px' }}>
            Login
        </button>
      </div>
    </Box>
  );
}

export default Loginform;
