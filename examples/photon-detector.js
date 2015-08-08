var five = require("johnny-five");
var Spark = require("spark-io");

var board = new five.Board({
  io: new Spark({
    token: "e68f6ba3c2e4650429e108d0634fd348496f44d7",
    deviceId: "430029001447343339383037" 
  })
});

board.on("ready", function() {
  var led = new five.Led("D7");
  var motion = new five.Motion("D6");

  motion.on("motionstart", function() {
    console.log('+++ motion start');
    led.on();
  });

  motion.on("motionend", function() {
    console.log('--- motion stop');
    led.off();
  });
});