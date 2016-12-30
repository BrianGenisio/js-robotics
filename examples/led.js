const five = require("johnny-five");

new five.Board().on("ready", function() {
  const led = five.Led(11);

  // led.on();
  // led.off();
  // led.brightness(100);
  // led.strobe();
  // led.pulse();
  // led.stop();

  this.repl.inject({led});
});