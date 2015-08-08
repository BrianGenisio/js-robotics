var five = require("johnny-five");
var Spark = require("spark-io");
var http = require("http");

var board = new five.Board({
  io: new Spark({
    token: "e68f6ba3c2e4650429e108d0634fd348496f44d7",
    deviceId: "430029001447343339383037" 
  })
});

function sendNotification() {
  http.request({
    host: "maker.ifttt.com",
    path: "/trigger/MOVE/with/key/kIKSh5C6yBeZnGU_6BTYYq8KLtcR42zbEQGF2Sil_0r"
  }).end();
}

board.on("ready", function() {
  var motion = new five.Motion("D6");
  motion.on("motionstart", sendNotification);
});