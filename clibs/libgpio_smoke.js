var ffi = require('ffi');

var gpios = {
	0: 0,
	1: 0,
	2: 0,
	3: 0,
	4: 0,
	5: 0,
	6: 0,
	7: 0,
	8: 0,
	9: 0,
	10: 0,
	11: 0,
	12: 0,
	13: 0,
	14: 0,
	15: 0,
	16: 0,
	17: 0,
	18: 0,
	19: 0,
	20: 0,
	21: 0,
	22: 0,
	23: 0,
	24: 0,
	25: 0,
	26: 0,
	27: 0,
	28: 0,
	29: 0
};

var libgpio = {
	initGPIO:     function(){ console.log("\nPIGPIO initialized\n"); },
	termGPIO:     function(){ console.log("\nPIGPIO terminated \n"); },
	readGPIO:     function(gpio){ console.log("\n" + gpio + "has value " + gpios[gpio] + "\n"); },
	
	writeGPIO:    function(gpio, state){ 
					gpios[gpio] = state; 
					console.log("\n" + gpio + "has chagned value to " + state + "\n"); 
				  },
	pwmGPIO:      function(gpio, state){ 
					gpios[gpio] = state; 
					console.log("\n" + gpio + "has chagned pwm value to " + state + "\n");  },
	resetPwmGPIO: function(){ 
		gpios = {
			0: 0,
			1: 0,
			2: 0,
			3: 0,
			4: 0,
			5: 0,
			6: 0,
			7: 0,
			8: 0,
			9: 0,
			10: 0,
			11: 0,
			12: 0,
			13: 0,
			14: 0,
			15: 0,
			16: 0,
			17: 0,
			18: 0,
			19: 0,
			20: 0,
			21: 0,
			22: 0,
			23: 0,
			24: 0,
			25: 0,
			26: 0,
			27: 0,
			28: 0,
			29: 0
		};
		console.log("\nAll gpios reseted successfully\n"); }
};

exports.init = libgpio.initGPIO;
exports.term = libgpio.termGPIO;
exports.read = libgpio.readGPIO;
exports.write = libgpio.writeGPIO;
exports.pwm = libgpio.pwmGPIO;
exports.reset = libgpio.resetPwmGPIO;
