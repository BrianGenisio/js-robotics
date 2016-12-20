##  And Control the Car

<style>
.reveal pre code {
    max-height: 600px;
}
</style>

```js
const five = require("johnny-five");
const Car = require("./car");
const board = new five.Board();
const stdin = process.openStdin();

board.on("ready", function() {
  const car = new Car(five,
    {pwm: 9, dir: 10},
    {pwm: 11, dir: 12}
  );

  const keyMap = {
    up:    "forward",
    down:  "reverse",
    left:  "left",
    right: "right",
    space: "stop"
  };

  stdin.on('keypress', (chunk, key) => {
    if(keyMap[key.name]) {
      car[keyMap[key.name]]();
    }
  });
});
```