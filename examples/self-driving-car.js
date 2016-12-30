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
    autoCalibrate: true,
    freq: 5,
  });

  eyes
    .enable()
    .on("line", line => {
        if (line < 1000) {
            car.left();
        } else if (line > 4000) {
            car.right();
        } else {
            car.forward();
        }
    });
});