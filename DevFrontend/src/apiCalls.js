import axios from 'axios'
const saveAlgo = async( obj )=>{
    try {
        const response =
       await axios.post(
         `http://localhost:5000/saveAlgo`,
         { AlgoObject: obj},
       );
     
     } catch (err) {
       console.log(err);
     }
}


const editAlgo=(async)=>{

}

const  getUserSpecificAlgo =(userName)=>{
  return new Promise(async(resolve, reject) => {
    try {
      const response =
     await axios.get(
       `http://localhost:5000/getAlgoList`,
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
       `http://localhost:5000/sendSpecificAlgo`,
       {params:{id:id} },
     );
     
      resolve(response.data);
   } catch (err) {
     console.log(err);
     reject(new Error('Failed to fetch Algo'))
   }
  });
}
export {saveAlgo, getUserSpecificAlgo, getSpecificAlgo}