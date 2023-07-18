import React from 'react';
import { Box, Typography,useTheme,Button } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
const SuccessPage = () => {
    const theme = useTheme();
    const Navigate = useNavigate()
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor={theme.palette.primary.main}
      color='white'
      flexDirection='column'
    > 
    <Box>
    <Typography variant="h4" color="success" fontWeight="bold">
        Success!
      </Typography>
      <Typography variant="body1">Thanks for your contribution.</Typography>
      
    </Box>
     
      <Button variant='contained' 
        
      onClick={()=>
             Navigate("/")
      }
      sx={{
        position:"absolute",
         bottom: 10,
         right:5,
         marginTop:10,
            borderRadius: 2,
            bgcolor
              : theme.palette.secondary.main, marginRight: '10px',
            '&:hover': {
              backgroundColor: '#203864', // Set your desired hover color
            }
          }
          } >Go back to home</Button>
    </Box>
    
  );
};

export default SuccessPage;
