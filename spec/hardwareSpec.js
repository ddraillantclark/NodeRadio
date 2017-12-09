var app = require("../app/app.js");

describe("Tuner hardware", function() {
      it("should have a speaker", function() {
        expect(app.speaker).toBeTruthy();
    });
  });