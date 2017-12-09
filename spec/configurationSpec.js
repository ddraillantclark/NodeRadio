var app = require("../app/app.js");

describe("Tuner configuration", function() {
    
    it("should have an array of stations", function() {
        expect(app.stations.constructor).toEqual(Array);
    });

});