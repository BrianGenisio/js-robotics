##  Or Let the Car Drive

<style>
.reveal pre code {
    max-height: 600px;
}
</style>

```js
var five = require("johnny-five"),
    Car = require("./car"),
    board = new five.Board(); 

board.on("ready", function() {
  var car = new Car(five, 11, 12);

  var eyes = new five.IR.Reflect.Array({
    emitter: 13,
    pins: ["A0", "A1", "A2", "A3", "A4", "A5"],
    autoCalibrate: true
  });

  eyes
    .enable()
    .on("line", function(err, line) {
      if (line < 1000) {
          car.left();
      } else if (line > 4000) {
          car.right();
      } else {
          car.forward();
      }
    });
});
```