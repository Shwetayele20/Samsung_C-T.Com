import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#3B499D", borderRadius: "0px 0px 10px 10px", height:'50px', display:'flex', justifyContent:'center'}}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box 
            sx={{
              "& Button": {
                color: "rgba(255, 255, 255, 0.6)",
                textTransform: "none",
                "&:hover":{
                color:'white'
              }
              },
            }}
          >
            <Button>Engineering & Construction Group</Button>
            <Button>Trading & Investment Group</Button>
            <Button>Fashion Group</Button>
            <Button>Resort Group</Button>
          </Box>

          <Box>
            <Button
              sx={{
                background: "#fff",
                fontSize: "13px",
                color: "#3B499D",
                borderRadius: "2em",
                height: "24px",
                fontWeight: "700",
              }}
            >
              Key Info
              <AddIcon />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
