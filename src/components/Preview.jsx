import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
function Preview() {
  return (
    <div>
     <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 500,
          height: 628,
        },
      }}
    >
      
      <Paper elevation={3}>

<Stack
  direction="column"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
    paddingTop:"30px",
  }}
>

<h2>Abhimanyu Rajan</h2>

<h5 style={{color:"green"}}>FullStack Developer</h5>
<Typography variant="body" align='center' fontSize={"10px"} >
  9048122828 | abhimanyu@gmail.com | Kochi
</Typography>

<h6><a href="">LinkedIn</a> | <a href="https://github.com/abhimanyutr">Github</a> | <a href="">Portfolio</a></h6>

 <Divider>Summary</Divider>
<p style={{ width: 430 , height:60,border:"none",textAlign:"justify",fontFamily:"initial",fontSize:"small"}}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
  
</p>

<Divider>Education</Divider>
<Stack
  direction="column"
  spacing={2}
  sx={{
    justifyContent: "left",
    alignItems: "flex-start",
    width:"430px",
  }}
><Typography variant='body' textAlign='left' fontWeight={"bold"} >BTech <h6 style={{paddingTop:"4px"}}>  College of Engineering Kidangoor |  CGPA : 7.41  |  2025</h6> </Typography>


<Typography variant='body' textAlign='left' fontWeight={"bold"} >Diploma <h6 style={{paddingTop:"4px"}}>  Govt.Polytechnic College Kaduthuruthy |  CGPA : 7.79  |  2021</h6>  </Typography>

</Stack>
     
   


</Stack>


      </Paper>
       


    </Box>
    </div>
  )
}

export default Preview
