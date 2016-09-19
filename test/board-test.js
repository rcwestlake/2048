var assert = require ("chai").assert;
var Board = require ("../lib/board.js")[0];
var Cell = require ("../lib/board.js")[1];


describe("board", function() {
  it('should construct a board with tiles based on the arguments', function() {
    var board = new Board(
      0, 0, 0, 2,
      2, 4, 4, 0,
      2, 4, 4, 0,
      2, 4, 4, 0
    );
    assert.equal(board.cells[15].value, 0);
    assert.equal(board.cells[3].value, 2);
  });

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

  it("should make a grid with appropriate corresponding rows and columns and null value", function() {
    var board = new Board();
    var grid = board.buildGrid(4,4);
    board.cells = [
        new Cell(0, 0, 2),
        new Cell(0, 1, 0),
        new Cell(0, 2, 2),
        new Cell(0, 3, 4),
        new Cell(1, 0, 2),
        new Cell(1, 1, 0),
        new Cell(1, 2, 0),
        new Cell(1, 3, 0),
        new Cell(2, 0, 8),
        new Cell(2, 1, 8),
        new Cell(2, 2, 0),
        new Cell(2, 3, 0),
        new Cell(3, 0, 2),
        new Cell(3, 1, 0),
        new Cell(3, 2, 16),
        new Cell(3, 3, 16)
      ];
    assert.equal(board.cells[0].row, 0);
    assert.equal(board.cells[15].column, 3);
    assert.equal(board.cells[15].column, 3);
    assert.equal(board.cells[4].row, 1);
    assert.equal(board.cells[5].value, 0);

  });
  // it("should change the value of the first object in the buildGrid array", function(){
  //   var board = new Board();
  //   var grid = board.buildGrid(4,4);
  //   board.changeValue(2);
  //   assert.deepEqual(grid[2].value, 1);
  // });
//
  it("should calculate the number of cells with a value of 0", function(){
    var board = new Board();
    board.buildGrid(4,4);
    var result = board.checkAvailalbeCells();
    assert.equal(result.length, 16);
    board.changeValue(2);
    var resultTwo = board.checkAvailalbeCells();
    assert.deepEqual(resultTwo.length, 15);
    board.changeValue(3);
    var resultThree = board.checkAvailalbeCells();
    assert.deepEqual(resultThree.length, 14);


  });
//
  it("should generate a random number based on the availableCells", function(){
    var board = new Board();
    board.cells = [ {row: 0, column: 0, value: 0}, {row: 0, column: 1, value: 0} ];
    var randomNum = board.randomNumber();
    assert(randomNum <=2);
  });

  it("should give a value of 2 to a random available cell", function(){
    var board = new Board();
    board.cells = [ {row: 0, column: 0, value: 0} ];
    board.addValueToAvailableCell();
    assert.equal(board.cells[0].value, 2);
  });
});
//
// describe("finding cells", function(){
//   var board = new Board();
//   board.cells = [
//       {row: 0, column: 0, value: 2},
//       {row: 0, column: 1, value: 4},
//       {row: 0, column: 2, value: null},
//       {row: 0, column: 3, value: 16}
//     ];
//
//   it("should confirm findCell is a function", function(){
//     var board = new Board();
//     assert.isFunction(board.findCell);
//   });
//
//   it("should return the 1 cell with a row of 0, column of 0, and value of 2", function(){
//     var row = 0;
//     var column = 0;
//     var targetedCell = board.findCell(row, column);
//     assert.equal(targetedCell.length, 1);
//     assert.equal(targetedCell[0].value, 2);
//   });
//
//   it("should return the 1 cell with a row of 0, column of 1, and value of 4", function(){
//     var row = 0;
//     var column = 1;
//     var targetedCell = board.findCell(row, column);
//     assert.equal(targetedCell.length, 1);
//     assert.equal(targetedCell[0].value, 4);
//   });
//
//   it("should return the 1 cell with a row of 0, column of 2, and value of null", function(){
//     var row = 0;
//     var column = 2;
//     var targetedCell = board.findCell(row, column);
//     assert.equal(targetedCell.length, 1);
//     assert.equal(targetedCell[0].value, null);
//   });
//
//   it("should return the 1 cell with a row of 0, column of 3, and value of 16", function(){
//     var row = 0;
//     var column = 3;
//     var targetedCell = board.findCell(row, column);
//     assert.equal(targetedCell.length, 1);
//     assert.equal(targetedCell[0].value, 16);
//   });
// });
//
// describe("moving values", function() {
//
//   var board = new Board();
//   board.cells = [
//       {row: 0, column: 0, value: 2},
//       {row: 0, column: 1, value: null},
//       {row: 0, column: 2, value: null},
//       {row: 0, column: 3, value: 2},
//       {row: 1, column: 0, value: 4},
//       {row: 1, column: 1, value: 2},
//       {row: 1, column: 2, value: null},
//       {row: 1, column: 3, value: null},
//       {row: 2, column: 0, value: 2},
//       {row: 2, column: 1, value: 2},
//       {row: 2, column: 2, value: null},
//       {row: 2, column: 3, value: null},
//       {row: 3, column: 0, value: 2},
//       {row: 3, column: 1, value: null},
//       {row: 3, column: 2, value: 2},
//       {row: 3, column: 3, value: null}
//     ];
//
//   it("should change the value of the first cell", function(){
//     board.checkAndChangeValue(3, 0);
//     assert.equal(board.cells[10].value, null);
//     assert.equal(board.cells[0].value, 2);
//     assert.equal(board.cells[1].value, null);
//   });
//
//   it("should move the value of 2 and put it in the null spot", function(){
//     board.checkAndChangeValue(3, 0);
//     assert.equal(board.cells[12].value, 4);
//     assert.equal(board.cells[13].value, null);
//   });
//
// });

