const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
   console.log("API KEY:", process.env.GEMINI_API_KEY?.slice(0, 10));
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
 
  console.log(response.text);
}

// main();

async function generateCaption(base64ImageFile) {
  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    },
    { text: "Caption this image." },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
    config:{
      systemInstruction:`
      You are an expert in generating caption for images.
      You generate single caption for the image.
      Your caption should be short and concise.
      You use hastage and emoji in the caption. 
      `
    }
  });
  return response.text;
}

module.exports = generateCaption;
