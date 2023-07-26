import { Algo } from "../Models/index.js"

const editAlgo = async (req, res) => {
    const { _id, algoName, uploadedBy, description, parameters, cases } = req.body.AlgoObject;
    await Algo.findByIdAndUpdate(_id, { algoName, uploadedBy, description, parameters, cases });
    res.status(200).send();
}



export { editAlgo }