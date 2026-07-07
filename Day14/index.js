import { config } from "dotenv";
import { ChatGoogle } from "@langchain/google";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai"


config();


// const model = new ChatGoogle({
//   apiKey: process.env.GEMINI_API_KEY,
//   model: "gemini-2.5-flash",
// });

// const res = await model.invoke("what is express.js?");

// console.log(res.content);


const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-pro",
    apiKey: process.env.GEMINI_API_KEY,
    temperature: 0,
    maxRetries: 2,
    systemInstruction: "Create a one line tiitle for the given text",
})

const res = await model.invoke("what is express.js?");

console.log(res.content);