describe("testing game engine", function() {

  var board = new Board();
  board.cells = [
      new Cell(0, 0, 2),
      new Cell(0, 1, 0),
      new Cell(0, 2, 2),
      new Cell(0, 3, 4),
      new Cell(1, 0, 2),
      new Cell(1, 1, 0),
      new Cell(1, 2, 0),
      new Cell(1, 3, 0),
      new Cell(2, 0, 8),
      new Cell(2, 1, 8),
      new Cell(2, 2, 0),
      new Cell(2, 3, 0),
      new Cell(3, 0, 2),
      new Cell(3, 1, 0),
      new Cell(3, 2, 16),
      new Cell(3, 3, 16)
    ];

  // it("should have a function update", function(){
  //   var board = new Board;
  //   assert.isFunction(Cell.update);
  // });

  it("should combine 2 values with null inbetween", function(){
    var board = new Board();
    board.cells = [
      new Cell(0, 0, 2),
      new Cell(0, 1, 0),
      new Cell(0, 2, 0),
      new Cell(0, 3, 2),
      new Cell(0, 0, 2),
      new Cell(0, 1, 0),
      new Cell(0, 2, 0),
      new Cell(0, 3, 2),
      new Cell(0, 0, 2),
      new Cell(0, 1, 0),
      new Cell(0, 2, 0),
      new Cell(0, 3, 2),
      new Cell(0, 0, 2),
      new Cell(0, 1, 0),
      new Cell(0, 2, 0),
      new Cell(0, 3, 2)
    ];
    board.checkAndChangeValue(1);
    assert.equal(board.cells[0].value, 4);
    assert.equal(board.cells[1].value, 0);
  });

  it("should combine and move left", function(){
    var board = new Board();
    board.cells = [
      new Cell(0, 0, 4),
      new Cell(0, 1, 2),
      new Cell(0, 2, 0),
      new Cell(0, 3, 2),
      new Cell(0, 0, 2),
      new Cell(0, 1, 0),
      new Cell(0, 2, 0),
      new Cell(0, 3, 2),
      new Cell(0, 0, 2),
      new Cell(0, 1, 0),
      new Cell(0, 2, 0),
      new Cell(0, 3, 2),
      new Cell(0, 0, 2),
      new Cell(0, 1, 0),
      new Cell(0, 2, 0),
      new Cell(0, 3, 2)
    ];
    board.checkAndChangeValue(1);
    assert.equal(board.cells[0].value, 4);
    assert.equal(board.cells[1].value, 4);
    assert.equal(board.cells[2].value, 0);
  });

  it("should combine and move up", function(){
    var board = new Board(
      2, 0, 16, 2,
      2, 4, 0, 2,
      0, 4, 16, 2,
      2, 0, 8, 2
    );
    board.checkAndChangeValue(2);
    assert.equal(board.cells[0].value, 4);
    assert.equal(board.cells[4].value, 2);
    assert.equal(board.cells[2].value, 32);
    assert.equal(board.cells[3].value, 4);
    assert.equal(board.cells[7].value, 4);
    assert.equal(board.cells[6].value, 8);

  });





  // it("should change all values moving left", function(){
  //   board.checkAndChangeValue(1);
  //   assert.equal(board.cells[0].value, 4);
  //   assert.equal(board.cells[1].value, 4);
  //   board.checkAndChangeValue(1);
  //   assert.equal(board.cells[0].value, 8);
  // });
  //
  // it("should change all values moving right", function(){
  //   board.checkAndChangeValue(3);
  //   assert.equal(board.cells[2].value, 4);
  // });
  //
  // it("should change all values moving up", function(){
  //   board.checkAndChangeValue(2);
  //   assert.equal(board.cells[1].value, 8);
  //   assert.equal(board.cells[1].value, 2);
  //   // board.checkAndChangeValue(2);
  //   // assert.equal(board.cells[0].value, 8);

  // });


});
