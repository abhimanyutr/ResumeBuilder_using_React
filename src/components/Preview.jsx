import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Button, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';


import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Edit from './Edit';

function Preview() {
  return (
    <div>

<Box>
       <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight:"20px",
    gap:"25px",
    color:"darkCyan",
    fontWeight:"bold",
    fontSize:"20px"
  }}
> <Edit/>
  <Tooltip title="Download"  placement="top"> <Button sx={{
    padding: "12px 24px",   // bigger padding
    fontSize: "20px",       // increase text/icon size
    minWidth: "64px",       // default min width (can increase)
  }}><FaFileDownload/> </Button> </Tooltip>
 <Link to={'/history'}><Tooltip title="History"  placement="top"><Button sx={{
    padding: "12px 24px",   // bigger padding
    fontSize: "20px",       // increase text/icon size
    minWidth: "64px",       // default min width (can increase)
  }}><FaHistory /></Button> </Tooltip></Link> 
</Stack>
       

      </Box>

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
 MERN Stack Developer skilled in MongoDB, Express.js, React.js, and Node.js, with experience in building scalable web applications and delivering user-friendly digital solutions.
  
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
     
   
<Divider>Profesional Experience</Divider>
<Stack
  direction="column"
  spacing={2}
  sx={{
    justifyContent: "left",
    alignItems: "flex-start",
    width:"430px",
  }}
>
  <Typography variant='body' textAlign='left' fontWeight={"bold"} >Role <h6 style={{paddingTop:"4px"}}>  Company |  Duration  </h6> </Typography>
</Stack>

<Divider>Skills</Divider>
<Stack
  direction="row"
  spacing={3}
  sx={{
    justifyContent: "left",
    alignItems: "flex-start",
    width:"430px",
  }}
>
  <h6>HTML</h6><h6>Javascript</h6><h6>ReactJs</h6><h6>NodeJs</h6><h6>MongoDB</h6><h6>Python</h6><h6>Java</h6>
</Stack>
     


</Stack>


      </Paper>
       


    </Box>
    </div>
  )
}

export default Preview
