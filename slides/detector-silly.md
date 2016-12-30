## Put it ALL together

```js
const five = require("johnny-five");
const songs = require("j5-songs");

const board = new five.Board();

board.on("ready", function() {
  const led = new five.Led(11);
  const rgb = new five.Led.RGB({pins: [6, 9, 10], isAnode: true});
  const piezo = new five.Piezo(3);
  const motion = new five.Motion(5);

  motion.on("motionstart", function() {
    console.log('+++ motion start');
    led.strobe(200);
    rgb.color("#FF0000");
    rgb.strobe(200);
    piezo.play(songs.load('beethovens-fifth'));
  });

  motion.on("motionend", function() {
    console.log('--- motion stop');
    led.stop();
    led.off();
    rgb.stop();
    rgb.off();
  });
});
```