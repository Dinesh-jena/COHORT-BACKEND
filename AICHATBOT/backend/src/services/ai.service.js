const  { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});


async function generateResponse(chatHistory){
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents:chatHistory,
    })

    return response.text;

}

module.exports = generateResponse;

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }

// await main();