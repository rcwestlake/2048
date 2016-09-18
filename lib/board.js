function Board(row, column) {
  this.row = 4;
  this.column = 4;
  this.cells = [];
}

Board.prototype.buildGrid= function(row, column) {
  for (var i = 0; i < row; i++) {
    for(var j = 0; j < column; j++) {

      this.cells.push({row: i, column: j, value: null});
    }
  }
return this.cells;
};

Board.prototype.createNewGrid = function () {
  return this.buildGrid(4, 4);
};

Board.prototype.changeValue = function (index) {
  ++this.cells[index].value;
};


Board.prototype.checkAvailalbeCells = function() {
   var available = this.cells.filter(function(item, index, array) {
    return item.value === null;
  });
  return available;
};

Board.prototype.randomNumber = function() {
  var available = this.checkAvailalbeCells()
  return Math.floor(Math.random() * (available.length)) + available.length - 1;
};

Board.prototype.addValueToAvailableCell = function() {
  var index = this.randomNumber();
  return this.cells[index].value = 2;
};

Board.prototype.findCell = function(row, column) {
  var rowNumber = this.cells.filter(function(item, index, array){
    return rowFound = item.row === row;
  });
  var columnNumber = rowNumber.filter(function(item, index, array){
    return columnFound = item.column === column;
  });
  return columnNumber;
};

//moving left for test
Board.prototype.checkAndChangeValue = function(originalRow, oringalCol) {
  var direction = 1;
  debugger;
  for (var i = originalRow; i > -1; i--) {
    for (var j = oringalCol; j < 4; j++) {
      if (this.findCell(i, j)[0].value === null) {
        console.log('it works');
        continue;
      }
      if (this.findCell.column === 3) {
        this.findCell(i, j++);
        continue;
      }

      if (this.findCell(i, j)[0].value === this.findCell(i, j + 1)[0].value) {
        this.mergeValues(i, j);
        continue;
      }

      if (this.findCell(i, j - 1)[0].value === null) {
        this.findCell(i, j - 1)[0].value = this.findCell(i, j)[0].value;
        this.findCell(i, j)[0].value = null;
      }

      if (this.findCell(i, j)[0].value !== this.findCell(i, j + 1)[0].value) {
        this.findCell(i, j++);
      }
    }
  }
};

Board.prototype.mergeValues = function(i, j) {
  this.findCell(i, j)[0].value = this.findCell(i, j)[0].value * 2;
  this.findCell(i, j + 1)[0].value = null;
  this.findCell(i, j++);
};

// Board.prototype.moveValuesInCells = function(i, j) {
//   if (this.findCell(i, j + 1)[0].value === null) {
//     this.findCell(i, j + 1)[0].value = this.findCell(i, j)[0].value;
//     this.findCell(i, j)[0].value = null;
//   }
// };


// function moveValues() {
//   moveUp: function() {
//     var rules = [];
//     originalRow = 0;
//     originalCol = 0;
//     direction
//
//     rules.push();
//   }
// }


module.exports = Board;
