var assert = require ("chai").assert;
var Board = require ("../lib/board.js");


describe("create board test", function() {
  it("should have a column", function() {
    var board = new Board();
    assert.equal(board.column, 4);
  });

  it("should have rows", function() {
    var board = new Board();
    assert.equal(board.row, 4);
  });

  it("should have a x value", function() {
    var board = new Board();
    assert.equal(board.x, 0);
  });

  it("should have a y value", function() {
    var board = new Board();
    assert.equal(board.y, 0);
  });

  it("should have a default height", function() {
    var board = new Board();
    assert.equal(board.height, 400);
  });

  it("should have a default width", function() {
    var board = new Board();
    assert.equal(board.width, 400);
  });

  // it("should have a blocks property, which starts as an empty array", function() {
  //   var board = new Board();
  //   assert.isArray(board.blocks);
  // });
  //
  // it("has a function for adding block to board", function() {
  //   var board = new Board();
  //   assert.isFunction(board.addBlock);
  // });
  //
  // it("can add a block to the board", function() {
  //
  //   var board = new Board();
  //   board.addBlock();
  //   assert.equal(board.blocks.length, 1);
  // });

  it("should have a buildGrid function", function() {
    var board = new Board();
    assert.isFunction(board.buildGrid);
  });

  it("should make a grid with an array of 16 cells", function() {
    var board = new Board();
    assert.isArray(board.buildGrid());
    var array = board.buildGrid(4,4);
    assert.equal(array.length, 16);
  });

  it("should make a grid with appropriate corresponding x-y coordinates and null value", function() {
    var board = new Board();
    var grid = board.buildGrid(4,4);
    assert.deepEqual(grid[0], {x:0, y:0, value: null});
    assert.deepEqual(grid[1], {x:0, y:1, value: null});
    assert.deepEqual(grid[2], {x:0, y:2, value: null});
    assert.deepEqual(grid[3], {x:0, y:3, value: null});
    assert.deepEqual(grid[4], {x:1, y:0, value: null});
    assert.deepEqual(grid[5], {x:1, y:1, value: null});
    assert.deepEqual(grid[6], {x:1, y:2, value: null});
    assert.deepEqual(grid[7], {x:1, y:3, value: null});
    assert.deepEqual(grid[8], {x:2, y:0, value: null});
    assert.deepEqual(grid[9], {x:2, y:1, value: null});
    assert.deepEqual(grid[10], {x:2, y:2, value: null});
    assert.deepEqual(grid[11], {x:2, y:3, value: null});
    assert.deepEqual(grid[12], {x:3, y:0, value: null});
    assert.deepEqual(grid[13], {x:3, y:1, value: null});
    assert.deepEqual(grid[14], {x:3, y:2, value: null});
    assert.deepEqual(grid[15], {x:3, y:3, value: null});
  });

  it("should change the value of the first object in the buildGrid array", function(){

    var board = new Board();
    var grid = board.buildGrid(4,4);
    debugger;
    board.changeValue(2);
    assert.deepEqual(grid[2].value, 1);
  });

});
