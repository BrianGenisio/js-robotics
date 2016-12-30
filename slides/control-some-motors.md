##  Control Some Motors

<style>
.reveal pre code {
    min-height: 620px;
    max-height: 620px;
}
</style>

```js
const five = require("johnny-five");

new five.Board().on("ready", () => {
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

  setTimeout(() => {
    rightWheel.ccw(255);
    leftWheel.fwd(255);
  }, 1000);

  setTimeout(() => {
    rightWheel.stop();
    leftWheel.stop();
  }, 2000);
});
```