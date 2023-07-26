
import { useTheme } from '@emotion/react';
import React, { useState, useEffect } from 'react';

import { Button, TextField, Box, Typography } from '@mui/material';
const Cases = ({ cases, handleContribute4 }) => {

    useEffect(() => {
        if (cases !== undefined) {
            setFields(cases);
        }
    }, [cases]);
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
    const handleSubmitField = () => {
        let allSaved = true;
        fields.forEach((obj) => {
            if (!obj.save)
                allSaved = false;
        })
        if (!allSaved)
            alert("Please save all your parameters before submitting.")
        else {
            handleContribute4(fields);
        }
    }
    return (
        <div
          style={{
            marginBottom: '50px'
          }}>
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
                sx={{ color: 'white' }} >Cases</Typography></Box>
            <Box
                sx={{
                    backgroundColor: 'white',
                    width: 'vw',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    flexDirection: 'column',
                    padding: '20px',
                    borderRadius: '5px'
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
                            sx={{
                                paddingBottom: '10px',
                                width: '30vw'
                            }}
                            minRows={2}
                            multiline
                            width='50vw' disabled={fields[index].save}
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
                                bgcolor: fields[index].save ? theme.palette.secondary.main : 'green', marginLeft: '10px',
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
                paddingTop={2}
                paddingBottom={5}
                display='flex'
                flexDirection='column'
            >
                <Button variant="outlined" onClick={() => handleAddField()} sx={{
                    color: 'white',
                    width:'8.7rem',
                    bgcolor: theme.palette.secondary.main, marginRight: '10px',
                    '&:hover': {
                        backgroundColor: '#203864', // Set your desired hover color
                    }
                }}   >Add another</Button>
                 </Box>
                 <Box
                 sx={{
                    display:'flex',
                  justifyContent:'center',
                 }}
                  >
                 <Button             
                variant="outlined" onClick={() => handleSubmitField()} sx={{
                    color: 'white',
                    bgcolor: 'green', marginRight: '10px',
                    '&:hover': {
                        backgroundColor: '#203864', // Set your desired hover color
                    }
                }}   >Final Submit</Button>
                 </Box>
       
        </div>
    )
}

export default Cases