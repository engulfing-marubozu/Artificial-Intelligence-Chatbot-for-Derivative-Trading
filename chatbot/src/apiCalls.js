import axios from 'axios'

const getResponse = async (query)=>{
     return new Promise(async(resolve, reject) => {
        try {
            const response =
           await axios.post(
             `http://localhost:5000/chatbotResponse`,
             { query:query},
           );
            resolve(response.data);
         } catch (err) {
           console.log(err);
           reject(new Error('Function execution failed'));
         }
     })
}

export default getResponse;



