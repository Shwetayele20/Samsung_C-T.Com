import React, { useState, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import slide1 from "../assets/images/Home/slide1.mp4";
import slide2 from "../assets/images/Home/slide2.mp4";
import slide3 from "../assets/images/Home/slide3.mp4";
import slide4 from "../assets/images/Home/slide4.mp4";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const slides = [
  {
    src: slide1,
    title: "E&C",
    subtitle: "We deliver the highest value to customer",
    buttonText: "Learn More",
  },
  {
    src: slide2,
    title: "T&I",
    subtitle: "We capture opportunities in global trends ",
    buttonText: "Learn More",
  },
  {
    src: slide3,
    title: "Fashion",
    subtitle: "We create culture values with Fashion",
    buttonText: "Learn More",
  },
  {
    src: slide4,
    title: "Resort",
    subtitle: "We redefine the lesuire experience",
    buttonText: "Learn More",
  },
];

function Business() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const videoRef = useRef([]);
  const [pausedStates, setPausedStates] = useState(
    Array(slides.length).fill(false)
  );

  const HandleMouseEnter = (index) => {
    setHoveredIndex(index);
    if (!pausedStates[index]) {
      videoRef.current[index]?.play();
    }
  };

  const HandleMouseLeave = (index) => {
    setHoveredIndex(null);
    videoRef.current[index]?.pause();
  };

  const handlePauseClick = (index) => {
    const updatedPaused = [...pausedStates];
    updatedPaused[index] = !updatedPaused[index];
    setPausedStates(updatedPaused);

    const video = videoRef.current[index];
    if (video) {
      if (updatedPaused[index]) {
        video.pause();
      } else {
        video.play();
      }
    }
  };

  return (
    <>
      <Typography
        sx={{ mt: 4, fontWeight: "900", textAlign: "left" }}
        variant="h3"
      >
        OUR BUSINESS
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mt: 2,
          height: "75vh",
          transition: "all 0.3s ease",
        }}
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            onMouseEnter={() => HandleMouseEnter(index)}
            onMouseLeave={() => HandleMouseLeave(index)}
            sx={{
              flex: hoveredIndex === null ? 1 : hoveredIndex === index ? 3 : 1,
              borderRadius: 2,
              overflow: "hidden",
              position: "relative",
              transition: "flex 0.1s ease-in-out",
              boxShadow: hoveredIndex === index ? 5 : 1,
              cursor: "pointer",
            }}
          >
            {/* Background Media */}
            <Box
              component="video"
              src={slide.src}
              ref={(el) => (videoRef.current[index] = el)}
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
                right: 40,
                color: "white",
                zIndex: 10,
                display: "flex",
                columnGap: 10,
              }}
            >
              <Box
                sx={{
                  textAlign: "left",
                  width: "80%",
                  transform:
                    hoveredIndex === index
                      ? "translateY(0px)"
                      : "translateY(40px)",
                  transition: "all 0.6s ease",
                  
                }}
              >
                <Typography variant="h4" fontWeight="bold" mb={1}>
                  {slide.title}
                </Typography>
                <Typography variant="subtitle2" mb={3}>
                  {slide.subtitle}
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    borderColor: "white",
                    color: "white",
                    opacity: hoveredIndex === index ? 1 : 0,
                    transform:
                      hoveredIndex === index
                        ? "translateY(0px)"
                        : "translateY(20px)",
                    transition: "all 0.5s ease",
                    "&:hover": {
                    backgroundColor: "rgb(255,255,255)",
                    color:'blue'
                  },
                  }}
                >
                  {slide.buttonText}
                </Button>
              </Box>

              {hoveredIndex === index && (
                <Box
                  onClick={() => handlePauseClick(index)}
                  sx={{
                    marginTop: "80px",
                    background: "rgba(255, 255, 255, 0.6)",
                    borderRadius: "50%",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "50px",
                    width: "50px",
                  }}
                >
                  {pausedStates[index] ? <PlayArrowIcon /> : <PauseIcon />}
                </Box>
              )}
            </Box>

            <Box
              onMouseEnter={HandleMouseEnter}
              onMouseLeave={HandleMouseLeave}
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "150px", // adjust as needed
                background:
                  hoveredIndex === index
                    ? "linear-gradient(to top, rgba(0, 0, 0, 1), transparent)"
                    : "transparent",
                pointerEvents: "none", // allow clicks to pass through
              }}
            />
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Business;
