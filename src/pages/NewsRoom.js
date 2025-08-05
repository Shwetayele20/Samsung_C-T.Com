import React, { useRef, useState } from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import slide1 from "../assets/images/Newsroom/istockphoto-1.jpg";
import slide2 from "../assets/images/Newsroom/istockphoto-2.jpg";
import slide3 from "../assets/images/Newsroom/360_F_3.jpg";
import slide4 from "../assets/images/Newsroom/outdoors-4.jpg";
import slide5 from "../assets/images/Newsroom/work-5.jpg";
import slide6 from "../assets/images/Newsroom/istockphoto-6.jpg";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
const newslides = [
  {
    src: slide1,
    titlefront: "Construction",
    subtitle: "Inside the Field : Supporting the Site, Prioritizin",
    date: "2025.07.25",

    titleback: "Global",
    bulletPoints: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate debitis sunt quaerat repudiandae dolorem reiciendis tempora, veniam amet ab doloribus unde expedita recusandae facilis excepturi vero.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptas, perferendis dolor quos quasi exercitationem?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sed explicabo molestias nesciunt amet corporis?",
    ],
    buttonText: "Learn More",
  },
  {
    src: slide2,
    titlefront: "Resort",
    subtitle: "Inside the Field : Supporting the Site, Prioritizin",
    date: "2025.07.25",

    titleback: "Fashion : Resort....",
    bulletPoints: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptas, perferendis dolor quos quasi exercitationem?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sed explicabo molestias nesciunt amet corporis?",
    ],
    buttonText: "Learn More",
  },
  {
    src: slide3,
    titlefront: "Fashion",
    subtitle: "Inside the Field : Supporting the Site, Prioritizin",
    date: "2025.07.25",

    titleback: "Resort",
    bulletPoints: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate debitis sunt quaerat repudiandae dolorem reiciendis ",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptas, perferendis dolor quos quasi exercitationem?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sed explicabo molestias nesciunt amet corporis?",
    ],
    buttonText: "Learn More",
  },
  {
    src: slide4,
    titlefront: "Construction",
    subtitle: "Inside the Field : Supporting the Site, Prioritizin",
    date: "2025.07.25",

    titleback: "Global",
    bulletPoints: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate debitis sunt quaerat repudiandae dolorem reiciendis ",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptas, perferendis dolor quos quasi exercitationem?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sed explicabo molestias nesciunt amet corporis?",
    ],
    buttonText: "Learn More",
  },
  {
    src: slide5,
    titlefront: "Construction",
    subtitle: "Inside the Field : Supporting the Site, Prioritizin",
    date: "2025.07.25",

    titleback: "Construction",
    bulletPoints: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate debitis sunt quaerat ",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptas, perferendis dolor quos quasi exercitationem?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sed explicabo molestias nesciunt amet corporis?",
    ],
    buttonText: "Learn More",
  },
  {
    src: slide6,
    titlefront: "Construction",
    subtitle: "Inside the Field : Supporting the Site, Prioritizin",
    date: "2025.07.25",

    titleback: "Fashion",
    bulletPoints: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate debitis sunt quaerat repudiandae dolorem reiciendis ",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptas, perferendis dolor quos quasi exercitationem?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sed explicabo molestias nesciunt amet corporis?",
    ],
    buttonText: "Learn More",
  },
];

