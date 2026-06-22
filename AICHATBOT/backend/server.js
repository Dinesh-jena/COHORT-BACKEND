require("dotenv").config();
const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateResponse = require("./src/services/ai.service");

const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

let chatHistory = [
  {
    role: "user",
    parts: [{ text: "who is the PM of INDIA in 2019 ?" }],
  },
  {
    role: "model",
    parts: [
      {
        text: "Narendra Modi was the Prime Minister of India in 2019. He was re-elected for his second term in May 2019.",
      },
    ],
  },
];

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnect");
  });

  socket.on("ai-message", async (data) => {
    console.log("Recived AI message:", data.prompt);

    chatHistory.push({
      role: "user",
      parts: [{ text: data.prompt }],
    });

    const response = await generateResponse(chatHistory);

    chatHistory.push({
      role: "model",
      parts: [{ text: response }],
    });

    socket.emit("ai-message-response", { response });
  });
});

httpServer.listen(3000, () => {
  console.log("server is running on port 3000");
});
