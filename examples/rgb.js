var five = require("johnny-five"),
    board = new five.Board()

board.on("ready", function() {
  
  var rgb = new five.Led.RGB({
    pins: [9, 10, 11],
    isAnode: true
  });

  // rgb.color("#FF0000"); // red
  // rgb.color("#00FF00"); // green
  // rgb.color("#0000FF"); // blue
  // rgb.color("#FF00FF"); // purple
  // rgb.off();
  // rgb.strobe();
  // rgb.stop();


  this.repl.inject({
    rgb: rgb
  });

});


