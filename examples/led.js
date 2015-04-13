var five = require("johnny-five"),
    board = new five.Board()

board.on("ready", function() {
  
  var led = five.Led(11);

  // led.on();
  // led.off();
  // led.brightness(100);
  // led.strobe();
  // led.pulse();
  // led.stop();

  this.repl.inject({
    led: led
  });

});