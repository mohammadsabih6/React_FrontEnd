import React, { useState } from 'react';
import { Box } from '@mui/material';
// import Search from './Search';
import BasicCard from '../components/BasicCard';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TappointLink from '../components/TappointLink';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating';

const styles = {
  container: {
    maxWidth: 1500,
    marginTop: '-1% !important',
    padding: '20px',
    // backgroundColor: '#f5f5f5',
    margin: '0 auto',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 280px)',
    rowGap: '15px',
    columnGap: '0px',
    justifyContent: 'center',
    marginTop: '90px !important',

    // Add media query for smaller screens
    '@media (max-width: 1000px)': {
      // import Card from '../../components/patient/Card';
      display: 'flex', // Use flexbox layout
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: '10px',
      columnGap: '10px',
    },
  },
  rightContainer: {
    backgroundColor: "#D3D3D3",
    padding: '20px',
    marginLeft: '10rem',
  },
};

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [rating, setRating] = useState(0); // State to hold the rating value

  const handleRatingChange = (event, newRating) => {
    setRating(newRating);
  };

  return (
    <Box sx={{ ...styles.container, marginLeft: isSmallScreen ? 10 : theme.spacing(10) }}>
      <TappointLink />
      {/* Suggested for you */}
      <Box style={{marginLeft:'30rem',justifyContent:'space-between'}}sx={{ ...styles.cardContainer, marginLeft: isSmallScreen ? 1 : theme.spacing(11) }}>
        <BasicCard />

        <BasicCard />
      </Box>
      <Card />

      {/* Rating component */}
      <Box display="flex" justifyContent="space-around">
        <Box >
          <Rating sx={styles.rightContainer}   style={{borderRadius:'1rem'}}name="rating" value={rating} onChange={handleRatingChange} />
          <Typography variant="h5" component="div">
            Overall Ratings
          </Typography>
        </Box>

        <Box sx={styles.rightContainer}>
          <Rating name="rating" value={rating} onChange={handleRatingChange} />
          <Typography variant="h5" component="div">
            Weekly Appointment
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
