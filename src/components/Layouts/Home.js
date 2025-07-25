import React from "react";
import { Container, Box } from "@mui/material";
import HomePage from "../../pages/HomePage";
import Header from "./Header";
import Header2 from "./Header2";
import Business from "../../pages/Business";
import ESGActivity from "../../pages/ESGActivity";

function Home() {
  return (
    <React.Fragment>
      <div>
        <Container maxWidth="xl" sx={{ display:'flex', justifyContent:'center', textAlign:'center' }}>
          <Box sx={{  height: "auto",width:'100%',maxWidth:'95%' }}>
           <Header/>
           <Header2/>
           <HomePage/>
           <Business/>
           <ESGActivity/>
          </Box>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Home;
