##  Play a Song?

```js
const five = require("johnny-five");
const songs = require("j5-songs");

new five.Board().on("ready", function() {
  const piezo = new five.Piezo(3);

  //piezo.tone(440, 500);

  //piezo.play({
  //  song: "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
  //  beats: 1 / 4,
  //  tempo: 100
  //});

  piezo.play(songs.load('mario-intro'));
  //piezo.play(songs.load('starwars-theme'));

  this.repl.inject({piezo, songs});
});
```