const five = require("johnny-five");

const board = new five.Board();

board.on("ready", function() {
  const led = new five.Led(11);
  const motion = new five.Motion(5);

  motion.on("motionstart", function() {
    console.log('+++ motion start');
    led.on();
  });

  motion.on("motionend", function() {
    console.log('--- motion stop');
    led.off();
  });
});