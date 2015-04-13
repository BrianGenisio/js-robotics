var five = require("johnny-five"),
    board = new five.Board(),
    OmniBot = require("./omni-bot"),
    stdin = process.openStdin(); 

require('tty').setRawMode(true);    

board.on("ready", function() {

  var bot = new OmniBot(five, "M1", "M2", "M3");

  var keyMap = {
    up:    {angle: 0, mag: 255},
    down:  {angle: 180, mag: 255},
    left:  {angle: 270, mag: 255},
    right: {angle: 90, mag: 255},
    space: {angle: 0, mag: 0},
  };

  stdin.on('keypress', function (chunk, key) {
    if(keyMap[key.name]) {
      var command = keyMap[key.name];
      bot.moveAngle(command.angle, command.mag);
    }
  });
});