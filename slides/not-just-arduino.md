##  Not Just Arduino (Imp)

<style>
.reveal pre code {
    max-height: 600px;
}
</style>

```js
var five = require("johnny-five");
var Imp = require("imp-io");

var board = new five.Board({
  io: new Imp({
    agent: "1piIF7OnOX0s"
  })
});

board.on("ready", function() {
  var led = new five.Led(9);
  var motion = new five.IR.Motion(7);

  motion.on("motionstart", function() {
    led.on();
  });

  motion.on("motionend", function() {
    led.off();
  });
});
```
