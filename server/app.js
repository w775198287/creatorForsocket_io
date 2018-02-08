'use strict'

let app = require('express')();
let server = require('http').Server(app);
let io = require('socket.io')(server);

server.listen(4747, function() {
    console.log('listening on:4747');
});


io.on('connection',function(socket){
    console.log("someone connected");
    socket.emit('hello', 'success');
});