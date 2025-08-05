import React ,{useState} from 'react'
import {Box, Button, Menu, MenuItem, Typography} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const dataButton =["Legal Notice", "Policy", "Contact Us " , "Sitemap"]
const menuItems =[ "Samsung C&T",
  "Samsung Engineering",
  "Samsung Electronics",
  "Samsung Heavy",
  "Samsung SDI",
  "Samsung SDS",]
function Footer() {
   const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>

    <Box sx={{background:"#222831" , marginTop:'50px' , color : 'white' , padding:'50px' , display:'flex' , justifyContent:'space-between' }}>
        <Box sx={{ display:'block',  }}>
          
         <Box sx={{display:'flex' ,  }}>
            {dataButton.map((item)=>(
            <Button sx={{textTransform:'none' , color : 'white' , background:'none'}}>{item}</Button>
          ))}
             
         </Box>
         <Box sx={{ padding:'5px'}}>
            <Typography variant='body2' sx={{color:'rgba(255, 255, 255, 0.6)'}}>Copyright (C) 2022 Samsung C&T Corporation. All rights reserved</Typography>
         </Box>
      </Box>

      <Box  >
         <Button onClick={handleMenuClick} sx={{border:'1px solid #575656ff' , textTransform:'none' , color:'white', background:'none'}}>
            <Box
                sx={{ display: "flex", alignItems: "center", columnGap: 8 }}
                  >
                    Related Sites
                    {menuOpen ? (
                      <ArrowDropUpIcon sx={{ fontSize: "20px" }} />
                    ) : (
                      <ArrowDropDownIcon sx={{ fontSize: "20px" }} />
                    )}
                  </Box>
         </Button>
         
         <Menu
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            transformOrigin={{ vertical: "bottom", horizontal: "center" }}
            PaperProps={{
              sx: {
                backgroundColor: "#222831",
                color: "white",
                mt: 0,
                minWidth: "100px",
                boxShadow: 3,
                border:'1px solid #575656ff' 
              },
            }}
          >
            {menuItems.map((item , index)=>(
<MenuItem
                key={index}
                onClick={handleMenuClose}
                sx={{
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#393E46",
                  },
                }}
              >
                {item}
              </MenuItem>
            ))}
            
         </Menu>
      </Box>
    </Box>
      
    </>
  )
}

export default Footer
