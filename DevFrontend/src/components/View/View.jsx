import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Button, Typography, Container, Box, useTheme, Divider } from '@mui/material';
import { getUserSpecificAlgo } from '../../apiCalls';
import { useNavigate } from "react-router-dom"
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

const View = () => {

  const navigate = useNavigate()
  const theme = useTheme();
  const [selectedUser, setSelectedUser] = useState('');
  const [algoList, setalgoList] = useState(null);

  const fetchUserSpecificAlgoList = async () => {
    const userSpecificAlgoList = await getUserSpecificAlgo(selectedUser);
    setalgoList(userSpecificAlgoList.data);
  };

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  return (
    <Container maxWidth="sm"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: theme.palette.primary.main,
        maxWidth: '100vw',
        flexDirection: 'column'

      }}>
      <Box
        sx={{
          padding: 2,
          width: '52vw',
          backgroundColor: 'white',
          marginBottom: '10px',
          marginTop: '10px',
          border: '1px solid white',
          borderRadius: '5px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <FormControl variant="outlined" fullWidth >
          <InputLabel id="user-select-label">Select User</InputLabel>
          <Select
            labelId="user-select-label"
            id="user-select"
            value={selectedUser}
            onChange={handleUserChange}
            label="Select User"
          >
            <MenuItem value="">
              <em>Select a user</em>
            </MenuItem>
            {userNames.map(user => (
              <MenuItem key={user.id} value={user.name}>{user.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          onClick={fetchUserSpecificAlgoList}
          disabled={!selectedUser}
          sx={{ margin: '1rem' }}
        >
          Fetch User Data
        </Button>

        {algoList && (!algoList.length ? <div>No Algo Found</div> : (
          <div sx={{ marginTop: '2rem' }}>
            {algoList.map((algo, index) => {
              return <div>
                <Divider />
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    width: '50vw',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginBottom: '2px'
                  }}
                > <Typography
                  key={index + 1001}
                  sx={{
                    overflowWrap: 'break-word',
                    paddingTop: 2,
                    paddingBottom: 2,
                    width: '80%',
                  }}>{index + 1}. {algo.algoName}</Typography>
                  <Button key={index + 1002}
                    onClick={() => navigate(`/view/${algo._id}`)}
                    variant='contained' sx={{
                      borderRadius: 2,
                      bgcolor
                        : theme.palette.secondary.main, marginRight: '10px',
                      '&:hover': {
                        backgroundColor: '#203864', // Set your desired hover color
                      }
                    }
                    } >View</Button>
                  <Button key={index + 1003}
                    onClick={() => alert("Upcoming feature")}
                    variant='contained' sx={{
                      borderRadius: 2,
                      bgcolor
                        : theme.palette.secondary.main, marginRight: '10px',
                      '&:hover': {
                        backgroundColor: '#203864', // Set your desired hover color
                      }
                    }
                    } >Edit</Button>
                </Box>
              </div>
            })}
          </div>
        ))}
      </Box>
    </Container>
  );
};

export default View;
