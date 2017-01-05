var five = require("johnny-five");
var Particle = require("particle-io");

var board = new five.Board({
  io: new Particle({
    token: "e68f6ba3c2e4650429e108d0634fd348496f44d7",
    deviceId: "35003a000f47343337373737" 
  })
});
 
board.on("ready", function() {
  console.log("Device Ready..");
  var led = new five.Led(7);
  led.blink();
});
