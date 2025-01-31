const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" },
});

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/TOPS_DB").then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// Define Schema and Model
const chatSchema = new mongoose.Schema({
    username: String,
    message: String,
    timestamp: { type: Date, default: Date.now },
});
const Chat = mongoose.model("Chat", chatSchema);

// Socket.io for Real-Time Chat
io.on("connection", (socket) => {
    console.log("New user connected:", socket.id);

    // Send chat history when a user connects
    Chat.find().then(messages => socket.emit("chatHistory", messages));

    // Handle new message
    socket.on("sendMessage", async (data) => {
        const chatMessage = new Chat(data);
        await chatMessage.save();
        io.emit("receiveMessage", data); // Send to all clients
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

// API to get all messages
app.get("/messages", async (req, res) => {
    const messages = await Chat.find();
    res.json(messages);
});

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
