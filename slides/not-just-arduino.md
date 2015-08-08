##  Not Just Arduino (Particle)

<style>
.reveal pre code {
    max-height: 600px;
}
</style>

```js
var five = require("johnny-five");
var Spark = require("spark-io");

var board = new five.Board({
  io: new Spark({
    token: "API_TOKEN",
    deviceId: "DEVICE_ID" 
  })
});

board.on("ready", function() {
  var led = new five.Led("D7");
  var motion = new five.Motion("D6");

  motion.on("motionstart", function() {
    led.on();
  });

  motion.on("motionend", function() {
    led.off();
  });
});
```
