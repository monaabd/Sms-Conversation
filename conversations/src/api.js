

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

//create a fun that can be called to emit the subscribeToTimer event and fee back the reults of the timer event to the consuming code

function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}
export { subscribeToTimer };