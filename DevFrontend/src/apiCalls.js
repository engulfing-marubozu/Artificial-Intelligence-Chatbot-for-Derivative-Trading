import axios from 'axios'
const saveAlgo = async( obj )=>{
    try {
        const response =
       await axios.post(
         `${process.env.REACT_APP_API_URL}/saveAlgo`,
         { AlgoObject: obj},
       );
     
     } catch (err) {
       console.log(err);
     }
}


const editAlgo=async (obj)=>{
  try {
    const response =
   await axios.post(
     `${process.env.REACT_APP_API_URL}/editAlgo`,
     { AlgoObject: obj},
   );
 
 } catch (err) {
   console.log(err);
 }
}

const  getUserSpecificAlgo =(userName)=>{
  return new Promise(async(resolve, reject) => {
    try {
      const response =
     await axios.get(
       `${process.env.REACT_APP_API_URL}/getAlgoList`,
       {params:{userName:userName} },
     );

      resolve(response.data);
   } catch (err) {
     console.log(err);
     reject(new Error('Failed to fetch Algo'))
   }
  });
}

const  getSpecificAlgo =(id)=>{
  return new Promise(async(resolve, reject) => {
    try {
      const response =
     await axios.get(
       `${process.env.REACT_APP_API_URL}/sendSpecificAlgo`,
       {params:{id:id} },
     );
     
      resolve(response.data);
   } catch (err) {
     console.log(err);
     reject(new Error('Failed to fetch Algo'))
   }
  });
}


export {saveAlgo, getUserSpecificAlgo, getSpecificAlgo, editAlgo}