var five = require("johnny-five"),
    board = new five.Board()

board.on("ready", function() {
  this.rightWheel = new five.Motor({
    pins: { pwm: 9, dir: 10 },
    invertPWM: true
  });

  this.leftWheel = new five.Motor({
    pins: { pwm: 11, dir: 12 },
    invertPWM: true
  });

  rightWheel.rev(255);
  leftWheel.fwd(255);

  setTimeout(function() {
    rightWheel.ccw(255);
    leftWheel.fwd(255);
  }, 1000);

  setTimeout(function() {
    rightWheel.stop();
    leftWheel.stop();
  }, 2000);
});