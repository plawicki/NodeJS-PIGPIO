#include<stdio.h>
#include<pigpio.h>

int main(){

if(gpioInitialise() < 0)
	printf("\nSomething went wrong...\n");
else
{
	if(gpioPWM(3, 128) == 0)
		printf("\nRunning well...\n");
	else
		printf("\nErrors during lib run\n");
}


return 0;
}
