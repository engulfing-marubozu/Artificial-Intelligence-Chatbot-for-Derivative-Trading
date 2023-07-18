import { Algo } from "../Models/index.js";

const getAlgoList = async (req, res) => {
    const { userName } = req.query;
    let fetchAlgo;
    if (userName == 'All')
        fetchAlgo = await Algo.find().sort({ createdAt: -1 })
    else
        fetchAlgo = await Algo.find({ uploadedBy: userName })
            .sort({ createdAt: -1 })

            res.status(200).send({ data: fetchAlgo});       
}

export {getAlgoList} 