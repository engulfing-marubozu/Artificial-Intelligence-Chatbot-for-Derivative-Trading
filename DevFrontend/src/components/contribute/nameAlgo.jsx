import React, { useState } from 'react'
import { Card, CardContent, useTheme, Input, FormControl, InputLabel, MenuItem, Select, Button, Box,Container } from '@mui/material'

const Contribute1 = (props) => {
  const [uploadedBy, setuploadedBy] = useState("");
  const [algoName, setalgoName] = useState("");
  const theme = useTheme();

  const userNames = [
    { id: 1, name: 'Sandeep Mehra' },
    { id: 2, name: 'Suraj Sanka' },
    { id: 3, name: 'Abhinav Gupta' },
    { id: 4, name: 'Kritika Tyagi' },
    { id: 5, name: 'Rahul Raj' },
    { id: 6, name: 'Jatin Agarwal' },
    { id: 7, name: 'Jatin Rai' },
    { id: 8, name: 'Rohit Agarwal' },
    { id: 9, name: 'Hyunbum Cho' },

    // Add more user names as needed
  ];

  return (
    <Container maxWidth="sm"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: theme.palette.primary.main,
        maxWidth: '100vw'

      }}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.handleContribute1({ uploadedBy, algoName });
        }}
      >
        <Card
          variant="outlined"
          sx={{
            width: '47.55vw',
            overflow: 'auto',
            resize: 'horizontal',
       
          }}
        >
          <CardContent sx={{ textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>

            <Input
              placeholder="Name of the Algo"
              required

              sx={{ mb: 2, mt: 1, width: '100%' }}
              color="secondary"
              value={algoName}
              onChange={(e) => setalgoName(e.target.value)}
            />
          
            <FormControl variant="outlined" sx={{ width: '300px', marginBottom:'10px'}} >
              <InputLabel id="user-select-label">Uploaded by</InputLabel>
              <Select
                labelId="user-select-label"
                id="user-select"
                value={uploadedBy}
                onChange={(e) => setuploadedBy(e.target.value)}
                label="Uploaded by"
              >
                <MenuItem value="">
                  <em>Select a user</em>
                </MenuItem>
                {userNames.map(user => (
                  <MenuItem key={user.id} value={user.name}>{user.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
       
           
            <Button variant='contained' type='submit' sx={{
              bgcolor
                : theme.palette.secondary.main, marginRight: '10px',
              '&:hover': {
                backgroundColor: '#203864', // Set your desired hover color
              }
            }
            } >Enter</Button>

          </CardContent>
        </Card>
      </form>
    </Container>
  )
}

export default Contribute1