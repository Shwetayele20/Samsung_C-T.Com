import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Collapse,
  MenuItem,
} from "@mui/material";
import Container from "@mui/material/Container";
import logo from "../../assets/images/eng_logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import { Menu } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
// Menu's
const menuItems = [
  { label: "About C&T", key: "about" },
  { label: "Business", key: "business" },
  { label: "ESG", key: "esg" },
  { label: "IR", key: "ir" },
  { label: "Newsroom", key: "newsroom" },
];

// Submenu's
const menuData = {
  about: ["Overview", "History", "Samsung DNA", "Contact US"],
  business: [
    "Engineering & Construction",
    "Trading & Investment",
    "Fashion",
    "Resort",
  ],
  esg: ["Sustainability", "CSR", "Governance"],
  ir: ["Stock Info", "Earnings", "Shareholder Info"],
  newsroom: ["Press Releases", "Events", "Media Library"],
};
function Header2() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleOpen = (menuName) => {
    setActiveMenu(menuName);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveMenu(null);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          zIndex: 1100,
        }}
      >
        <AppBar
          position="static"
          sx={{
            backgroundColor: "white",
            height: "15vh",
            display: "flex",
            justifyContent: "center",
            boxShadow: "none",
            textAlign: "center",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Appbar Logo */}
              <Box
                component="img"
                sx={{ height: 40, marginLeft: "0px" }}
                alt="Logo"
                src={logo}
              />
              <Box
                sx={{
                  "& Button": {
                    textTransform: "none",
                    fontWeight: "900",
                    columnGap: 20,
                    color: "black",
                    fontSize: "17px",
                    marginRight: "30px",
                    position: "relative",

                    "&:hover": {
                      background: "none",
                      color: "#3B499D",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      transform: "none",
                      width: 0,
                      height: "2px",
                      backgroundColor: "#3B499D",
                      transition: "width 0.3s ease-in-out",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  },
                }}
              >
                {/*  Appbar Menu*/}
                {menuItems.map((item, i) => (
                  <Button
                    key={i}
                    sx={{
                      textTransform: "none",
                      color: "rgba(255, 255, 255, 0.6)",
                      fontSize: "14px",
                      "&:hover": {
                        color: "#ffffff",
                      },
                    }}
                    onMouseEnter={() => handleOpen(item.key)}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>

              {/* Appbar Buttons */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "& Button": {
                    textTransform: "none",
                    columnGap: 20,
                    color: "black",
                    padding: "5px",
                    marginLeft: "20px",
                    "&:hover": {
                      background: "none",
                    },
                  },
                }}
              >
                <Button>Contact us</Button>

                <Button onClick={handleMenuClick}>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "4px" }}
                  >
                    ENG
                    {menuOpen ? (
                      <KeyboardArrowUpSharpIcon sx={{ fontSize: "20px" }} />
                    ) : (
                      <KeyboardArrowDownSharpIcon sx={{ fontSize: "20px" }} />
                    )}
                  </Box>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={menuOpen}
                  onClose={handleMenuClose}
                >
                  <MenuItem>English</MenuItem>
                  <MenuItem>Korean</MenuItem>
                </Menu>
              </Box>
              <Button
                variant="contained"
                sx={{
                  border:'1px solid #cccccc',
                  boxShadow:'none',
                  borderRadius: "50%",
                  width: 48,
                  height: 48,
                  minWidth: 0,
                  padding: 0,
                  background: "#ffffff",
                  color: "#3B499D",
                  "&:hover": {
                    background: "#3B499D",
                    color: "white",
                  },
                }}
              >
                <SearchIcon fontSize="small" />
              </Button>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Mega menu panel below AppBar */}
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box
            onMouseLeave={handleClose}
            sx={{
              position: "absolute",
              width: "100%",
              bgcolor: "background.paper",
              borderTop: "1px solid",
              borderColor: "divider",
              display: "flex",
              justifyContent: "center",
              height: "30vh",
            }}
          >
            <Box
              sx={{
                width: "100%",

                "& Button": {
                  textTransform: "none",
                  color: "black",
                  fontSize: "14px",
                  "&:hover": {
                    color: "#3B499D",
                    background: "none",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    transform: "none",
                    width: 0,
                    height: "1px",
                    backgroundColor: "#3B499D",
                    transition: "width 0.3s ease-in-out",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                },
              }}
            >
              {/* Submenu Items */}
              {activeMenu && menuData[activeMenu] && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    background: "#fff",
                    "& > div": {
                      width: "10%",
                      height: "30vh",
                      textAlign: "center",
                      "&:hover": {
                        background: "#F2F9FF",
                      },
                    },
                  }}
                >
                  {menuData[activeMenu].map((item, index) => (
                    <Box key={index}>
                      <Button>{item}</Button>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        </Collapse>
      </Box>
    </>
  );
}

export default Header2;
