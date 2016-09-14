var assert = require ("chai").assert
var Board = require ("../lib/board.js")


describe("create board test", function() {
  it("should have a column", function() {
    var board = new Board();
    assert.equal(board.column, 4)
  })

  it("should have rows", function() {
    var board = new Board();
    assert.equal(board.row, 4)
  })

  it("should have a x value", function() {
    var board = new Board();
    assert.equal(board.x, 0);
  })

  it("should have a y value", function() {
    var board = new Board();
    assert.equal(board.y, 0);
  })

  it("should have a default height", function() {
    var board = new Board();
    assert.equal(board.height, 400);
  })

  it("should have a default width", function() {
    var board = new Board();
    assert.equal(board.width, 400);
  })

  it("should have a blocks property, which starts as an empty array", function() {
    var board = new Board();
    assert.isArray(board.blocks);
  })

  it("has a function for adding block to board", function() {
    var board = new Board();
    assert.isFunction(board.addBlock);
  })

  it("can add a block to the board", function() {

    var board = new Board();
    board.addBlock();
    assert.equal(board.blocks.length, 1);
  })


})
