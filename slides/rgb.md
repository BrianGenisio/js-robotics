##  RGB

```js
const five = require("johnny-five");

new five.Board().on("ready", function() {
  const rgb = new five.Led.RGB({
    pins: [6, 9, 10],
    isAnode: true
  });

  // rgb.color("#FF0000"); // red
  // rgb.color("#00FF00"); // green
  // rgb.color("#0000FF"); // blue
  // rgb.color("#FF00FF"); // purple
  // rgb.off();
  // rgb.strobe();
  // rgb.stop();

  this.repl.inject({rgb});
});
```