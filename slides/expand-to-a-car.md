##  Expand to a Car

<style>
.reveal pre code {
    max-height: 600px;
}
</style>

```js
const speed = 200;

class Car {
  constructor (five, rightPins, leftPins) {
    this.rightWheel = new five.Motor({pins: rightPins, invertPWM: true});
    this.leftWheel = new five.Motor({pins: leftPins, invertPWM: true});
  }

  forward() {
    this.rightWheel.rev(speed);
    this.leftWheel.fwd(speed);
  }

  reverse() {
    this.rightWheel.fwd(speed);
    this.leftWheel.rev(speed);
  }

  right() {
    this.rightWheel.fwd(speed);
    this.leftWheel.fwd(speed);
  }

  left() {
    this.rightWheel.rev(speed);
    this.leftWheel.rev(speed);
  }

  stop() {
    this.rightWheel.stop();
    this.leftWheel.stop();
  }
}

module.exports = Car;
```