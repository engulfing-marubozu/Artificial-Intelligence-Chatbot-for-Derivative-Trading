import { useTheme } from '@emotion/react';
import React, { useState } from 'react';

import { Button, Container, TextField,  Box, Typography } from '@mui/material';

function Contribute4(props) {
    const theme = useTheme();
    const [fields, setFields] = useState([{ value: '', save: false }]);

    const handleChange = (index, event) => {
        const newFields = [...fields];
        newFields[index].value = event.target.value;
        setFields(newFields);
    };

    const handleAddField = () => {
        setFields([...fields, { value: '', save: false }]);
    };

    const handleRemoveField = (index) => {
        const newFields = [...fields];
        newFields.splice(index, 1);
        setFields(newFields);
    };
    const handleSaveField = (index) => {
        const newFields = [...fields];
        newFields[index].save = !newFields[index].save;
        setFields(newFields);
    }
    const handleSubmitField = ()=>{
            let allSaved = true;
            fields.forEach((obj)=>{
                if(!obj.save)
                  allSaved=false;
            })
           if(!allSaved)
             alert("Please save all your parameters before submitting.")
             else{
                    props.handleContribute4(fields);
             }
    }
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
            width: '52vw',
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
          sx={{ color: 'white' }} >Please describe your cases</Typography></Box>
            <Box
                sx={{
                    backgroundColor: 'white',
                    width: '50vw',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    flexDirection: 'column',
                    padding: '20px',
                    borderRadius:'5px'
                }}>
                {fields.map((field, index) => (
                    <div key={index}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignContent: 'center',
                        }}
                    >
                        <TextField
                            sx={{paddingBottom:'10px',
                          width:'30vw'
                        }}
                            minRows={2}
                            multiline
                            width='50vw'disabled={fields[index].save}
                            label={`Case ${index + 1}`}
                            variant="outlined"
                            value={field.value}
                            onChange={(event) => handleChange(index, event)}
                        />

                        <>

                            <Button variant="outlined" onClick={() => {
                                if (!fields[index].save && fields[index].value == '')
                                    alert("Can't save empty parameter. Remove the field instead.")
                                else
                                    handleSaveField(index)
                            }} sx={{
                                color: 'white',
                                bgcolor: fields[index].save? theme.palette.secondary.main: 'green', marginLeft: '10px',
                                '&:hover': {
                                    backgroundColor: '#203864', // Set your desired hover color
                                }
                            }}   > {!fields[index].save ? "Save" : "Edit"}</Button>
                            <Button variant="outlined"

                                onClick={() => handleRemoveField(index)} sx={{
                                    color: 'white',
                                    bgcolor: theme.palette.secondary.main, marginLeft: '10px',
                                    '&:hover': {
                                        backgroundColor: '#203864', // Set your desired hover color
                                    }
                                }}   >Remove</Button>

                        </>
                    </div>
                ))}

            </Box>
            <Box 
               padding={5}>
                <Button variant="outlined" onClick={() => handleAddField()} sx={{
                    color: 'white',
                    bgcolor: theme.palette.secondary.main, marginRight: '10px',
                    '&:hover': {
                        backgroundColor: '#203864', // Set your desired hover color
                    }
                }}   >Add another</Button>
                <Button variant="outlined" onClick={() => handleSubmitField()} sx={{
                    color: 'white',
                    bgcolor: theme.palette.secondary.main, marginRight: '10px',
                    '&:hover': {
                        backgroundColor: '#203864', // Set your desired hover color
                    }
                }}   >Submit</Button>
            </Box>

        </Container>
    );
}

export default Contribute4;
