var five = require("johnny-five");
var Spark = require("spark-io");
var connect = require("connect");

var board = new five.Board({
  io: new Spark({
    token: "e68f6ba3c2e4650429e108d0634fd348496f44d7",
    deviceId: "430029001447343339383037" 
  })
});

board.on("ready", function() {
  var motion = new five.Motion("D6");

  motion.on("motionstart", logEvent("START"));
  motion.on("motionend", logEvent("STOP"));
});

var events = [];
function logEvent(eventType) {
  return function() {
    console.log("logging: " + eventType);
    events.push({ type: eventType, time: Date() });
  }
}

connect()
  .use('/api/events', function(req, res) {
    res.end(JSON.stringify(events));
  })
  .listen(3002);
