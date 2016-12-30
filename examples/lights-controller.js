var five = require("johnny-five");
var Tessel = require("tessel-io");
var socket = require("socket.io-client")("http://webhooks-bridge.herokuapp.com");

var board = new five.Board({
  io: new Tessel()
});

board.on("ready", function() {
    const lights = new five.Relays(['A1','A2','A3','A4','A5','A6',]);

    lights.close();
    
    let sequenceCount = 0;
    let sequenceDirection = 1;
    let sequenceTimeout = undefined;

    const actions = {
        allToggle: function() {
            lights.toggle();
        },

        allOn: function() {
            lights.open();
        },

        allOff: function() {
            lights.close();
        },

        toggle: function(params) {
            const light = lights[params.pin - 1];
            if(!light) return;

            light.toggle();
        },

        setOne: function(params) {
            console.log("light: ", params.index);
            const light = lights[params.index];
            
            if(!light) return;

            if(params.state === 'on') {
                light.open();
            } else if(params.state === 'off') {
                light.close();
            }
        },

        stop: function() {
            if(sequenceTimeout) {
                clearInterval(sequenceTimeout);
                clearTimeout(sequenceTimeout);
                sequenceTimeout = undefined;
            }

            actions.allOff();
        },

        roundRobin: function() {
            actions.stop();

            sequenceCount = 0;
            sequenceTimeout = setInterval(function() {
                lights[sequenceCount++ % 6].toggle();
            }, 200);
        },

        random: function() {
            actions.stop();
            actions._random();
        },

        _random: function() {
            sequenceTimeout = setTimeout(function() {
                lights[Math.floor(Math.random() * 6)].toggle();
                actions._random();
            }, Math.floor(Math.random() * 500));
        },



        upDown: function() {
            actions.stop();

            sequenceCount = 0;
            sequenceTimeout = setInterval(function() {
                if(sequenceCount >= 0 && sequenceCount <= 5) {
                    lights[sequenceCount].toggle();
                }

                if(sequenceCount < 0) {
                    sequenceDirection = 1;
                } else if(sequenceCount > 5) {
                    sequenceDirection = -1;
                }

                sequenceCount += sequenceDirection;
            }, 200);
        }
    };

    socket.on("webhook", function(data){
        if(data.webhookId !== '91efd220-b516-11e6-b9ee-3fb14d81574e') return;
        
        const action = actions[data.query.command];
        if(!action) return;

        action(data.query);
    });
});