import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSpecificAlgo } from '../../apiCalls';
import { Container, Box, useTheme} from '@mui/material';
const ViewSpecificAlgo = () => {
    const theme = useTheme()
    console.log("component mouting")
    const params = useParams();
    const [algo, setalgo] = useState({});
    useEffect(() => {
        console.log("called")
        const backendCall = async () => {
            const res = await getSpecificAlgo(params.algoId);
            setalgo(res.data);
            console.log(res.data);
        }
       backendCall();    
    }, []);
    setTimeout(() => {
        alert("work in progress.")
    }, 1000);
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
        <box>
            <Box
                sx={{
                    backgroundColor: theme.palette.secondary.main,
                    width:'50px',
                    marginBottom: '10px',
                    color: 'white'
                }}>
                Name
            </Box>
            <Box
                sx={{
                    backgroundColor: 'white',
                    width: '50vw',
                    marginBottom: '10px'
                }}>
                {algo.algoName}
            </Box>
            <Box
                sx={{
                    backgroundColor: theme.palette.secondary.main,
                    width: '50vw',
                    marginBottom: '10px',
                    color: 'white',
                    width:'100px',
                }}>
                Uploaded By
            </Box>
            <Box
                sx={{
                    backgroundColor: 'white',
                    width: '50vw',
                    marginBottom: '10px'
                }}>
                {algo.uploadedBy}
            </Box>
            <Box
                sx={{
                    backgroundColor: theme.palette.secondary.main,
                    width: '50vw',
                    marginBottom: '10px',
                    color: 'white',
                    width:'80px',
                }}>
                Descrption
            </Box>
            <Box
                sx={{
                    backgroundColor: 'white',
                    width: '50vw',
                    marginBottom: '10px'
                }}>
                {algo.description}
            </Box>
            <Box
                sx={{
                    backgroundColor: theme.palette.secondary.main,
                    width: '50vw',
                    marginBottom: '10px',
                    color: 'white',
                    width:'80px',
                }}>
                Parameters
            </Box>

            {algo?.parameters?.map(({ name, description }, index) => <Box
                sx={{
                    backgroundColor: 'white',
                    width: '50vw',
                    marginBottom: '10px',

                }}>name: {name}  Description: {description}</Box>)}

            <Box
                sx={{
                    backgroundColor: theme.palette.secondary.main,
                    width: '50vw',
                    marginBottom: '10px',
                    color: 'white',
                    width:'50px',
                }}>
                Cases
            </Box>

            {algo?.cases?.map(({ value }, index) => <Box
                sx={{
                    backgroundColor: 'white',
                    width: '50vw',
                    marginBottom: '10px',
                }}> {value} </Box>)}
  </box>
        </Container>

    )
}

export default ViewSpecificAlgo