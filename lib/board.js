function Board(row, column) {
  this.row = row || 4;
  this.column = column || 4;
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

Board.prototype.checkAndChangeValuePositive = function() {
  var direction = 1;
  for (var i = originalRow; i < board.row; i + direction) {
    for (var j = oringalCol; j < board.column; j + direction) {
      if (this.cells[i][j].value === null) {
        //continue
      }
      if (this.cells[i][j].value === this.cells[i][j + direction].value) {
        this.cells[i][j].value = this.cells[i][j].value * 2;
        this.cells[i][j + direction].value = this.cells[i][j + direction].value = null;
      }
    }
  }
};

module.exports = Board;
