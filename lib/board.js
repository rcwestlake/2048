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




module.exports = Board;
