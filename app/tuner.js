var http = require("http");
var lame = require("lame");

var httpRequest;
var radioStream;
var lameStream = new lame.Decoder;
var radioSpeaker;

var currentStation = null;

var nowPlaying = function () {
    return currentStation;
};

module.exports.getTuner = function (app) {

    var tuneIn = function (station) {

        if (currentStation) {
            console.log("Tuning out " + currentStation.name);
            lameStream.unpipe(radioSpeaker);
            radioStream.unpipe(lameStream);
        }

        currentStation = station;
        console.log("Tuning in " + currentStation.name);

        httpRequest = http.get(currentStation.url, 
            function (response) {
                console.log("Stream opened " + currentStation.url)
                radioStream = response;
                var sampleRate = 44100;
                radioSpeaker = app.speaker({
                    channels: 2,
                    sampleRate: sampleRate,
                    byteOrder: "LE",
                    bitDepth: 16,
                    signed: true,
                    float: false,
                    interleaved: true
                });
                radioStream.pipe(lameStream);
                lameStream.pipe(radioSpeaker);
            }
        );
    
    };

    return {
        nowPlaying: nowPlaying,
        tuneIn: tuneIn
    };
};