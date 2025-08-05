import React from 'react'
import { Card,Box, Typography , } from '@mui/material'
import BusinessIcon from '@mui/icons-material/Business';

const cardItems=["IR Events & Earnings Releases", "IR Events & Earnings Releases", "IR Events & Earnings Releases"]
function Investor() {
  return (
    <>
       <Typography
        variant="h3"
        sx={{ mt: 4, fontWeight: "900", textAlign: "left" , textTransform:'uppercase' }}
      >
        Invester Relations
      </Typography>

       <Box
        sx={{
          marginTop: "30px",
          borderRadius: 2,
          display:'flex',
          justifyContent:'space-between',
          gap:2
        }}
      >
        {cardItems.map((item)=>(
        <Card sx={{ width:450, height:'15vh' , padding:'30px' , border:'1px solid #cccccc' , display:'flex' , justifyContent:'space-between' , alignItems:'center', borderRadius:2 , boxShadow:'none', '&:hover':{
            border:'1px solid #1428A0', color:'#1428A0'
        }}}>
             <Typography variant='title' fontWeight={"bold"} sx={{fontSize:'20px'}}>IR Events & Earnings Releases</Typography>
             <BusinessIcon sx={{color:'black !important'}}/>
       </Card>
        ))}
      </Box>
    </>
  )
}

export default Investor
