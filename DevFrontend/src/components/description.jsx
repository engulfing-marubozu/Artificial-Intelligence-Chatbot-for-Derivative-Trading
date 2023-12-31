
import React, { useState,  useEffect } from 'react'
import { Button, Card, TextField, Typography, Container, useTheme, Input, Box, styled } from '@mui/material'


const  Contribute2 = ({desc, handleContribute2}) => {
    useEffect(() => {
        if (desc !== undefined) {
          setdescription(desc);
        }
      }, [desc]);
    
  const [description, setdescription] = useState('');
  const [isSaved, setisSaved] = useState(true);
  
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };

  const theme = useTheme();
  
  const StyledTextField = styled(TextField)(
    ({ theme }) => `
    width: 50vw;
    margin-bottom:10px;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.51;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]}
      };
  `,
  );
  return (


      <div >
        <Box
          sx={{
            width: '50vw',
            height: 50,
            backgroundColor: theme.palette.primary.main,
            marginBottom: '10px',
            border: '1px solid white',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

          }}
        > <Typography
          sx={{ color: 'white' }} >Description</Typography></Box>
        <TextField
          sx={{
            width: '50vw',
            marginBottom: '10px',
            fontsize: '1rem',
            fontweight: 500,
            lineheight: '1.51',
            borderRadius: '5px 5px 5px 5px',
            background: 'white',
          }}
          multiline
          value={description}
          onChange={(e) => {
            e.preventDefault();
            setdescription(e.target.value);
          }}
          rows={10}
          variant="outlined" disabled={isSaved} required  aria-label="empty textarea" placeholder="Description" />
        <Box
          sx={{
            width: '100%'
          }}>
          <Button onClick={() => {
            if (description == '')
              alert("Description can't be empty");
            else
              {
                setisSaved(!isSaved);
                handleContribute2(description);
              }
          }
          } variant='contained' sx={{
            borderRadius: 2,
            bgcolor
              : !isSaved ? 'green' : theme.palette.secondary.main, marginRight: '10px',
            '&:hover': {
              backgroundColor: '#203864', // Set your desired hover color
            }
          }
          } >{isSaved ? "Edit" : "Save"}</Button>
        </Box>
      </div >

 )

}

export default Contribute2
