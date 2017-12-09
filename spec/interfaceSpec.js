var app = require("../app/app.js");

describe("Tuner interface", function() {

    it("should be turned off to start", function() {
        expect(app.interface.poweredOn()).toEqual(false);
    });

    it("should be turned on after power button has been pushed once", function() {
        app.interface.pressPower();
        expect(app.interface.poweredOn()).toEqual(true);
    });

    it("should be on station 0 after turning on", function() {
        expect(app.interface.getCurrentStationIndex()).toEqual(0);
    });

    it("should be on station 1 after pressUp has been called", function() {
        app.interface.pressUp();
        expect(app.interface.getCurrentStationIndex()).toEqual(1);
    });

    it("should be on the last station after pressDown is called twice", function() {
        app.interface.pressDown();
        app.interface.pressDown();
        expect(app.interface.getCurrentStationIndex()).toEqual(app.stations.length - 1);
    });

    it("should be on station 0 after pressUp has been called", function() {
        app.interface.pressUp();
        expect(app.interface.getCurrentStationIndex()).toEqual(0);
    });

    it("should be turned off after power button has been pushed twice", function() {
        app.interface.pressPower();
        expect(app.interface.poweredOn()).toEqual(false);
    });

  });


  