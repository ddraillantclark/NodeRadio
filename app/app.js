var speaker = require("audio-speaker/stream");
var http = require("http");
var lame = require("lame");

var configuration = require("./configuration");
var interface = require("./interface").getInterface(this);

var power = false;
var currentStationIndex = 0;
var httpRequest;
var radioStream;
var lameStream = new lame.Decoder;
var radioSpeaker;

var poweredOn = function () {
    return power;
};

var pressPower = function () {
    power = !power;
};

var pressUp = function () {
    currentStationIndex += 1;
    if (currentStationIndex == configuration.stations.length) {
        currentStationIndex = 0;
    }
};

var pressDown = function () {
    currentStationIndex -= 1;
    if (currentStationIndex == -1) {
        currentStationIndex = configuration.stations.length - 1;
    }
};

var getCurrentStationIndex = function () {
    return currentStationIndex;
};

module.exports.speaker = speaker;
module.exports.power = power;
module.exports.currentStationIndex = currentStationIndex;
module.exports.stations = configuration.stations;
module.exports.interface = interface;