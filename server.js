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

router.use(express.static(path.resolve(__dirname, 'client')));

var gpio = require('./clibs/libgpio.js');

var output = gpio.init();

var power = 255;

while(true)
{
while(power <= 255 && power > 0)
{
	power--;
	output = gpio.pwm(17, power);
}
while(power >= 0 && power < 255)
{
	power++;
	gpio.pwm(17, power);
}
}

console.log(output);

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
