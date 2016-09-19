var rowFor = require("./row-for");
var columnFor = require("./column-for");
var render = require("./render");

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
  //reset cells array to empty
  this.cells = [];
  //clear out values in table

}





  //iterate through each position in the cell array
  //place the value of each index into the corresponding table position
  //grab each table cell by id and pass in the value
  //css styles will be associated with each cell by class-->this will change with the value
}




module.exports = [Board, Cell];
