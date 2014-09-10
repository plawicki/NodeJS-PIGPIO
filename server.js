
//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var express = require('express');
//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);

var socketio = require("socket.io");
var io = socketio.listen(server, { log: false });

router.use(express.static(path.resolve(__dirname, 'client')));
router.use(express.static("public"));
router.use(express.static("bower_components"));

var gpio = require('./clibs/libgpio.js');

var output = gpio.init();

if(output != 0)
        console.log("\nPIGPIO run successfully...\n");

var gpioNumb = 17;

io.sockets.on('connection', function (socket) {

        socket.on('change power', function (power) {
                gpio.pwm(gpioNumb, power);
        });

        socket.on('change state', function (state) {

                gpio.write(gpioNumb, state);
        });
        socket.on('change gpio', function (gpioN) {
                gpioNumb = gpioN;
        });
        socket.on('read gpio', function (gpioN) {
        	var actualState = gpio.read(gpioN);
        	socket.emit('gpio', { "state": "actualState" });	
        });
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("NodeJS-PIGPIO  server listening at", addr.address + ":" + addr.port);
});
