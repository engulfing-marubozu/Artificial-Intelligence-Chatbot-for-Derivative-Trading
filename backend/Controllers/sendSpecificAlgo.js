import { Algo } from "../Models/index.js";

const sendSpecificAlgo = async (req, res) => {
       const {id} = req.query;
    let fetchSpecificAlgo;
        fetchSpecificAlgo = await Algo.findById(id)
        console.log(fetchSpecificAlgo);
            res.status(200).send({ data: fetchSpecificAlgo});       
}

export {sendSpecificAlgo} 