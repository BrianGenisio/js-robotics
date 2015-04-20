##  Expand to a Car

<style>
.reveal pre code {
    max-height: 600px;
}
</style>

```js
module.exports = Car;

function Car(five, rightPin, leftPin) {
  this.rightWheel = new five.Servo({pin: rightPin, type: "continuous"});
  this.leftWheel = new five.Servo({pin: leftPin, type: "continuous"});
}

Car.prototype.forward = function() {
  this.rightWheel.cw();
  this.leftWheel.ccw();
};

Car.prototype.reverse = function() {
  this.rightWheel.ccw();
  this.leftWheel.cw();
};

Car.prototype.right = function() {
  this.rightWheel.ccw();
  this.leftWheel.ccw();
};

Car.prototype.left = function() {
  this.rightWheel.cw();
  this.leftWheel.cw();
};

Car.prototype.stop = function() {
  this.rightWheel.stop();
  this.leftWheel.stop();
};
```