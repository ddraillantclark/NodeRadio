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
        currentStation = station;
    
        httpRequest = http.get(station.url, 
            function (response) {
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