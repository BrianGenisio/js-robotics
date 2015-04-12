var five = require("johnny-five"),
    Car = require("./car"),
    board = new five.Board(),
    stdin = process.openStdin(); 

require('tty').setRawMode(true);    

board.on("ready", function() {

  var car = new Car(five, 11, 12);

  var keyMap = {
    up:    "forward",
    down:  "reverse",
    left:  "left",
    right: "right",
    space: "stop"
  };

  stdin.on('keypress', function (chunk, key) {
    if(keyMap[key.name]) {
      car[keyMap[key.name]]();
    }
  });
});