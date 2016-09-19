var $ = require("jquery");
var rowFor = require("./row-for");
var columnFor = require("./column-for");

$(document).ready(function(){
  setUpGame();
});

function setUpGame() {
  document.addEventListener('keydown', this.handleKey);
  new Board();
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
      slice[i].value = 0;
      return;
    } else if (this.value === 0 && slice[i].value > 0){
      this.value = slice[i].value;
      slice[i].value = 0;
    } else if (slice[i].value > 0) {
      return;
    } else {

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

Board.prototype.createNewGrid = function () {
  return this.buildGrid(4, 4);
};

Board.prototype.changeValue = function (index) {
  ++this.cells[index].value;
};


Board.prototype.checkAvailalbeCells = function() {
   var available = this.cells.filter(function(item, index, array) {
    return item.value === 0;
  });
  return available;
};

Board.prototype.randomNumber = function() {
  // TODO: what to do if available is null??
  var available = this.checkAvailalbeCells();
  return Math.floor(Math.random() * (available.length)) + available.length - 1;
};

Board.prototype.addValueToAvailableCell = function() {
  // TODO: add possibility for random cell to be a 4
  var index = this.randomNumber();
  return this.cells[index].value = 2;
};

//moving left for test // pass in direction to test
Board.prototype.checkAndChangeValue = function(direction) {
  var slice;
  var directionBoolean;
  // directionLeft = 1
  // directionUp = 2;
  // directionRight = 3
  // directionDown = 4;

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
  this.printBoard();
  console.log(this.cells[0].value);
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
    tile.classList.add(`tile${this.cells[i].value}`);
  }
};

// Movement/Event Listeners

//create a listener for each arrow key
// when it's clicked, we need to run Board.update
// run availableCells and insert random new cell
// clear the Board
// Render board

Board.prototype.handleKey = function(event) {
  var moved = false;

 switch (event.keyCode) {
  case 37: // Left
  case 38: // Up
  case 39: // Right
  case 40: // Down
      event.preventDefault();
      break;
  }

  switch (event.keyCode) {
    case 37: // Left
        moved = this.checkAndChangeValue(1);
        break;
    case 38: // Up
        moved = this.checkAndChangeValue(2);
        break;
    case 39: // Right
        moved = this.checkAndChangeValue(3);
        break;
    case 40: // Down
        moved = this.checkAndChangeValue(4);
        break;
  }

  if (moved) {
    Board.clearBoard();
    Board.render();
    Board.addValueToAvailableCell();
    // if (!canMove()) {
    //     lose();
    // }
  }
};



module.exports = [Board, Cell];
