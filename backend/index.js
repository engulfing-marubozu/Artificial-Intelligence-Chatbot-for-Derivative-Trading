import express from "express";
import cors from "cors"
import fs from 'fs'
import dotenv from 'dotenv';
import bodyparser from 'body-parser'
import mongoose from 'mongoose'
import http from 'http'
import { PineconeClient } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { JSONLoader } from "langchain/document_loaders/fs/json";
import { VectorStoreRetrieverMemory } from "langchain/memory";
import { LLMChain } from "langchain/chains";
import { PromptTemplate } from "langchain/prompts";
import { OpenAI } from "langchain/llms/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

dotenv.config();

const app = express();
const server = http.createServer(app)



// variables
const port = 5000;


// Database connections..
let database_url = process.env.DATABASE_URL
mongoose
  .connect(database_url)
  .then(() => {
    console.log("Connected to database ");
    // every();
  })
  .catch((err) => {
    console.error(`Error connecting to the database. Here \n${err}`);
  });

const pinecone = new PineconeClient();
await pinecone.init({
  apiKey: process.env.PINECONE_API_KEY,
  environment: process.env.PINECONE_ENVIRONMENT,
});
//Create docs with a loader
const loader = new JSONLoader("./nlpModelTrainingData/a.json");
// await pinecone.createIndex({
//   createRequest: {
//     name: "algo-embeddings",
//     dimension: 1536,
//   },
// });
const docs = await loader.load();
// console.log(docs);
 const pineconeIndex = pinecone.Index("algo-embeddings");
// //Load the docs into the vector store
await PineconeStore.fromDocuments(docs, new OpenAIEmbeddings(), {
  pineconeIndex,
});


//auto load routes and middlewares
app.use(cors());
app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyparser.json({ limit: "50mb" }));
const routeFiles = fs.readdirSync('./routes');
routeFiles.forEach(async (file) => {
  const route = await import(`./routes/${file}`);
  app.use('/', route.default);
});

const vectorStore = await PineconeStore.fromExistingIndex(
  new OpenAIEmbeddings(),
  { pineconeIndex }
);


  const model = new OpenAI({ temperature: 0.9 });
  const memory = new VectorStoreRetrieverMemory({
    // 1 is how many documents to return, you might want to return more, eg. 4
    vectorStoreRetriever: vectorStore.asRetriever(10),                                           // this retrieves the memory from the embeddings
    memoryKey: "history",
  });
  
  const prompt =
    PromptTemplate.fromTemplate(`The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know.
  Relevant pieces of previous conversation:
  {history}
  
  (You do not need to use these pieces of information if not relevant)
  
  Current conversation:
  Human: {input}
  AI:`);
   const chain = new LLMChain({ llm: model, prompt, memory });  


// Local port connection
server.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

 export { chain}


