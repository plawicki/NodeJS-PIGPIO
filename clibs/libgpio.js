var ffi = require('ffi');

var libgpio = ffi.Library('./clibs/libgpio_smoke', {
	'initGPIO': [ 'int', []],
	'termGPIO': [ 'void', []],
	'readGPIO': [ 'int', [ 'int' ]],
	'writeGPIO': [ 'int', [ 'int', 'int' ]],
	'pwmGPIO': [ 'int', [ 'int', 'int' ]],
	'resetPwmGPIO': [ 'int', [ 'int' ]]
});

exports.init = libgpio.initGPIO;
exports.term = libgpio.termGPIO;
exports.read = libgpio.readGPIO;
exports.write = libgpio.writeGPIO;
exports.pwm = libgpio.pwmGPIO;
exports.reset = libgpio.resetPwmGPIO;

