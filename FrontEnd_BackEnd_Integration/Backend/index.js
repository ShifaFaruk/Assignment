const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Example API route
app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from Backend!" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
