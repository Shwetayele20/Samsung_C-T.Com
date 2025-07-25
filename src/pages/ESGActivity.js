import { Typography, Grid, Button } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import slide1 from "../assets/images/ESG_Activity/card1-img.jpg";
import slide2 from "../assets/images/ESG_Activity/card2-img.png";
import slide3 from "../assets/images/ESG_Activity/card3-img.jpg";

function ESGActivity() {
  return (
    <>
      <Typography
        variant="h3"
        sx={{ mt: 4, fontWeight: "900", textAlign: "left" }}
      >
        ESG Activity
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          paddingTop: "30px",
          "& Button": {
            textTransform: "none",
            borderColor: "white",
            color: "white",
            "&:hover": {
              backgroundColor: "rgb(255,255,255)",
              color: "blue",
            },
          },
        }}
      >
        <Grid size={12} sx={{}}>
          <Box
            sx={{
              position: "relative",
              height: "75vh",
              width: "100%",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            {/* Background Media */}
            <Box
              component="img"
              src={slide1}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Overlay content */}
            <Box
              sx={{
                position: "absolute",
                bottom: 40,
                left: 40,
                color: "white",
                zIndex: 10,
                textAlign: "left",
              }}
            >
              <Typography variant="h4" fontWeight="bold" mb={1}>
                Sustainable growth for a better tomorrow
              </Typography>
              <Button variant="outlined" sx={{}}>
                Learn More
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid size={3} sx={{}}>
          <Box
            sx={{
              position: "relative",
              height: "75vh",
              width: "100%",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            {/* Background Media */}
            <Box
              component="img"
              src={slide2}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Overlay content */}
            <Box
              sx={{
                position: "absolute",
                bottom: 40,
                left: 40,
                color: "white",
                zIndex: 10,
                textAlign: "left",
              }}
            >
              <Typography variant="h4" fontWeight="bold" mb={1}>
                Socity
              </Typography>
              <Typography variant="subtitle2" mb={3}>
                Reinforce responsibility for respectful and win-win corporate
                activities
              </Typography>

              <Button variant="outlined">Learn More</Button>
            </Box>
          </Box>
        </Grid>
        <Grid size={9} sx={{}}>
          <Box
            sx={{
              position: "relative",
              height: "75vh",
              width: "100%",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            {/* Background Media */}
            <Box
              component="img"
              src={slide3}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Overlay content */}
            <Box
              sx={{
                position: "absolute",
                bottom: 40,
                left: 40,
                color: "white",
                zIndex: 10,
                textAlign: "left",
              }}
            >
              <Typography variant="h4" fontWeight="bold" mb={1}>
                Environment
              </Typography>
              <Typography variant="subtitle2" mb={3}>
                Participate in global efforts to overcome the climate crisis
              </Typography>
              <Button variant="outlined">Learn More</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default ESGActivity;
