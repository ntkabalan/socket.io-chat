// Initialize server
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

io.on('connection', (socket) => {
    console.log('Client connected...');

    socket.on('disconnect', () => {
        console.log('Client disconnected...');
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

// Index route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const portNumber = 8080;
http.listen(portNumber, () => {
    console.log(`Listening on port ${portNumber}...`);
});