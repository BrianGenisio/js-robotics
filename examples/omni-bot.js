module.exports = OmniBot;

function OmniBot(five) {
  var configs = five.Motor.SHIELD_CONFIGS.ADAFRUIT_V1;
  
  this.m1 = new five.Motor(configs.M1);
  this.m2 = new five.Motor(configs.M2);
  this.m3 = new five.Motor(configs.M3);
}

OmniBot.prototype.moveAngle = function(angle, magnitude) {
  var components = getComponents(angle, magnitude);
  this.move(components.vx, components.vy);
};

OmniBot.prototype.move = function(vx, vy) {
  var wheels = getVectors(vx, vy);

  moveWheel(this.m1, wheels.w1);
  moveWheel(this.m2, wheels.w2);
  moveWheel(this.m3, wheels.w3);
};

OmniBot.prototype.stop = function() {
  this.m1.stop();
  this.m2.stop();
  this.m3.stop();
};

function getComponents(angle, magnitude) {
  var vx = Math.cos(angle) * magnitude;
  var vy = Math.sin(angle) * magnitude;

  return {
    vx: vx,
    vy: vy
  }
}

function getVectors(vx, vy) {
  var c = Math.sqrt(3/2);

  return {
    w1: -vx,
    w2: 0.5 * vx - c * vy,
    w3: 0.5 * vx + c * vy
  }
}

function moveWheel(motor, magnitude) {
  var minValue = 0;
  
  if(magnitude < 0 ) {
    motor.rev(Math.abs(magnitude) + minValue);
  } else {
    motor.fwd(magnitude + minValue);
  }
}