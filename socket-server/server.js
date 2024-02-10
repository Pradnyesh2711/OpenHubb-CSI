const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors'); 
const app=express();
app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true,
        
    
    }
));

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
const io = socketIo(server,{
    cors: {
        origin: 'http://localhost:3000',
        // methods: ["GET", "POST"]
      }
});
    
// Define event handlers for Socket.IO connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for 'new-comment' event from clients
  socket.on('new-comment', (comment) => {
    console.log('New comment:', comment);
    // Broadcast the comment to all connected clients
    io.emit('comment', comment);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});
app.get('/', (req, res) => {
res.send("hello");  
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
