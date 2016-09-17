var Block = require ("./block");

// better function to build cells with

function Board(x, y) {
  this.column = y || 4;
  this.row = x || 4;
  this.grid = [];
}

Board.prototype.buildGrid= function(x, y) {
  for (var i = 0; i < x; i++) {
    for(var j = 0; j < y; j++) {

      this.grid.push({x: i, y: j, value: null});
    }
  }
return this.grid;
};

Board.prototype.createNewGrid = function () {
  return this.buildGrid(4, 4);
};

Board.prototype.changeValue = function (index) {
  ++this.grid[index].value;
};

Board.prototype.checkAvailalbeCells = function() {
   var availabe = this.grid.filter(function(item, index, array) {
    return item.value === null;
  });
  return availabe;
};




module.exports = Board;
