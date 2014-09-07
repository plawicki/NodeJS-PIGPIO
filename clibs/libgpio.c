#include<stdio.h>
#include<pigpio.h>

int initGPIO(){
	return gpioInitialise();
}

void termGPIO(){
	printf("\nTerminating GPIO lib\n");
	gpioTerminate();
}

int readGPIO(unsigned GPIOnumber){
	return gpioRead(GPIOnumber);
}

int writeGPIO(unsigned GPIOnumber, unsigned level){
	return gpioWrite(GPIOnumber, level);
}

int pwmGPIO(unsigned GPIOnumber, unsigned power){
	return gpioPWM(GPIOnumber, power);
}

int resetPwmGPIO(unsigned GPIOnumber){
	return gpioPWM(GPIOnumber, 0);
}
