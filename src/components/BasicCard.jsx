import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const card = (
 <React.Fragment>

    <CardContent style={{backgroundColor: "rgb(	184	215	209)",
              width:'230px',
              height:'25vh',
              justifyContent:"center",
              borderRadius:'30px',
              alignItems:"center",
              paddingLeft:"20px"
             }}>


      <Typography variant="h5" component="div">
       Weekly Appointment
      </Typography>
      <Typography variant="body2">
        You can add any Description here
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    
     <Box
    width='300px'
    display='flex'
    
    justifyContent="center"
    alignItems="center"
    sx={{
        borderRadius:'50px',
    }}
    
    >
      <Card style={{"borderRadius":'30px'}}>{card}</Card>
    </Box>
  );
}


