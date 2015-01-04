## Line Follower

<style>
.reveal pre code {
    max-height: 600px;
}
</style>

```js
var five = require("johnny-five");

new five.Board().on("ready", function () {
    var leftWheel = new five.Servo({ pin: 9, type: "continuous" }),
        rightWheel = new five.Servo({ pin: 10, type: "continuous" }),
        eyes = new five.IR.Reflect.Array({
          emitter: 13,
          pins: ["A0", "A1", "A2", "A3", "A4", "A5"]
        });

    eyes
      .loadCalibration(JSON.parse(fs.readFileSync(".calibration")))
      .enable()
      .on("line", function(err, line) {
        if (line < 1000) {
          leftWheel.center();
          rightWheel.cw();
        } else if (line > 4000) {
          leftWheel.ccw();
          rightWheel.center();
        } else {
          leftWheel.ccw();
          rightWheel.cw();
        }
      });
});
```