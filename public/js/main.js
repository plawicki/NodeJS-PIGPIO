
$(function() {

    var socket = io.connect('http://' + location.host);
    var gpioNumb = 17;
    
    socket.on("gpio", function(gpio){
    	$('#gpioState').val(gpio.state);
    });

    $( "#slider" ).slider({
      range: "min",
      value: 128,
      min: 0,
      max: 255,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
        socket.emit('change power', ui.value);
      }
    });

    $('#gpioChange').click(function(){
        socket.emit('change gpio', $('#nr').val());
        readGPIO();
    });
    
    $('#gpioRead').click(function(){
    	readGPIO();
    });

    $('#on').click(function(){
        socket.emit('change state', 1);
        readGPIO();
    });

    $('#off').click(function(){
        socket.emit('change state', 0);
        readGPIO();
    });

    $( "#amount" ).val( $( "#slider-range-min" ).slider( "value" ) );
    
    var readGPIO = function(){
        socket.emit('read gpio', $('#nr').val());
    }
});
