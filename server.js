
const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());

let http = require('http').createServer(app);

let io = require('socket.io')(http, {
  cors: {
    origin: ["http://localhost","http://localhost:8080","http://127.0.0.1:8080","http://localhost:3000","capacitor://localhost"],
    methods: ["GET", "POST"]
  }
});



app.use("/",express.static(__dirname + "/public"))


io.on('connection', (socket) => {
  console.log('a user connected with id: ' + socket.id);

  socket.on('broadcast-message', function(msg) {
    console.log(msg);
    io.emit('displayContent',msg);
  })

  socket.on('disconnect', () => console.log('Client disconnected'));

});

http.listen(5000, () => {
  console.log('listening on *:5000');
});
