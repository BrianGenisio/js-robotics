##  Play a Song?

<style>
.reveal pre code {
    max-height: 600px;
}
</style>

```js
var five = require("johnny-five"),
    songs = require("j5-songs"),
    board = new five.Board();

board.on("ready", function() {
  
  var piezo = new five.Piezo(8);

  //piezo.tone(440, 500);

  //piezo.play({
  //  song: "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
  //  beats: 1 / 4,
  //  tempo: 100
  //});

  //piezo.play(songs.load('mario-intro'));
  piezo.play(songs.load('starwars-theme'));

  this.repl.inject({
    piezo: piezo
  });
});
```