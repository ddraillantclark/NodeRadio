var speaker = require("audio-speaker/stream");

var power = false;

var poweredOn = function () {
    return power;
};

var pressPower = function() {
    power = !power;
};

module.exports.speaker = speaker;
module.exports.poweredOn = poweredOn;
module.exports.pressPower = pressPower;