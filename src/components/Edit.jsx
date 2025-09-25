import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { Button, Typography } from '@mui/material';
import { FaRegEdit } from "react-icons/fa";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import {Stack} from '@mui/material';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxHeight: '80vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Edit() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
    <Tooltip title="Edit"  placement="top"><Button onClick={handleOpen} sx={{
    padding: "12px 24px",   // bigger padding
    fontSize: "20px",       // increase text/icon size
    minWidth: "64px",       // default min width (can increase)
  }}><FaRegEdit /></Button></Tooltip>

     <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
           <h3 style={{backgroundColor:"darkCyan",textAlign:"center",padding:"5px",color:"white",borderRadius:"15px"}}>EDIT</h3> 
           <div style={{marginTop:"20px"}}><h2>Personal Details</h2>
      
      <Box sx={{ display: 'block',marginTop:"20px"}}>
      
      <div>
        
        
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Full Name</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          /> 
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Gender</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Job Title</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Location</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>

      <div style={{marginTop:"20px"}}><h2>Contact Details</h2>
        
        <Box sx={{ display: 'block'}}>
      
      <div>
        
        
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Email</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          /> 
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Phone Number</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '29ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">LinkedIn Profile Link</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 ,width: '29ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Github Profile Link</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
         <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Portfolio Link</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      
    </Box>

        </div>


        <div style={{marginTop:"20px"}}><h2>Education Details</h2>
        
        <Box sx={{ display: 'block'}}>
      
      <div>
        
        
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Course Name</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          /> 
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">College Name</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">University Name</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '29ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">CGPA</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 ,width: '29ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Year of Passout</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      
    </Box>
        </div>


        <div style={{marginTop:"20px"}}><h2>Professonal Details</h2>
       
       <Box sx={{ display: 'block'}}>
      
      <div>
        
        
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Job / Intership</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          /> 
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Company Name</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Location</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Duration</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      
    </Box>


       </div>

       <div style={{marginTop:"20px"}}><h2>Skills</h2>
        
        <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '48ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Add Skill</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
        <h3 style={{color:"lightgray",textAlign:"left",paddingLeft:"4%",paddingTop:"20px"}}>ADD</h3>
        <h2 style={{textAlign:"left",paddingLeft:"4%",paddingTop:"20px"}}>Suggesions :</h2>

<Stack
    direction="row"
    spacing={1}
    sx={{
      justifyContent: "center",
      alignItems: "center",
      marginTop:"20px",
    }}
  >

<div>
          <Stack
    direction="row"
    spacing={5}
    sx={{
      justifyContent: "start",
      alignItems: "center",
    }}
  >
  
   <Button variant="outlined">HTML</Button>
            <Button variant="outlined">Javascript</Button>
             <Button variant="outlined">React</Button>
             
               
  
  </Stack>
          
          
          <Stack
    direction="row"
    spacing={5}
    sx={{
      marginTop:"10px",
      justifyContent: "start",
      alignItems: "center",
    }}
  >
               <Button variant="outlined">NextJs</Button>
                <Button variant="outlined">ExpressJs</Button>
                 <Button variant="outlined">Java</Button>
                  
  
  </Stack>

      <Stack
    direction="row"
    spacing={5}
    sx={{
      marginTop:"10px",
      justifyContent: "start",
      alignItems: "center",
    }}
  >
               <Button variant="outlined">NodeJs</Button>
              <Button variant="outlined">Angular</Button>
                 <Button variant="outlined">Java</Button>
                 
  
  </Stack>
          
       </div>

  </Stack>

       <h2 style={{textAlign:"left",paddingLeft:"4%",paddingTop:"20px", marginBottom:"100px"}}>Added Skills :</h2>

      </div>

        </div>


        <div style={{marginTop:"20px"}}> <h2>Professional Summery</h2>
         
          <Box sx={{ display: 'block',marginTop:"20px"}}>
      
      <div>
        
         <TextField fullWidth label="Short summary of yourself" id="fullWidth" placeholder='Short summary of yourself...'/>
      </div>
      
      
    </Box>

         </div>
      
    </Box>
          
      </div>
<div style={{display:"flex",justifyContent:"space-between",marginTop:"15px"}}>
  <Button variant="text" onClick={'/form'}>Cancel</Button>
  <Button variant="contained" disableElevation>
  SAVE
</Button>
</div>
          </Box>
          
        </Fade>
      </Modal>

    </div>
  )
}

export default Edit
