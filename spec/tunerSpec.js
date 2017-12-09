var app = require("../app/app.js");

describe("Tuner", function() {

    it("should have nothing playing to start", function() {
        expect(app.tuner.nowPlaying()).toEqual(null)
    });

    it("should have a station playing once tuneIn has been called", function() {
        var station = {
            name: "CBC Radio 1",
            url: "http://cbc_r1_mtl.akacast.akamaistream.net/7/35/451661/v1/rc.akacast.akamaistream.net/cbc_r1_mtl"
        };
        app.tuner.tuneIn(station);
        expect(app.tuner.nowPlaying()).toEqual(station);
    });

  });


  