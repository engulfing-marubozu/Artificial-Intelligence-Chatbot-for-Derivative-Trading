import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { editAlgo } from '../../apiCalls'
import { getSpecificAlgo } from '../../apiCalls';
import Description from "../description"
import { useTheme, Container, Box } from '@mui/material';
import Parameters from '../parameters.jsx'
import Cases from '../cases.jsx'
import Success from '../success'
import NameAlgo from '../name&uploaded'
const EditSpecificAlgo = () => {
  const theme = useTheme();
  console.log("component mouting")
  const params = useParams();
  const [globalObject, setglobalObject] = useState({});
  useEffect(() => {
    const backendCall = async () => {
      const res = await getSpecificAlgo(params.algoId);
      setglobalObject(res.data);
      console.log(res.data);
      setContributeObject(res.data)
    }
    backendCall();
  }, [params.algoId]);

  const [ContributeObject, setContributeObject] = useState(globalObject);
  const handleContribute1 = ({ uploadedBy, algoName }) => {
    setContributeObject({ ...ContributeObject, uploadedBy, algoName });

  }
  const handleContribute2 = (description) => {
    setContributeObject({ ...ContributeObject, description });

  }
  const handleContribute3 = (parameters) => {
    setContributeObject({ ...ContributeObject, parameters });
  }
  const [toggle, settoggle] = useState(false);
  const handleContribute4 = (cases) => {
    ContributeObject.cases = cases;
    setContributeObject(ContributeObject);
    editAlgo(ContributeObject);
    settoggle(true)
  }
  return (

   toggle? <Success/>: <Container maxWidth="sm"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: theme.palette.primary.main,
        maxWidth: '100vw',
        flexDirection: 'column',
      }}>
      <Box sx={{
        marginTop: '50px'
      }} >
        <NameAlgo name={ContributeObject.algoName} upldBy={ContributeObject.uploadedBy} handleContribute1={handleContribute1}/>
        <Description desc={ContributeObject.description} handleContribute2={handleContribute2} />
        <Parameters params={ContributeObject.parameters} handleContribute3={handleContribute3} />
        <Cases cases={ContributeObject.cases} handleContribute4={handleContribute4} />
      </Box>

    </Container>
  )
}

export default EditSpecificAlgo