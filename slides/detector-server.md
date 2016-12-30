## Make it into an API

```js
const five = require("johnny-five");
const connect = require("connect");

const board = new five.Board();

board.on("ready", function() {
  const motion = new five.Motion(5);

  motion.on("motionstart", logEvent("START"));
  motion.on("motionend", logEvent("STOP"));
});

const events = [];
function logEvent(eventType) {
  return () => {
    console.log("logging: " + eventType);
    events.push({ type: eventType, time: Date() });
  }
}

connect()
  .use('/api/events', (req, res) => {
    res.end(JSON.stringify(events));
  })
  .listen(3002);
```