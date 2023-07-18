import React, { useState } from 'react'
import Contribute1 from './nameAlgo';
import { Contribute2 } from './description.jsx';
import Contribute3 from './parameters.jsx.jsx';
import Contribute4 from './cases';
import Success from './success';
import {saveAlgo} from '../../apiCalls'
const Contribute = () => {
  const globalObject = {
    uploadedBy: '',
    algoName: '',
    description: '',
    parameters: [],
    cases:[]
  }
  const [toggle, settoggle] = useState([true, false, false, false]);
  const [ContributeObject, setContributeObject] = useState(globalObject);
  const handleContribute1 = ({uploadedBy, algoName}) => {
    setContributeObject({ ...ContributeObject, uploadedBy, algoName });
    const newtoglgle = [...toggle];
    newtoglgle[0] = false;
    newtoglgle[1] = true;
    settoggle(newtoglgle);
  }
  const handleContribute2 = (description) => {
    setContributeObject({ ...ContributeObject, description });
    const newtoglgle = [...toggle];
    newtoglgle[1] = false;
    newtoglgle[2] = true;
    settoggle(newtoglgle);
   
  }
  const handleContribute3 = (parameters) => {
    setContributeObject({ ...ContributeObject, parameters });
    const newtoglgle = [...toggle];
    newtoglgle[2] = false;
    newtoglgle[3] = true;
    settoggle(newtoglgle);
  }

  const handleContribute4 = (cases) => {
    ContributeObject.cases = cases;
    setContributeObject(ContributeObject);
      saveAlgo(ContributeObject);
    const newtoglgle = [...toggle];
    newtoglgle[3] = false;
    console.log(ContributeObject)
    settoggle(newtoglgle);
        
  }


  return (
    toggle[0] ? <Contribute1 handleContribute1={handleContribute1} /> : toggle[1] ? <Contribute2 handleContribute2={handleContribute2} /> : toggle[2]? <Contribute3 handleContribute3={handleContribute3} />: toggle[3]?<Contribute4 handleContribute4={handleContribute4} /> : <Success/>
  )
}

export default Contribute