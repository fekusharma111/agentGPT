const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('userPrompt', async (prompt) => {
    socket.emit('status', '🤖 Thinking...');

    try {
      const response = await axios.post('http://localhost:8000/launch', { prompt });
      const logs = response.data.logs;
      const summary = response.data.summary;

      for (const log of logs) {
        socket.emit('agentMessage', log); // Send agent messages one by one
      }

      socket.emit('finalSummary', summary);
    } catch (err) {
      socket.emit('error', 'Something went wrong!');
    }
  });
});

server.listen(5000, () => {
  console.log('Relay server running on http://localhost:5000');
});
