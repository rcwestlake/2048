var assert = require ("chai").assert;
var Board = require ("../lib/board.js");


describe("board", function() {
  it("should have a column", function() {
    var board = new Board();
    assert.equal(board.column, 4);
  });

  it("should have rows", function() {
    var board = new Board();
    assert.equal(board.row, 4);
  });


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
    assert.deepEqual(grid[0], {row:0, column:0, value: null});
    assert.deepEqual(grid[1], {row:0, column:1, value: null});
    assert.deepEqual(grid[2], {row:0, column:2, value: null});
    assert.deepEqual(grid[3], {row:0, column:3, value: null});
    assert.deepEqual(grid[4], {row:1, column:0, value: null});
    assert.deepEqual(grid[5], {row:1, column:1, value: null});
    assert.deepEqual(grid[6], {row:1, column:2, value: null});
    assert.deepEqual(grid[7], {row:1, column:3, value: null});
    assert.deepEqual(grid[8], {row:2, column:0, value: null});
    assert.deepEqual(grid[9], {row:2, column:1, value: null});
    assert.deepEqual(grid[10], {row:2, column:2, value: null});
    assert.deepEqual(grid[11], {row:2, column:3, value: null});
    assert.deepEqual(grid[12], {row:3, column:0, value: null});
    assert.deepEqual(grid[13], {row:3, column:1, value: null});
    assert.deepEqual(grid[14], {row:3, column:2, value: null});
    assert.deepEqual(grid[15], {row:3, column:3, value: null});
  });

  it("should change the value of the first object in the buildGrid array", function(){
    var board = new Board();
    var grid = board.buildGrid(4,4);
    board.changeValue(2);
    assert.deepEqual(grid[2].value, 1);
  });

  it("should calculate the number of cells with a value of null", function(){
    var board = new Board();
    board.buildGrid(4,4);
    var result = board.checkAvailalbeCells();
    assert.equal(result.length, 16);
    board.changeValue(2);
    var resultTwo = board.checkAvailalbeCells();
    assert.deepEqual(resultTwo.length, 15);
  });

  it("should generate a random number based on the availableCells", function(){
    var board = new Board();
    board.cells = [ {row: 0, column: 0, value: null}, {row: 0, column: 1, value: null} ];
    var randomNum = board.randomNumber();
    assert(randomNum <=2);
  });

  it("should give a value of 2 to a random available cell", function(){
    var board = new Board();
    board.cells = [ {row: 0, column: 0, value: null} ];
    board.addValueToAvailableCell();
    assert.equal(board.cells[0].value, 2);
  });
});

describe("finding cells", function(){
  var board = new Board();
  board.cells = [
      {row: 0, column: 0, value: 2},
      {row: 0, column: 1, value: 4},
      {row: 0, column: 2, value: null},
      {row: 0, column: 3, value: 16}
    ];

  it("should confirm findCell is a function", function(){
    var board = new Board();
    assert.isFunction(board.findCell);
  });

  it("should return the 1 cell with a row of 0, column of 0, and value of 2", function(){
    var row = 0;
    var column = 0;
    var targetedCell = board.findCell(row, column);
    assert.equal(targetedCell.length, 1);
    assert.equal(targetedCell[0].value, 2);
  });

  it("should return the 1 cell with a row of 0, column of 1, and value of 4", function(){
    var row = 0;
    var column = 1;
    var targetedCell = board.findCell(row, column);
    assert.equal(targetedCell.length, 1);
    assert.equal(targetedCell[0].value, 4);
  });

  it("should return the 1 cell with a row of 0, column of 2, and value of null", function(){
    var row = 0;
    var column = 2;
    var targetedCell = board.findCell(row, column);
    assert.equal(targetedCell.length, 1);
    assert.equal(targetedCell[0].value, null);
  });

  it("should return the 1 cell with a row of 0, column of 3, and value of 16", function(){
    var row = 0;
    var column = 3;
    var targetedCell = board.findCell(row, column);
    assert.equal(targetedCell.length, 1);
    assert.equal(targetedCell[0].value, 16);
  });
});

describe("moving values", function() {

  it.skip();

  it.skip();


});
