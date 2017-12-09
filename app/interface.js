module.exports.getInterface = function (app) {

    var poweredOn = function () {
        return app.power;
    };
    
    var pressPower = function () {
        app.power = !app.power;
    };
    
    var pressUp = function () {
        app.currentStationIndex += 1;
        if (app.currentStationIndex == app.stations.length) {
            app.currentStationIndex = 0;
        }
    };
    
    var pressDown = function () {
        app.currentStationIndex -= 1;
        if (app.currentStationIndex == -1) {
            app.currentStationIndex = app.stations.length - 1;
        }
    };
    
    var getCurrentStationIndex = function () {
        return app.currentStationIndex;
    };

    return {
        poweredOn: poweredOn,
        pressPower: pressPower,
        getCurrentStationIndex: getCurrentStationIndex,
        pressUp: pressUp,
        pressDown: pressDown
    };
};