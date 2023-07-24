import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { getSpecificAlgo } from '../../apiCalls';
import { Container, Box, useTheme, Typography, Button } from '@mui/material';
const ViewSpecificAlgo = () => {
    const navigate = useNavigate();
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
    }, [params.algoId]);

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
            <Box sx={{
                marginTop: '50px',
                marginBottom: '50px'
            }}>
                <Box
                    sx={{
                        backgroundColor: theme.palette.secondary.main,
                        width: '50px',
                        marginBottom: '10px',
                        color: 'white',
                        padding: '10px',
                        borderRadius: '4px'
                    }}>
                    Name
                </Box>
                <Box
                    sx={{
                        backgroundColor: 'white',
                        width: '50vw',
                        marginBottom: '40px',
                        padding: '10px',
                        borderRadius: '4px'
                    }}>
                    {algo.algoName}
                </Box>
                <Box
                    sx={{
                        backgroundColor: theme.palette.secondary.main,
                        width: '50vw',
                        marginBottom: '10px',
                        color: 'white',
                        width: '100px',
                        padding: '10px',
                        borderRadius: '4px'
                    }}>
                    Uploaded By
                </Box>
                <Box
                    sx={{
                        backgroundColor: 'white',
                        width: '50vw',
                        marginBottom: '40px',
                        padding: '10px',
                        borderRadius: '4px'
                    }}>
                    {algo.uploadedBy}
                </Box>
                <Box
                    sx={{
                        backgroundColor: theme.palette.secondary.main,
                        width: '50vw',
                        marginBottom: '10px',
                        color: 'white',
                        width: '80px',
                        padding: '10px',
                        borderRadius: '4px'
                    }}>
                    Descrption
                </Box>
                <Box
                    sx={{
                        backgroundColor: 'white',
                        width: '50vw',
                        marginBottom: '40px',
                        padding: '10px',
                        borderRadius: '4px'
                    }}>
                    {algo.description}
                </Box>
                <Box
                    sx={{
                        backgroundColor: theme.palette.secondary.main,
                        width: '50vw',
                        marginBottom: '10px',
                        color: 'white',
                        width: '80px',
                        padding: '10px',
                        borderRadius: '4px'
                    }}>
                    Parameters
                </Box>

                {algo?.parameters?.map(({ name, description }, index) => <Box
                    key={index}
                    sx={{
                        backgroundColor: 'white',
                        width: '50vw',
                        marginBottom: '10px',
                        padding: '10px',
                        borderRadius: '4px'
                    }}><Typography fontWeight={600} display={'inline'}>Name</Typography>: {name} <br /><Typography fontWeight={600} display={'inline'}>Description</Typography>: {description}</Box>)}

                <Box
                    sx={{
                        backgroundColor: theme.palette.secondary.main,
                        width: '50vw',
                        marginBottom: '10px',
                        color: 'white',
                        width: '50px',
                        padding: '10px',
                        marginTop: '40px',
                        borderRadius: '4px'
                    }}>
                    Cases
                </Box>

                {algo?.cases?.map(({ value }, index) => <Box
                    key={index}
                    sx={{
                        backgroundColor: 'white',
                        width: '50vw',
                        marginBottom: '10px',
                        padding: '10px',
                        borderRadius: '4px'
                    }}> {value} </Box>)}
                     <Button 
                     sx={{
                        marginTop:'40px',
                        backgroundColor: theme.palette.secondary.main,
                        color:'white',
                        display:'flex',
                        postion: 'relative',
                        left:'22vw'
                     }}
                    onClick={()=> navigate(-1)} > Go back</Button>
            </Box>

            
        </Container>

    )
}

export default ViewSpecificAlgo