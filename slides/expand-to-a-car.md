##  Expand to a Car

<style>
.reveal pre code {
    max-height: 600px;
}
</style>

```js
class Car {
  constructor (five, rightPins, leftPins, speed = 255) {
    this.speed = speed;
    this.rightWheel = new five.Motor({pins: rightPins, invertPWM: true});
    this.leftWheel = new five.Motor({pins: leftPins, invertPWM: true});
  }

  forward() {
    this.rightWheel.rev(this.speed);
    this.leftWheel.fwd(this.speed);
  }

  reverse() {
    this.rightWheel.fwd(this.speed);
    this.leftWheel.rev(this.speed);
  }

  right() {
    this.rightWheel.fwd(this.speed);
    this.leftWheel.fwd(this.speed);
  }

  left() {
    this.rightWheel.rev(this.speed);
    this.leftWheel.rev(this.speed);
  }

  stop() {
    this.rightWheel.stop();
    this.leftWheel.stop();
  }
}

module.exports = Car;
```