const http = require('http');
const app = require('../app');
const server = http.createServer(app);
const { Server } = require("socket.io");
const Notification = require('../controller/notifications');
const notifi = new Notification();

const io = require('socket.io')(server, {
  cors: {
    origins: ['http://localhost:8080']
  }
});
io.on('connection', (socket) => {

  socket.on('disconnect', () => {

    console.log('user disconnected');

  });

  socket.on('username', async (data) => {

    // notifi.create({
    //   title: 'rasim beyendi',
    //   author: data.username,
    //   des: 'ooooooo muellim',
    // })
    
    const notifications = await notifi.get(data.username);

    io.emit('notification', notifications);

  });

});

module.exports = { Server, server, io };