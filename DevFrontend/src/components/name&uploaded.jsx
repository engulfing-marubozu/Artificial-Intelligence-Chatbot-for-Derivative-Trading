import React, { useEffect, useState } from 'react'
import { Card, CardContent, useTheme, Input, FormControl, InputLabel, MenuItem, Select, Button, Box,Container } from '@mui/material'

const Contribute1 = ({name , upldBy , handleContribute1}) => {
 useEffect(()=>{
         if(name!=undefined || upldBy!=undefined)
          {
            setalgoName(name)
            setuploadedBy(upldBy);
          }
    }, [name , upldBy])
  const [uploadedBy, setuploadedBy] = useState("");
  const [algoName, setalgoName] = useState("");
  const [toggle, settoggle] = useState("");
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
        <Card
          variant="outlined"
          sx={{
            width: '50vw',
            overflow: 'auto',
            resize: 'horizontal',
            marginBottom:'20px'
          }}
        >
          <CardContent sx={{ textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <Input
              placeholder="Name of the Algo"
              required
              disabled={!toggle}
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
                disabled={!toggle}
                onChange={(e) => setuploadedBy(e.target.value)}
                label="Uploaded by"
              >
                <MenuItem value="" >
                  <em>Select a user</em>
                </MenuItem>
                {userNames.map(user => (
                  <MenuItem key={user.id} value={user.name}>{user.name}</MenuItem>
                ))}
              </Select>
            </FormControl>  
            <Button variant='contained' onClick={()=>{
                if(toggle)
                   handleContribute1({ uploadedBy, algoName });
                settoggle(!toggle);
            }} sx={{
              bgcolor
                : !toggle? theme.palette.secondary.main : 'green', marginRight: '10px',
              '&:hover': {
                backgroundColor: '#203864', // Set your desired hover color
              }
            }
            } >{!toggle? "Edit":"Save"}</Button>
          </CardContent>
        </Card>

 
  )
}

export default Contribute1