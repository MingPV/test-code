const express = require("express");
const cors = require("cors");
const WebSocket = require("ws"); // Import WebSocket package
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Create HTTP server for Express
const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Create WebSocket server
const wss = new WebSocket.Server({ server }); // Attach WebSocket server to the same HTTP server

// Handle WebSocket connection
wss.on("connection", (ws) => {
  console.log("New WebSocket connection");

  // Send a message to the client every 3 seconds
  const interval = setInterval(() => {
    ws.send("Hello from the WebSocket server!");
  }, 3000);

  // Listen for messages from the client
  ws.on("message", (message) => {
    console.log(`Received: ${message}`);
  });

  // Close WebSocket connection
  ws.on("close", () => {
    console.log("WebSocket connection closed");
    clearInterval(interval); // Clear the interval when connection is closed
  });
});
