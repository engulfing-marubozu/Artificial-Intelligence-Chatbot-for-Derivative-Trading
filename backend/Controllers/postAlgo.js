import { Algo } from "../Models/index.js";

const postAlgo = async (req, res) => {
   const { uploadedBy, algoName, description, parameters, cases } = req.body.AlgoObject;
   const algoSave = new Algo({
      algoName, uploadedBy, description, parameters, cases
   });
   try {
      await algoSave.save();
      res
         .status(200)
         .send(
            "algo saved in database"
         );
   } catch (err) {
      console.log(err);
   }
   console.log(req.body)
}

export {postAlgo}