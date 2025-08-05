  
"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Paper, useTheme } from "@mui/material";
 
// Define proper types for amCharts
interface AmChartsRoot {
  dispose: () => void;
  _logo?: { dispose: () => void };
  setThemes: (themes: any[]) => void;
  container: {
    children: {
      push: (chart: any) => any;
    };
  };
}
 
const data = [
  "Corporate  Head Quarters",
  "Engineering Office",
  "Manufacturing Plants",
];
 
// Marker data for key countries with corrected coordinates for 3D projection
// Enhanced marker data with major cities only
const markerData = [
  // Major Indian Cities (Orange markers)
  {
    id: "pune",
    title: "Pune",
    latitude: 18.5204,
    longitude: 73.8567,
    installations: 56,
    color: "#FF6B35",
    size: 8,
  },
  {
    id: "bangalore",
    title: "Bangalore",
    latitude: 12.9716,
    longitude: 77.5946,
    installations: 62,
    color: "#FF6B35",
    size: 8,
  },
  {
    id: "chennai",
    title: "Chennai",
    latitude: 13.0827,
    longitude: 80.2707,
    installations: 33,
    color: "#FF6B35",
    size: 7,
  },
  {
    id: "kolkata",
    title: "Kolkata",
    latitude: 22.5726,
    longitude: 88.3639,
    installations: 8,
    color: "#FF6B35",
    size: 6,
  },
  {
    id: "new_delhi",
    title: "New Delhi",
    latitude: 28.6139,
    longitude: 77.209,
    installations: 9,
    color: "#FF6B35",
    size: 6,
  },
  {
    id: "hyderabad",
    title: "Hyderabad",
    latitude: 17.385,
    longitude: 78.4867,
    installations: 10,
    color: "#FF6B35",
    size: 6,
  },
  // Added locations
  {
    id: "ahmedabad",
    title: "Ahmedabad",
    latitude: 23.0225,
    longitude: 72.5714,
    installations: 1,
    color: "#FF6B35",
    size: 6,
  },
  {
    id: "chandigarh",
    title: "Chandigarh",
    latitude: 30.7333,
    longitude: 76.7794,
    installations: 1,
    color: "#FF6B35",
    size: 6,
  },
  {
    id: "faridabad",
    title: "Faridabad",
    latitude: 28.4089,
    longitude: 77.3178,
    installations: 23,
    color: "#FF6B35",
    size: 6,
  },
  {
    id: "ghaziabad",
    title: "Ghaziabad",
    latitude: 28.6692,
    longitude: 77.4538,
    installations: 10,
    color: "#FF6B35",
    size: 6,
  },
  // Major International Cities (Blue markers)
  {
    id: "dubai",
    title: "Dubai, UAE",
    latitude: 25.2048,
    longitude: 55.2708,
    installations: 4,
    color: "#4A90E2",
    size: 6, // Reduced size
  },
  {
    id: "abu_dhabi",
    title: "Abu Dhabi, UAE",
    latitude: 24.4539,
    longitude: 54.3773,
    installations: 5,
    color: "#4A90E2",
    size: 6, // Reduced size
  },
  {
    id: "riyadh",
    title: "Riyadh, Saudi Arabia",
    latitude: 24.7136,
    longitude: 46.6753,
    installations: 1,
    color: "#4A90E2",
    size: 5, // Reduced size
  },
  {
    id: "jeddah",
    title: "Jeddah, Saudi Arabia",
    latitude: 21.4858,
    longitude: 39.1925,
    installations: 1,
    color: "#4A90E2",
    size: 5, // Reduced size
  },
  {
    id: "colombo",
    title: "Colombo, Sri Lanka",
    latitude: 6.9271,
    longitude: 79.8612,
    installations: 3,
    color: "#4A90E2",
    size: 5, // Reduced size
  },
  {
    id: "singapore",
    title: "Singapore",
    latitude: 1.3521,
    longitude: 103.8198,
    installations: 1,
    color: "#4A90E2",
    size: 5, // Reduced size
  },
  {
    id: "bangkok",
    title: "Bangkok, Thailand",
    latitude: 13.7563,
    longitude: 100.5018,
    installations: 1,
    color: "#4A90E2",
    size: 5, // Reduced size
  },
  {
    id: "cairo",
    title: "Cairo, Egypt",
    latitude: 30.0444,
    longitude: 31.2357,
    installations: 2,
    color: "#4A90E2",
    size: 5, // Reduced size
  },
  {
    id: "amman",
    title: "Amman, Jordan",
    latitude: 31.9454,
    longitude: 35.9284,
    installations: 1,
    color: "#4A90E2",
    size: 5, // Reduced size
  },
  {
    id: "lagos",
    title: "Lagos, Nigeria",
    latitude: 6.5244,
    longitude: 3.3792,
    installations: 1,
    color: "#4A90E2",
    size: 5, // Reduced size
  },
  {
    id: "muscat",
    title: "Muscat, Oman",
    latitude: 23.5859,
    longitude: 58.4059,
    installations: 1,
    color: "#4A90E2",
    size: 5, // Reduced size
  },
  {
    id: "karachi",
    title: "Karachi, Pakistan",
    latitude: 24.8607,
    longitude: 67.0011,
    installations: 1,
    color: "#4A90E2",
    size: 5, // Reduced size
  },
  {
    id: "lusaka",
    title: "Lusaka, Zambia",
    latitude: -15.3875,
    longitude: 28.3228,
    installations: 1,
    color: "#4A90E2",
    size: 5, // Reduced size
  },
  {
    id: "rome",
    title: "Rome, Italy",
    latitude: 41.9028,
    longitude: 12.4964,
    installations: 1,
    color: "#4A90E2",
    size: 5, // Reduced size
  },
  {
    id: "new_york",
    title: "New York, USA",
    latitude: 40.7128,
    longitude: -74.006,
    installations: 1,
    color: "#4A90E2",
    size: 5, // Reduced size
  },
];
 
