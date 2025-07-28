import { Typography, Grid } from "@mui/material";
import React  from "react";
import slide1 from "../assets/images/ESG_Activity/card1-img.jpg";
import slide2 from "../assets/images/ESG_Activity/card2-img.png";
import slide3 from "../assets/images/ESG_Activity/card3-img.jpg";
import SlideCard from "./SlideCard";

const slides = [
  {
    src: slide1,
    title: "Sustainable growth for a better tomorrow",
    buttonText: "Learn More",
  },
  {
    src: slide2,
    title: "Socity",
    subtitle: "Reinforce responsibility for respectful and win-win corporate activities",
    buttonText: "Learn More",
  },
  {
    src: slide3,
    title: "Environment",
    subtitle: " Participate in global efforts to overcome the climate cristies",
    buttonText: "Learn More",
  },
];
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
              marginTop: "10px",
              "&:hover": {
                backgroundColor: "rgb(255,255,255)",
                color: "blue",
              },
            },
          }}
        >
          {/* First Row - Full Width */}
          <Grid size={12}  >
            <SlideCard slide={slides[0]} />
          </Grid>

          {/* Second Row - 3 + 9 layout */}
          <Grid size={3} >
            <SlideCard slide={slides[1]} />
          </Grid>
          <Grid size={9} >
            <SlideCard slide={slides[2]} />
          </Grid>
          
          

        </Grid>
    </>
  );
}

export default ESGActivity;
