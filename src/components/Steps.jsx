import React from 'react'
import { Stack } from '@mui/material'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
// form

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const steps = ['Basic Information', 'Contact Details', 'Education details','Work Experience','Skills','Review & Submit'];
function Steps() {
   const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 3;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderSwith=(step)=>{
    switch(step){
      case 0:return(<div style={{marginTop:"20px"}}><h2>Personal Details</h2>
      
      <Box sx={{ display: 'block',marginTop:"20px"}}>
      
      <div>
        
        
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Full Name</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          /> 
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Gender</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Job Title</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Location</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      
    </Box>

      </div>
    
      

       

      )
        
        case 1:return(<div style={{marginTop:"20px"}}><h2>Contact Details</h2>
        
        <Box sx={{ display: 'block'}}>
      
      <div>
        
        
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Email</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          /> 
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
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
         <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Portfolio Link</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      
    </Box>

        </div>)
        
        case 2:return(<div style={{marginTop:"20px"}}><h2>Education Details</h2>
        
        <Box sx={{ display: 'block'}}>
      
      <div>
        
        
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Course Name</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          /> 
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">College Name</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
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
        </div>)
        
       case 3:return(<div style={{marginTop:"20px"}}><h2>Professonal Details</h2>
       
       <Box sx={{ display: 'block'}}>
      
      <div>
        
        
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Job / Intership</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          /> 
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Company Name</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Location</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '60ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Duration</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      
    </Box>


       </div>)
        
        case 4:return(<div style={{marginTop:"20px"}}><h2>Skills</h2>
        
        <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '65ch'}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Add Skill</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          
        </FormControl>
        
      </div>
      <div>
        <h3 style={{color:"lightgray",textAlign:"left",paddingLeft:"19%",paddingTop:"20px"}}>ADD</h3>
        <h2 style={{textAlign:"left",paddingLeft:"19%",paddingTop:"20px"}}>Suggesions :</h2>

<Stack
    direction="row"
    spacing={2}
    sx={{
      justifyContent: "center",
      alignItems: "center",
      marginTop:"20px",
    }}
  >

<div>
          <Stack
    direction="row"
    spacing={2}
    sx={{
      justifyContent: "start",
      alignItems: "center",
    }}
  >
  
   <Button variant="outlined">HTML</Button>
            <Button variant="outlined">Javascript</Button>
             <Button variant="outlined">React</Button>
              <Button variant="outlined">NodeJs</Button>
              <Button variant="outlined">Angular</Button>
               
  
  </Stack>
          
          
          <Stack
    direction="row"
    spacing={2}
    sx={{
      marginTop:"10px",
      justifyContent: "start",
      alignItems: "center",
    }}
  >
               <Button variant="outlined">NextJs</Button>
                <Button variant="outlined">ExpressJs</Button>
                 <Button variant="outlined">Java</Button>
                  <Button variant="outlined">Python</Button>
  
  </Stack>
          
       </div>

  </Stack>

       <h2 style={{textAlign:"left",paddingLeft:"19%",paddingTop:"20px", marginBottom:"100px"}}>Added Skills :</h2>

      </div>

        </div>)
        
         case 5:return(<div style={{marginTop:"20px"}}> <h2>Professional Summery</h2>
         
          <Box sx={{ display: 'block',marginTop:"20px"}}>
      
      <div>
        
         <TextField fullWidth label="Short summary of yourself" id="fullWidth" placeholder='Short summary of yourself...'
  
 />
      </div>
      
      
    </Box>

         </div>)
        
    }
  }

  return (
    <div>
      <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 10, mb: 1,color:"green",fontSize:"large" }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box>
            {renderSwith(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
    </div>
  )
}

export default Steps
