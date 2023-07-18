import { Button, Card, CardContent, Typography, Container, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import React from 'react'

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
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
      <Card
        variant="outlined"
        sx={{
          width: '50%',
          overflow: 'auto',
          resize: 'horizontal',
        }}
      >
        <CardContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" mb={2}>
            ATS Genius Flow
          </Typography>
          <Typography mb={1}>
            Choose if you want to view or contribute
          </Typography >

          <Button variant='contained' sx={{
            bgcolor
              : theme.palette.secondary.main, marginRight: '10px',
            '&:hover': {
              backgroundColor: '#203864', // Set your desired hover color
            }
          }} onClick={() => navigate('./view')}>View</Button>
          <Button variant='contained' sx={{
            bgcolor
              : theme.palette.secondary.main, marginRight: '10px',
            '&:hover': {
              backgroundColor: '#203864', // Set your desired hover color
            }
          }} onClick={() => navigate('/contribute ')}>Contribute</Button>

        </CardContent>
      </Card>
    </Container>

  )
}

export default Home