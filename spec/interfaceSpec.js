var app = require("../app/app.js");

describe("Tuner interface", function() {

    it("should be turned off to start", function() {
        expect(app.poweredOn()).toEqual(false);
    });

    it("should be turned on after power button has been pushed once", function() {
        app.pressPower();
        expect(app.poweredOn()).toEqual(true);
    });

    it("should be turned off after power button has been pushed twice", function() {
        app.pressPower();
        expect(app.poweredOn()).toEqual(false);
    });

  });


  