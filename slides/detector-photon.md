## Port it to the Photon

```js
const five = require("johnny-five");
const Particle = require("particle-io");

const io = new Particle({
  token: "e68f6ba3c2e4650429e108d0634fd348496f44d7",
  deviceId: "430029001447343339383037" 
});

const board = new five.Board({io});

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
```