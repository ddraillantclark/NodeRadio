var speaker = require("audio-speaker/stream");

var configuration = require("./configuration");
var interface = require("./interface").getInterface(this);
var tuner = require("./tuner").getTuner(this);

var power = false;
var currentStationIndex = 0;

tuner.tuneIn(configuration.stations[0]);


module.exports.speaker = speaker;
module.exports.power = power;
module.exports.currentStationIndex = currentStationIndex;
module.exports.stations = configuration.stations;
module.exports.interface = interface;
module.exports.tuner = tuner;