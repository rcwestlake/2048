var assert = require ("chai").assert;
var render = require("../lib/render");

describe("render board", function(){
  var board = new Board(
    2, 2, 2, 2,
    2, 4, 4, 2,
    16, 0, 16, 2,
    2, 0, 0, 2
  );

  it("should display the values and classes on the page", function(){
    board.render();
    assert.equal();
  }
});
