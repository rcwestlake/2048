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
}

Board.prototype.changeValue = function (index) {
  ++this.grid[index].value;
}



// Board.prototype.blocks = [];
//
// Board.prototype.addBlock = function(opts) {
//   var block = new Block(opts);
//
//   this.blocks.push(block);
// };



module.exports = Board;
