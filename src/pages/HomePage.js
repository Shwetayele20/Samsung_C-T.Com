import React, { useState } from "react";
import {
  Box,
  Grid,
  Stack,
  Card,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import slide1 from "../assets/images/Home/slide1.mp4";
import slide2 from "../assets/images/Home/slide2.mp4";
import slide3 from "../assets/images/Home/slide3.mp4";
import slide4 from "../assets/images/Home/slide4.mp4";
import media1 from "../assets/images/Home/card2-slide1.jpg";
import media2 from "../assets/images/Home/card2-slide2.jpg";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiGreaterThan } from "react-icons/pi";

const slides1 = [
  {
    src: slide1,
    title: "[Spaces] Adding Value",
    subtitle: "Creating FutureScape",
    buttonText: "Learn More",
  },
  {
    src: slide2,
    title: "[Happiness] Adding Value",
    subtitle: "Design Happiness,Delight Everyone",
    buttonText: "Learn More",
  },
  {
    src: slide3,
    title: "[Beauty] Adding Value",
    subtitle: "Global Innovator Lifestyle",
    buttonText: "Learn More",
  },
  {
    src: slide4,
    title: "[Network] Adding Value",
    subtitle: "Global Value Creating Comapany",
    buttonText: "Learn More",
  },
];

const slides2 = [
  {
    src: media1,
    title: "Corporate Governance Report",
  },
  {
    src: media2,
    title: "Sustainability Report",
  },
];

function HomePage() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [current , setCurrent] = useState(0)

  const handlePrev = () => {
      setCurrentIndex((prev) => (prev - 1 + slides1.length) % slides1.length);
      setCurrent((prev) => (prev - 1 + slides2.length) % slides2.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides1.length);
    setCurrent((prev) => (prev + 1) % slides2.length);

  };

  const currentSlide = slides1[currentIndex];
  const currentSlide2 = slides2[current]

  return (
    <>
      <Grid container spacing={2} sx={{paddingTop:'24px'}}>
        <Grid size={9}>
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
              component="video"
              src={currentSlide.src}
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
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
                textAlign:'left'
              }}
            >
              <Typography variant="h4" fontWeight="bold" mb={1}>
                {currentSlide.title}
              </Typography>
              <Typography variant="subtitle1" mb={3}>
                {currentSlide.subtitle}
              </Typography>
              <Button 
                variant="outlined"
                sx={{
                  textTransform: "none",
                  borderColor: "white",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgb(255,255,255)",
                    color:'blue'
                  },
                }}
              >
                {currentSlide.buttonText}
              </Button>
              
            </Box>

            {/* Left Arrow */}
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                right: 80,
                bottom: 20,
                color: "white",
                zIndex: 10,
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>

            {/* Right Arrow */}
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: 40,
                bottom: 20,
                color: "white",
                zIndex: 10,
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>

            <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "150px", // adjust as needed
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)",
          pointerEvents: "none", // allow clicks to pass through
        }}
      />
          </Box>
        </Grid>

        {/* Side Cards */}
        <Grid size={3} >
          <Box
            sx={{
              position: "relative",
              height: "75vh",
              width: "100%",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
          <Stack spacing={2}>
        
            <Card
              sx={{
              position: "relative",
              height: "55vh",
              }}
            >
              {/* Media */}
              <Box
                component="img"
                src={slides2[current].src}
                alt="slide"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Top Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 35,
                  left: 25,
                  color: "white",
                  zIndex: 1,
                }}
              >
                <Typography variant="subtitle2" fontWeight="bold">
                  ESG
                </Typography>
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  top: 35,
                  right: 25,
                  color: "white",
                  zIndex: 1,
                  background:'black',
                  opacity:0.4,
                  padding:'3px',
                  width:'20%',
                  borderRadius:'20px'
                }}
              >
                <Typography variant="subtitle2" fontWeight="bold">{`${current + 1} / ${slides2.length}`}</Typography>
              </Box>

              {/* Arrows */}
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: 8,
                  transform: "translateY(-50%)",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgb(255,255,255)",
                    borderColor: "white",
                    color:'black'
                }
              }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>
              <IconButton
                onClick={handleNext}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: 8,
                  transform: "translateY(-50%)",
                  background:'rgba(255,255,255,0.1)',
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgb(255,255,255)",
                    borderColor: "white",
                    color:'black'
                }
              }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>


              {/* Overlay content */}
            <Box
              sx={{
                  position: "absolute",
                  bottom: 20,
                  color: "white",
                  zIndex: 1,
                  textAlign:'left',
                  paddingLeft:'30px',
                  display:'flex',
                }}
                
            >
              <Box>
                <Typography variant="caption" fontWeight="bold">
                  RESOURCE REPORT
                </Typography>
                <Typography variant="h5" fontWeight="bold" >
                {currentSlide2.title}
                </Typography>
                </Box>
                <Box sx={{textAlign:'center' , paddingTop:'24px' , paddingRight:'30px'}}>
                <PiGreaterThan />
                </Box> 
              </Box>
            </Card>
            <Card
              sx={{
              position: "relative",
              height: "20vh",
              width: "100%",
              borderRadius: 2,
              background:'#03A6A1',
              color: "white",
              padding:'20px',
              }}
            >
                <Typography variant="subtitle" fontWeight="bold" sx={{paddingTop:'0px'}}>
                  SHARE PRICE | Samsung C&T (028260)
                </Typography>
                <Box sx={{ display:'flex' , paddingTop:'30px', columnGap:3}}>
                <Typography variant="h4" fontWeight="bold">
                  170,200
                </Typography>
                <Typography variant="h6" fontWeight="bold"><MdOutlineArrowDropDown />
                        4,000 -2.30%</Typography>
              </Box>
            </Card>
          </Stack>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default HomePage;
