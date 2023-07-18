// import { model, pineconeIndex} from "../index.js"
// import { TextLoader } from "langchain/document_loaders/fs/text";
// import { VectorStoreRetrieverMemory } from "langchain/memory";
// import { LLMChain } from "langchain/chains";
// import { PromptTemplate } from "langchain/prompts";
// import { PineconeStore } from "langchain/vectorstores/pinecone";
// import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { chain } from "../index.js";
const chatbotResponse = async (req, res) => {
    console.log(req.body)

    const { query } = req.body
    try{
        const response = await chain.call({ input: query });
        res.send(response.text)
    }
  catch(e){
       console.log(e);
       res.status(500).send("something went wrong.");
  }
     
   //  res.send("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.")
}

export default chatbotResponse