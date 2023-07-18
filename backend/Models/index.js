import mongoose from "mongoose";

const Schema = mongoose.Schema;

const algoSchema = new mongoose.Schema({
    algoName: {
        type:String
    },
    uploadedBy:{
        type: String
    },
    description:{
        type:String
    },
    parameters:{
        type: []
    },
    cases:{
        type: []
    }
})

const Algo= mongoose.model("Algo", algoSchema);
export { Algo}
