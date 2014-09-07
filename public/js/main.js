$(function() {

	var socket = io.connect('http://' + location.host);

    $( "#slider" ).slider({
      range: "min",
      value: 128,
      min: 0,
      max: 255,
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.value );
        socket.emit('change power', ui.value);
      }
    });

    $('#on').click(function(){
    	socket.emit('change state', 1);
    });

    $('#off').click(function(){
    	socket.emit('change state', 0);
    });

    $( "#amount" ).val( $( "#slider-range-min" ).slider( "value" ) );
});
