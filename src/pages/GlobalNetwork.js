import { Box, Button, Typography } from "@mui/material";
import React from "react";
import img from "../assets/images/globalnetwork.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import GlobalNetworkSection from "./GlobalNetworkSection";

const menuItems = [
  "All",
  "Americas",
  "Europe",
  "Middle East/Africa",
  "Asia/Oceania",
];


const globalData = [
  " E&C Global Network ",
  " E&C Global Network ",
  " E&C Global Network ",
];
function GlobalNetwork() {
  return (
    <>
      <Typography
        variant="h3"
        sx={{ mt: 4, fontWeight: "900", textAlign: "left" }}
      >
        GLOBAL NETWORK
      </Typography>

      <Box
        sx={{
          marginTop: "30px",
          background: "#9ECAD6",
          borderRadius: 2,
          padding: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "60%"}}>
           <GlobalNetworkSection/>
            
          </Box>
          <Box sx={{ width: "40%", padding: "30px", textAlign: "center" }}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              voluptatem minima quas, doloribus amet voluptatum explicabo iste
              dolores consectetur nobis non deserunt impedit
            </Typography>

            <Box
              sx={{
                marginTop: "40px",
                paddingBottom: "0px",
                background: "#1428A0",
                display: "flex",
                borderRadius: 2,
                position: "relative",
                height: "8vh",
              }}
            >
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  sx={{
                    color: "rgba(255, 255, 255, 0.6)",
                    textTransform: "none",
                    gap: 2,

                    "&:hover": {
                      color: "white",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      transform: "none",
                      width: 0,
                      height: "2px",
                      backgroundColor: "white",
                      transition: "width 0.3s ease-in-out",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#ffffff",
                color: "#1428A0",
                padding: "25px",
                paddingLeft: "30px",
                paddingRight: "30px",
                borderRadius: 2,
                marginTop: "20px",
              }}
            >
              <Typography variant="h6" fontWeight="bold" color="black">
                Offices
              </Typography>

              <Typography variant="h4" fontWeight="bold" color="#1428A0">
                23
              </Typography>
            </Box>

            {globalData.map((data, index) => (
              <Box
                key={index}
                sx={{
                  border: "1px solid #ffffff",
                  color: "white",
                  padding: "10px",
                  marginTop: "20px",
                  borderRadius: 2,
                  "&:hover": {
                    background: "white",
                    color: "#1428A0",
                  },
                }}
              >
                <Typography
                  variant="title"
                  fontWeight={"bold"}
                  sx={{ textAlign: "center", cursor: "pointer" }}
                >
                  {data}
                  <NavigateNextIcon />
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default GlobalNetwork;
