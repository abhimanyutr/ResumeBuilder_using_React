import React from 'react'
import { Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Steps from './Steps'
import Preview from './Preview'
function Form() {
  return (
    <div>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
          textAlign:"Center",
          marginBottom:"100px",
          marginTop:"50px"
        }}
      >
      <Box>
        <Steps/>


      </Box>

      <Box>
        <Preview/>
      </Box>

      </Stack>
    </div>
  )
}


export default Form
