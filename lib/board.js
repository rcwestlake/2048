var $ = require("jquery");
var rowFor = require("./row-for");
var columnFor = require("./column-for");
var score = 0;



$(document).ready(function(){
  $(document).click();
  setUpGame();
});

function setUpGame() {
  var board = new Board();
  var game = new Game();
  game.cells = board.cells; // you need to map over the changes so that this is no longer pointing to the previous object.
  board.addValueToAvailableCell.bind(board)();
  board.addValueToAvailableCell.bind(board)();
  board.render.bind(board)();
  document.addEventListener('keydown', board.handleKey.bind(board, game));
}
//TODO:add values at beginning of game
// board.addValueToAvailableCell();
// board.addValueToAvailableCell();

function Game () {
  this.cells =[];
  this.score;
  this.highScore;
}
function Board() {
  this.row = 4;
  this.column = 4;
  this.cells = [];
  this.buildGrid(arguments);
}

function Cell(row, column, value) {
  this.row = row;
  this.column = column;
  this.value = value;
}

Cell.prototype.update = function(direction, slice, positionInSlice) {
  for (var i = positionInSlice; direction ? ++i < 4 : --i >= 0;) {
    if (this.value === slice[i].value && this.value !== 0) {
      this.value = this.value * 2;

      //pull this out into a score function
      score += this.value
      $('.current-score').text(score)
      ///
      slice[i].value = 0;
      return;
    } else if (this.value === 0 && slice[i].value > 0){
      this.value = slice[i].value;
      slice[i].value = 0;
    } else if (slice[i].value > 0) {
      return;
    } else {
      continue;
    }
  }
};



Board.prototype.buildGrid = function(cells) {
  if (this.cells.length) { return this.cells; }
  for (var i = 0; i < 16; i++) {
    var value = cells[i] ? cells[i] : 0;
    this.cells.push(new Cell(rowFor(i), columnFor(i), value));
  }
};


Board.prototype.checkAvailalbeCells = function() {
   var available = this.cells.filter(function(item, index, array) {
    return item.value === 0;
  });
  return available;
};

Board.prototype.addValueToAvailableCell = function() {
  // TODO: what to do if available is null??
  // TODO: give it a value of 4 sometimes
  var available = this.checkAvailalbeCells();
  var index = Math.floor(Math.random() * (available.length));
  return available[index].value = 2 || 4;
};

Board.prototype.checkAndChangeValue = function(direction) {
  var slice;
  var directionBoolean;

  if (direction === 1 || direction === 3) {
    slice = [
      [this.cells[0], this.cells[1], this.cells[2], this.cells[3]],
      [this.cells[4], this.cells[5], this.cells[6], this.cells[7]],
      [this.cells[8], this.cells[9], this.cells[10], this.cells[11]],
      [this.cells[12], this.cells[13], this.cells[14], this.cells[15]]
    ];
  } else {
    slice = [
      [this.cells[0], this.cells[4], this.cells[8], this.cells[12]],
      [this.cells[1], this.cells[5], this.cells[9], this.cells[13]],
      [this.cells[2], this.cells[6], this.cells[10], this.cells[14]],
      [this.cells[3], this.cells[7], this.cells[11], this.cells[15]]
    ];
  }

  if (direction === 1) {
    directionBoolean = true;
  } else if (direction === 2){
    directionBoolean = true;
  } else if (direction === 3) {
    directionBoolean = false;
  } else {
    directionBoolean = false;
  }

  for (var i = 0; i < 4; i++) {
    for (var j = directionBoolean ? 0 : 3; directionBoolean ? j < 4 : j >= 0; directionBoolean ? j++ : j-- ) {
      slice[i][j].update(directionBoolean, slice[i], j);
    }
  }
};


Board.prototype.printBoard = function() {
  console.log("printing board");
  for (var i = 0; i < 16; i++) {
    console.log(this.cells[i].value);
  }
};

Board.prototype.clearBoard = function() {
  this.cells = [];
};


Board.prototype.render = function() {

  for (var i = 0; i < this.cells.length; i++) {
    var tile = document.getElementById(i);
    tile.innerHTML = this.cells[i].value;
    tile.className = (`tile${this.cells[i].value}`);
  }
};

// Board.prototype.checkCellState = function(currentArray) {
//   var moved;
//
//   // var currentArray = this.cells;
//   // this.checkAndChangeValue(direction);
//   var newArray = this.cells;
//
//   if (currentArray !== newArray) {
//     moved = true;
//   } else {
//     moved = false;
//   }
//   return moved;
// };

Board.prototype.handleKey = function(game, event) {
  event.preventDefault();

//add prevent default
  var moved = false;
  // game.cells = this.cells;

  switch (event.keyCode) {
    case 37: // Left
        var previousState = JSON.stringify(this.cells);
        this.checkAndChangeValue(1);
        var currentState = JSON.stringify(this.cells);
          if (previousState !== currentState) {
            moved = true;
          };

        break;
    case 38: // Up

        // var currentArray = this.cells;
        // this.checkAndChangeValue(2);
        // var moved = this.checkCellState(currentArray);

        this.checkAndChangeValue(2);
        var currentState = JSON.stringify(this.cells);
          if (previousState !== currentState) {
            moved = true;
          };
        break;
    case 39: // Right
        // var currentArray = this.cells;
        // this.checkAndChangeValue(3);
        // var moved = this.checkCellState(currentArray);
        // console.log(moved);

        this.checkAndChangeValue(3);
        var currentState = JSON.stringify(this.cells);
          if (previousState !== currentState) {
            moved = true;
          };
        break;
    case 40: // Down

        // var currentArray = this.cells;
        // this.checkAndChangeValue(4);
        // var moved = this.checkCellState(currentArray);
        // console.log(moved);

        this.checkAndChangeValue(4);
        var currentState = JSON.stringify(this.cells);
          if (previousState !== currentState) {
            moved = true;
          };
        break;
  }

   if (moved) {
    this.addValueToAvailableCell();
    this.render();

    // if (!canMove()) {
    //     lose();
    // }
  }
};



module.exports = [Board, Cell, Game];
