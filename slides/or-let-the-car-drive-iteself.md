##  Let the Car Drive

<style>
.reveal pre code {
    max-height: 600px;
}
</style>

```js
const five = require("johnny-five");
const Car = require("./car");
const board = new five.Board(); 

board.on("ready", function() {
  const car = new Car(five,
    {pwm: 9, dir: 10},
    {pwm: 11, dir: 12}
  );

  const eyes = new five.IR.Reflect.Array({
    emitter: 13,
    pins: ["A0", "A1", "A2", "A3", "A4", "A5"],
    autoCalibrate: true
  });

  eyes
    .enable()
    .on("line", err => {
        const line = this.line;
        if (line < 1000) {
            car.left();
        } else if (line > 4000) {
            console.log("right");
        } else {
            console.log("forward");
        }
    });
});
```