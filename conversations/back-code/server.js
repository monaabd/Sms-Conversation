// 1.1) aval file birone src baz kon ba servr.js o onto bezar bad npm install -g nodemon dar hamon ja ke server has
// 1.2) bad dar ye terminal e dige nodemon server.js run kon baza baz bashe (har bar nakhay run koni servero)

// first we have to make our webserver az bellow
// 1)import socket.io
// const io = require('socket.io')();

// // 2)handling-a-websocket-client-connection.js handle connecton of a client so that u can publish emit event to that client
// io.on('connection', (client) => {
//   // here you can start emitting events to the client

// });

// //3) u need to tell socket.io to start listening for clients
// const port = 8000;
// io.listen(port);
// console.log('we r listening 8000 ', port);
const io = require('socket.io')();


io.on('connection', (client) => {
  console.log('a user connected');

  // when the client emits 'new message'this listens and executs

  client.on('emitText', (text) => {
    text,
    console.log(text, 'emitted Text');

    // we tell the client to execute 'new message'

    client.emit('addText', text);
  });
});

// the connection event is for incoming sockets

// here you can start emitting events to the client


const port = 8000;

io.listen(port);

console.log('server is alive at: 8000 ', port);


// Socket.IO is composed of two parts:


// A server that integrates شود می ادغام with (or mounts on) the Node.JS HTTP Server: socket.io

// A client library that loads on the browser side: socket.io-client