function NewsRoom() {
  const scrollRef = useRef(null);
  const [flippedCards, setFlippedCards] = useState({});

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const toggleFlip = (index, isFlipped) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: isFlipped,
    }));
  };

  return (
    <>
      <Typography
        variant="h3"
        sx={{ mt: 4, fontWeight: "900", textAlign: "left" }}
      >
        NEWSROOM
      </Typography>

      <Box sx={{ marginTop: "30px", background: "#1428A0", borderRadius: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              columnGap: 2,
              "& Button": {
                color: "white",
                border: "2px solid #3B499D",
                paddingX: "15px",
                fontSize: "12px",
              },
            }}
          >
            <Button
              sx={{
                backgroundColor: "white  !important",
                color: "#1428A0  !important",
              }}
            >
              All
            </Button>
            <Button>Corporate</Button>
            <Button>Construction</Button>
            <Button>Trading</Button>
            <Button>Fashion</Button>
            <Button>Resort</Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              columnGap: 2,
              "& Button": {
                padding: "5px",
                color: "white",
                background: "#273bba",
                borderRadius: 2,
                "&:hover": {
                  background: "white",
                  color: "#273bba",
                },
              },
            }}
          >
            <Button onClick={handlePrev}>
              <NavigateBeforeIcon fontSize="large" />
            </Button>
            <Button onClick={handleNext}>
              <NavigateNextIcon fontSize="large" />
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            overflow: "hidden",
            width: "100%",
            position: "absolute",
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          <Typography
            sx={{
              display: "inline-block",
              whiteSpace:'nowrap',
              animation: "marquee 40s linear infinite",
              color: "rgba(255, 255, 255, 0.2)",
              fontWeight: 500,
              fontSize: "200px",
              letterSpacing:'30px',
              textTransform:'uppercase'
            }}
          >
            newsroomactivities
          </Typography>

          <style>
            {`
          @keyframes marquee {
            0%   { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
          </style>
        </Box>

        <Grid container spacing={6} sx={{ padding: "50px", paddingTop: 0 }}>
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              gap: 4,
              overflowX: "hidden",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {newslides.map((slide, index) => (
              <Box
                key={index}
                sx={{ perspective: "1000px" }}
                onMouseEnter={() => toggleFlip(index, true)}
                onMouseLeave={() => toggleFlip(index, false)}
              >
                <Box
                  sx={{
                    width: 350,
                    height: "50vh",
                    position: "relative",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.8s",
                    transform: flippedCards[index]
                      ? "rotateY(-180deg)"
                      : "rotateY(0deg)",
                  }}
                >
                  {/* FRONT SIDE */}
                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    <Card
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 2,
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        component="img"
                        src={slide.src}
                        alt="img"
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 20,
                          left: 20,
                          right: 20,
                          color: "white",
                          zIndex: 2,
                          textAlign: "left",
                        }}
                      >
                        <Typography variant="h6" fontWeight="bold">
                          {slide.titlefront}
                        </Typography>
                        <Typography variant="h5" fontWeight="bold">
                          {slide.subtitle}
                        </Typography>
                        <Typography variant="subtitle2">
                          {slide.date}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          height: "40%",
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                          zIndex: 1,
                        }}
                      />
                    </Card>
                  </Box>

                  {/* BACK SIDE */}
                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      borderRadius: 2,
                      overflow: "hidden",
                      transform: "rotateY(-180deg)",
                      background: "#03A6A1",
                    }}
                  >
                    <Box
                      sx={{
                        padding: "20px",
                        color: "white",
                        textAlign: "left",
                      }}
                    >
                      <Typography variant="h5" fontWeight={"bold"}>
                        {slide.titleback}
                      </Typography>

                      <ul style={{ listStyleType: "none", padding: 0 }}>
                        {slide.bulletPoints.map((point, idx) => (
                          <li
                            key={idx}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              marginBottom: "10px",
                            }}
                          >
                            <CheckBoxOutlinedIcon
                              fontSize="small"
                              sx={{
                                flexShrink: 0,
                                marginTop: "5px",
                                marginRight: "8px",
                              }}
                            />
                            <Typography variant="body2">{point}</Typography>
                          </li>
                        ))}
                      </ul>

                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: "20px",
                          background: "#03A6A1",
                        }}
                      >
                        <Button
                          variant="outlined"
                          sx={{
                            width: "100%",
                            textTransform: "none",
                            borderColor: "white",
                            color: "white",
                            "&:hover": {
                              backgroundColor: "white",
                              color: "#03A6A1",
                            },
                          }}
                        >
                          {slide.buttonText}
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default NewsRoom;
