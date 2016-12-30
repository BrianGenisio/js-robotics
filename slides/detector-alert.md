## Alert my phone!
### Send a message to IFTTT

```js
const five = require("johnny-five");
const http = require("http");

const board = new five.Board();

function sendNotification() {
  console.log("Something Moved!!!");
  http.request({
    host: "maker.ifttt.com",
    path: "/trigger/MOVE/with/key/kIKSh5C6yBeZnGU_6BTYYq8KLtcR42zbEQGF2Sil_0r"
  }).end();
}

board.on("ready", function() {
  var motion = new five.Motion(5);
  motion.on("motionstart", sendNotification);
});
```