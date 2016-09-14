var Block = require ("./block")

function Board(x, y, height, width) {
  this.column = 4;
  this.row = 4;
  this.x = x || 0;
  this.y = y || 0;
  this.height = height || 400;
  this.width = width || 400;
}

Board.prototype.blocks = []

Board.prototype.addBlock = function() {

  var block = new Block(10, 10, 100, 100, this);
  debugger;
  this.blocks.push(block);
}



module.exports = Board
