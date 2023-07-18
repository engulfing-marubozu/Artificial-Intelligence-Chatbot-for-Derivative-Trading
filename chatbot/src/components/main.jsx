import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container, useTheme, imageListClasses } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRef } from 'react';
import getResponse from '../apiCalls';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Typewriter } from 'react-simple-typewriter'
import './main.css'

let Main = () => {
    let containerRef = useRef(null);

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    let theme = useTheme();
    let [messages, setMessages] = useState([]);
    let [userInput, setUserInput] = useState('');
    let [isBotTyping, setisBotTyping] = useState(false);
    let [transienttext, settransienttex] = useState('');
    let handleSendMessage = async () => {
        if(userInput=='')
          {
            alert("please enter your query first.")
           return;
          }
        if (userInput.trim() === '') {
            alert("please enter your query first.")
            return;
        }
        if (userInput.endsWith('\n')) {
            userInput =userInput.slice(0, -1);
        }
        settransienttex(userInput);
        setUserInput('');
        if (containerRef.current) {
            containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
        }


        let botResponse = await getBotResponse(userInput);
        let userMessage = {
            content: userInput,
            sender: 'user',
        };
        let botMessage = {
            content: botResponse,
            sender: 'bot',
        };

        let conversation = {
            userMessage,
            botMessage,
        };

        setMessages((prevMessages) => [...prevMessages, conversation]);

        if (containerRef.current) {
            containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
        }

    };

    let getBotResponse = async (userInput) => {
        setisBotTyping(true)
     //    await sleep(2000)
        let reply = await getResponse(userInput)
        setisBotTyping(false)
        return reply;
    };

    let handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            // Check if the Enter key was pressed
            handleSendMessage();
        }
    };

    return (
        <div
            style={{
                backgroundColor: theme.palette.primary.main,
            }
            }>
            <Container
                ref={containerRef}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: '100vh',
                    backgroundColor: 'white',
                    flexDirection: 'column',

                }}>
                <div
                    style={{
                        marginBottom: '350px',
                        width: '100%'
                    }}>
                    {messages.map((conversation, index) => (
                        <Box key={index}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}>
                                    <div
                                        style={{
                                            padding: '22px 15px 0px 0px',
                                        }}><AccountCircleIcon sx={{ fontSize: 35, color: theme.palette.primary.main }} /> </div>

                                    <Typography
                                        sx={{
                                            width: '700px',
                                            padding: '25px 0px 25px 0px',
                                            wordWrap: 'break-word'                       // bade kam ki cheez
                                        }}
                                    >  {conversation.userMessage.content}</Typography>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    backgroundColor: '#ecf2f9'
                                }}>   <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',

                                    }}>
                                    <div
                                        className="logo"
                                        style={{
                                            margin: '22px 15px 0px 0px',
                                            borderRadius: '15px'
                                        }}></div>
                                    <Typography
                                        sx={{
                                            width: '700px',
                                            padding: '25px 0px 25px 0px',
                                        }}
                                    >
                                        <Typewriter
                                            words={[conversation.botMessage.content]}
                                            typeSpeed={1}
                                            loop={1}
                                        /></Typography>
                                </div>
                            </div>
                        </Box>
                    ))}
                    {isBotTyping &&
                        <div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}>
                                    <div
                                        style={{
                                            padding: '22px 15px 0px 0px',
                                        }}><AccountCircleIcon sx={{ fontSize: 35, color: theme.palette.primary.main }} /> </div>

                                    <Typography
                                        sx={{
                                            width: '700px',
                                            padding: '25px 0px 25px 0px',
                                            wordWrap: 'break-word'                       // bade kam ki cheez
                                        }}
                                    > {transienttext}</Typography>
                                </div>
                            </div>


                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    backgroundColor: '#ecf2f9',
                                }}>   <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                    }}>
                                    <div
                                        className="logo"
                                        style={{
                                            margin: '22px 15px 0px 0px',
                                            borderRadius: '15px'
                                        }}></div>
                                    <Typography
                                        sx={{
                                            width: '700px',
                                            padding: '25px 0px 25px 0px',
                                        }}
                                        className="typing-indicator"
                                    > <Box class="typing-effect"><Box class="dot-1"><FiberManualRecordIcon sx={{ fontSize: '7px' }} /></Box><Box class="dot-2"><FiberManualRecordIcon sx={{ fontSize: '7px' }} /></Box><Box class="dot-3"><FiberManualRecordIcon sx={{ fontSize: '7px' }} /></Box></Box></Typography>
                                </div>
                          </div>
                        </div>
                    }
                </div>
                <div>
                </div>
                <Box
                    sx={{
                        width: '40vw',
                        backgroundColor: 'white',
                        display: 'flex',
                        position: 'fixed',
                        bottom: '15px',
                        boxShadow: '7'
                    }}>
                    <TextField
                        sx={{
                            width: '40vw',
                        }}
                        multiline
                        variant="outlined"
                        placeholder="Send a message"
                        value={userInput}
                        type="text"
                         onChange={(e) => setUserInput(e.target.value)}
                         onKeyUp={handleKeyUp}
                    />
                    <Button variant="outlined"
                        onClick={handleSendMessage}
                        sx={{
                            height: '50px',
                            color: 'white',
                            bgcolor: theme.palette.secondary.main, marginLeft: '10px',
                            '&:hover': {
                                backgroundColor: '#203864', // Set your desired hover color,
                            },
                            display: 'flex',
                            position: 'absolute',
                            bottom: '3px',
                            right: '-70px',
                            fontSize:'1rem',
                            padding:'3px'
                        }}  >Send</Button>

                </Box>
            </Container>
        </div>
    );
};

export default Main;
