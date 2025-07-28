import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

function SlideCard({ slide, index }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const HandleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const HandleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <Box
      onMouseEnter={() => HandleMouseEnter(index)}
      onMouseLeave={() => HandleMouseLeave(index)}
      sx={{
        flex: hoveredIndex === null ? 1 : hoveredIndex === index ? 3 : 1,
        position: "relative",
        height: "75vh",
        width: "100%",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={slide.src}
        alt={slide.title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: hoveredIndex === index ? "scale(1.1)" : "none",
          transition: "transform 0.5s ease",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 40,
          left: 40,
          color: "white",
          zIndex: 10,
          textAlign: "left",
          transform:
            hoveredIndex === index ? "translateY(0px)" : "translateY(40px)",
          transition: "all 0.6s ease",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          {slide.title}
        </Typography>
        {slide.subtitle && (
          <Typography variant="subtitle2">{slide.subtitle}</Typography>
        )}
        <Button
          variant="outlined"
          sx={{
            mt: 1,
            opacity: hoveredIndex === index ? 1 : 0,
            transform:
              hoveredIndex === index ? "translateY(0px)" : "translateY(20px)",
            transition: "all 0.5s ease",
          }}
        >
          {slide.buttonText}
        </Button>
      </Box>

      <Box
        onMouseEnter={HandleMouseEnter}
        onMouseLeave={HandleMouseLeave}
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%", // adjust as needed
          background:
            hoveredIndex === index
              ? "linear-gradient(to top, rgba(0, 0, 0, 1), transparent)"
              : "transparent",
          pointerEvents: "none", // allow clicks to pass through
        }}
      />
    </Box>
  );
}

export default SlideCard;
