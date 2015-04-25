##  Control Some Servos

<style>
.reveal pre code {
    max-height: 600px;
}
</style>

```js
var five = require("johnny-five"),
    board = new five.Board()

board.on("ready", function() {
  var rightWheel = new five.Servo({pin: 11, type: "continuous"});
  var leftWheel = new five.Servo({pin: 12, type: "continuous"});

  rightWheel.cw();
  leftWheel.ccw();

  setTimeout(function() {
    rightWheel.ccw();
    leftWheel.cw();
  }, 1000);

  setTimeout(function() {
    rightWheel.stop();
    leftWheel.stop();
  }, 2000);

});
```