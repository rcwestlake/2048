var assert = require ("chai").assert;
var Cell = require ("../lib/cell.js");


describe("testing score functionality", function() {
  var cell = new Cell();
  it("should be able to calculate the score", function() {
    assert.isFunction(cell.calculateScore);
  });

  it("should be able to set the high score", function() {
    assert.isFunction(cell.setHighScore);
  });

  it("should update values of each cell with each move", function() {
    assert.isFunction(cell.update);
  })
});
