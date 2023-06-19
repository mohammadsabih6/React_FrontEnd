import React from "react";

import Sidebar from "../global/Sidebar";
import { Box, Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import doctor from "../images/doctor.png";
const UserProfile = () => {
  
  return (
    <>
      <Sidebar />

      <Box
        sx={{
          border: "2px solid green",
          borderRadius: "10px",
          fontFamily: "Quicksand, sans-serif",

          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "0rem 1rem 1rem 7.1rem",
        }}>
        <Box
          sx={{
            margin: "2rem",
          }}>
          <h1>My Profile:</h1>
        </Box>

        <Box
          sx={{
            border: "1px solid green",
            borderRadius: "7px",
            padding: "3rem",
            margin: "0rem 2rem ",
            fontFamily: "Quicksand, sans-serif",

            display: "flex",
            flexDirection: "row",
          }}>
          <img
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "2px solid green",
            }}
            src={doctor}
            alt=""
          />
          <Box
            sx={{
              marginLeft: "2rem",
            }}>
            <h2>Name:</h2>
            <p>Category</p>
          </Box>
        </Box>

        <Box
          sx={{
            border: "1px solid green",
            borderRadius: "7px",
            padding: "2rem",
            margin: "2rem 2rem  ",
            display: "flex",
            fontFamily: "Quicksand, sans-serif",

            flexDirection: "column",
            justifyContent: "space-between",
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <h2>Personal Information:</h2>
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: "10%",
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}>
              Edit
              <IconButton sx={{ color: "white" }}>
                <EditIcon />
              </IconButton>
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}>
            <p>First Name:</p>
            <p>Last Name:</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: "1rem",
            }}>
            <h4>First Name:</h4>
            <h4>Last Name:</h4>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: "2rem",
            }}>
            <p>Email Address:</p>
            <p>Password:</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: "1rem",
            }}>
            <h4>First Name:</h4>
            <h4>Last Name:</h4>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: "2rem",
            }}>
            <p>Phone Number:</p>
            <p>Address</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: "1rem",
            }}>
            <h4>First Name:</h4>
            <h4>Last Name:</h4>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserProfile;