interface WindowWithAmCharts extends Window {
  am5?: any;
  am5map?: any;
  am5themes_Animated?: any;
  am5geodata_worldIndiaLow?: any;
}
 
export default function GlobalNetworkSection() {
  const chartRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<AmChartsRoot | null>(null);
  const animationRef = useRef<any>(null);
  const theme = useTheme();
 
  // State for animated counters
  const [countriesCount, setCountriesCount] = useState(0);
  const [regionsCount, setRegionsCount] = useState(0);
 
  // Animated counter effect
  useEffect(() => {
    const animateCounter = (
      target: number,
      setter: (value: number) => void,
      duration: number = 400
    ) => {
      // Reduced from 1000 to 400
      let start = 0;
      const increment = target / (duration / 10); // Reduced interval to 10ms for very fast updates
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 10); // Reduced from 30ms to 10ms for much faster updates
      return timer;
    };
 
    // Start animations with minimal delay
    const timer1 = setTimeout(
      () => animateCounter(50, setCountriesCount, 300),
      100
    ); // Reduced delay to 100ms, duration to 300ms
    const timer2 = setTimeout(
      () => animateCounter(7, setRegionsCount, 200),
      150
    ); // Reduced delay to 150ms, duration to 200ms
 
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
 
  useEffect(() => {
    // Dynamically load amCharts 5 scripts
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };
 
    const initChart = async () => {
      try {
        // Cleanup existing root if it exists
        if (rootRef.current) {
          rootRef.current.dispose();
          rootRef.current = null;
        }
 
        // Load all required amCharts scripts - using India-specific geodata
        await loadScript("https://cdn.amcharts.com/lib/5/index.js");
        await loadScript("https://cdn.amcharts.com/lib/5/map.js");
        await loadScript(
          "https://cdn.amcharts.com/lib/5/geodata/worldIndiaLow.js"
        );
        await loadScript("https://cdn.amcharts.com/lib/5/themes/Animated.js");
 
        // Wait a bit for scripts to be fully loaded
        await new Promise((resolve) => setTimeout(resolve, 500));
 
        // Check if amCharts is available
        const windowWithAmCharts = window as WindowWithAmCharts;
        if (typeof windowWithAmCharts.am5 === "undefined") {
          console.error("amCharts 5 not loaded");
          return;
        }
 
        const am5 = windowWithAmCharts.am5;
        const am5map = windowWithAmCharts.am5map;
        const am5themes_Animated = windowWithAmCharts.am5themes_Animated;
        const am5geodata_worldIndiaLow =
          windowWithAmCharts.am5geodata_worldIndiaLow;
 
        // Validate all required modules are loaded
        if (
          !am5 ||
          !am5map ||
          !am5themes_Animated ||
          !am5geodata_worldIndiaLow
        ) {
          console.error("Some amCharts modules not loaded properly");
          return;
        }
 
        if (!chartRef.current) return;
 
        // Clear any existing chart content
        chartRef.current.innerHTML = "";
 
        // Create root element with proper error handling
        try {
          rootRef.current = am5.Root.new(chartRef.current);
        } catch (error) {
          console.error("Error creating amCharts root:", error);
          return;
        }
 
        const root = rootRef.current;
        if (!root) return;
 
        // Remove amCharts watermark/logo
        root._logo?.dispose();
 
        // Set themes
        root.setThemes([am5themes_Animated.new(root)]);
 
        // Detect if mobile for responsive chart settings
        const isMobile = window.innerWidth < 768;
        const chartPadding = isMobile ? 5 : 15; // Reduced padding for mobile
 
        // Create the map chart with responsive padding
        const chart = root.container.children.push(
          am5map.MapChart.new(root, {
            panX: "rotateX",
            panY: "rotateY",
            projection: am5map.geoOrthographic(),
            paddingBottom: chartPadding,
            paddingTop: chartPadding,
            paddingLeft: chartPadding,
            paddingRight: chartPadding,
            // Disable zoom functionality
            wheelX: "none",
            wheelY: "none",
            pinchZoomX: false,
            pinchZoomY: false,
            maxZoomLevel: 1,
            minZoomLevel: 1,
            // Better initial rotation to show more countries
            rotationX: -10,
            rotationY: 0,
          })
        );
 
        if (!chart) return;
 
        // Disable chart container interactions that could trigger zoom
        if (chart.plotContainer) {
          chart.plotContainer.set("wheelable", false);
          chart.plotContainer.set("pinchZoom", false);
        }
 
        // Create series for background fill (ocean/space) - Grey background for non-country areas
        const backgroundSeries = chart.series.push(
          am5map.MapPolygonSeries.new(root, {})
        );
        if (
          backgroundSeries &&
          backgroundSeries.mapPolygons &&
          backgroundSeries.mapPolygons.template
        ) {
          backgroundSeries.mapPolygons.template.setAll({
            fill: am5.color("#e5e5e5"), // Grey background for areas without countries
            fillOpacity: 1,
            strokeOpacity: 0,
          });
          backgroundSeries.data.push({
            geometry: am5map.getGeoRectangle(90, 180, -90, -180),
          });
        }
 
        // Create main polygon series for countries - using India-specific geodata
        const polygonSeries = chart.series.push(
          am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_worldIndiaLow,
          })
        );
 
        if (
          polygonSeries &&
          polygonSeries.mapPolygons &&
          polygonSeries.mapPolygons.template
        ) {
          polygonSeries.mapPolygons.template.setAll({
            tooltipText: "{name}",
            toggleKey: "active",
            interactive: true,
            fill: am5.color("#4A90E2"), // Blue color matching the image
            stroke: am5.color("#ffffff"), // White borders
            strokeWidth: 0.7,
          });
 
          // Hover state - darker blue instead of red
          polygonSeries.mapPolygons.template.states.create("hover", {
            fill: am5.color("#2E5A87"), // Darker blue for hover effect
          });
        }
 
        // Create point series for markers with pin-style icons
        const pointSeries = chart.series.push(
          am5map.MapPointSeries.new(root, {
            latitudeField: "latitude",
            longitudeField: "longitude",
          })
        );
 
        if (pointSeries && pointSeries.bullets) {
          pointSeries.bullets.push(() => {
            // Create pin-shaped marker using Graphics
            const pinGraphics = am5.Graphics.new(root, {
              svgPath:
                "M12,2C8.13,2 5,5.13 5,9c0,5.25 7,13 7,13s7,-7.75 7,-13C19,5.13 15.87,2 12,2zM12,11.5c-1.38,0 -2.5,-1.12 -2.5,-2.5s1.12,-2.5 2.5,-2.5s2.5,1.12 2.5,2.5S13.38,11.5 12,11.5z",
              fill: am5.color("#FF6B35"), // Default color, will be overridden
              stroke: am5.color("#ffffff"),
              strokeWidth: 1,
              scale: 0.8, // Smaller scale
              centerX: am5.p50,
              centerY: am5.p100,
              tooltipText: "{title}", // Only show city name
              cursorOverStyle: "pointer",
            });
 
            const bullet = am5.Bullet.new(root, {
              sprite: pinGraphics,
            });
 
            // Set dynamic properties based on data
            bullet.adapters.add("sprite", (sprite: any, target: any) => {
              const dataItem = target.dataItem;
              if (dataItem && sprite) {
                const data = dataItem.dataContext as any;
                const scale = (data.size || 5) * 0.08; // Much smaller scale
                sprite.set("scale", scale);
                sprite.set("fill", am5.color(data.color || "#FF6B35"));
 
                // Add subtle pulsing animation for major cities (size > 6)
                if (data.size > 6) {
                  sprite.animate({
                    key: "scale",
                    from: scale,
                    to: scale * 1.2,
                    duration: 2000,
                    loops: Infinity,
                    easing: am5.ease.yoyo(am5.ease.cubic),
                  });
                }
              }
              return sprite;
            });
 
            return bullet;
          });
 
          // Set marker data - only title is needed for tooltip
          pointSeries.data.setAll(
            markerData.map((marker) => ({
              latitude: marker.latitude,
              longitude: marker.longitude,
              title: marker.title, // Only city name for tooltip
              color: marker.color,
              size: marker.size,
              id: marker.id,
            }))
          );
        }
 
        // Create graticule series (grid lines) - Light gray grid
        const graticuleSeries = chart.series.push(
          am5map.GraticuleSeries.new(root, {})
        );
        if (
          graticuleSeries &&
          graticuleSeries.mapLines &&
          graticuleSeries.mapLines.template
        ) {
          graticuleSeries.mapLines.template.setAll({
            strokeOpacity: 0.1,
            stroke: am5.color("#000"), // Light gray grid lines
            strokeWidth: 0.5,
          });
        }
 
        // Slower rotate animation to better see markers
        if (chart.animate) {
          animationRef.current = chart.animate({
            key: "rotationX",
            from: -10,
            to: 350,
            duration: 8000, // Slower rotation (60 seconds)
            loops: Infinity,
          });
        }
 
        // Add hover event handlers to pause/resume rotation
        if (chartRef.current) {
          const chartElement = chartRef.current;
 
          const handleMouseEnter = () => {
            if (animationRef.current) {
              animationRef.current.pause();
            }
          };
 
          const handleMouseLeave = () => {
            if (animationRef.current) {
              animationRef.current.play();
            }
          };
 
          chartElement.addEventListener("mouseenter", handleMouseEnter);
          chartElement.addEventListener("mouseleave", handleMouseLeave);
 
          // Store cleanup function for event listeners
          (chartElement as any)._cleanupHoverEvents = () => {
            chartElement.removeEventListener("mouseenter", handleMouseEnter);
            chartElement.removeEventListener("mouseleave", handleMouseLeave);
          };
        }
 
        // Make stuff animate on load
        if (chart.appear) {
          chart.appear(1000, 100);
        }
      } catch (error) {
        console.error("Error initializing amCharts:", error);
      }
    };
 
    initChart();
 
    // Cleanup function
    return () => {
      // Clean up hover event listeners
      if (chartRef.current && (chartRef.current as any)._cleanupHoverEvents) {
        (chartRef.current as any)._cleanupHoverEvents();
      }
 
      if (rootRef.current) {
        try {
          rootRef.current.dispose();
          rootRef.current = null;
        } catch (error) {
          console.error("Error disposing amCharts root:", error);
        }
      }
 
      animationRef.current = null;
    };
  }, []);
 
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 10 }, // Reduced mobile padding
        display: "flex",
        justifyContent: "center",
        overflow: "hidden", // Prevent horizontal scroll
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: { xs: 4, md: 8 }, // Reduced gap on mobile
        }}
      >
        {/* Left Text Content */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          {/* Tagline */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                bgcolor: theme.palette.secondary.main,
              }}
            />
            <Typography
              variant="overline"
              sx={{ color: "#555", fontWeight: 600 }}
            >
              Providing Solutions of Every Kind
            </Typography>
          </Box>
 
          {/* Main Heading */}
          <Typography
            variant="h3"
            sx={{ color: "#003359", fontWeight: 700, mb: 3, mt: 3 }}
          >
            GLOBAL NETWORK
          </Typography>
 
          {/* Subheading with animated colored spans */}
          <Typography variant="subtitle1" sx={{ color: "#333", mb: 4 }}>
             Present in{" "}
            <Box
              component="span"
              sx={{
                color: theme.palette.secondary.main,
                fontWeight: 700,
                fontSize: "1.7rem",
                transition: "all 0.3s ease",
              }}
            >
              {countriesCount}+ countries
            </Box>
            <br />
            Spread over{" "}
            <Box
              component="span"
              sx={{
                color: theme.palette.primary.dark,
                fontWeight: 700,
                fontSize: "1.7rem",
                transition: "all 0.3s ease",
              }}
            >
              {regionsCount} regions
            </Box>
          </Typography>
 
          {/* Option Cards */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1.1fr", sm: "1fr 1fr" },
              gap: 2.3,
              maxWidth: "500px",
            }}
          >
            {data.map((item) => (
              <Paper
                key={item}
                elevation={1}
                sx={{
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  fontFamily: "Poppins",
                  backgroundColor: theme.palette.background.paper,
                  color: "#000",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  position: "relative",
                  textAlign: "left",
                  "&::after": {
                    content: "'>'",
                    position: "absolute",
                    right: 16,
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: "1rem",
                    color: "#555",
                  },
                }}
              >
                {item}
              </Paper>
            ))}
          </Box>
        </Box>
 
        {/* Right Chart - Adjusted height to align with text content */}
        <Box
          sx={{
            flex: { xs: "none", md: 1 }, // Don't flex on mobile
            width: { xs: "100%", md: "auto" },
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start", // Align to top
            mt: { xs: 4, md: 0 },
            overflow: "hidden", // Prevent chart overflow
          }}
        >
          <Box
            ref={chartRef}
            sx={{
              width: { xs: "100%", md: "500px" },
              maxWidth: "100%", // Ensure it doesn't exceed container
              height: { xs: "110px", md: "410px" }, // Reduced height to match text content
              display: "block",
              fontFamily: theme.typography.fontFamily,
              overflow: "hidden", // Prevent internal overflow
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
 
 