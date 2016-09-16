var Block = require ("./block");

// better function to build cells with

function Board(x, y, height, width) {
  this.column = 4;
  this.row = 4;
  this.x = x || 0;
  this.y = y || 0;
  this.height = height || 400;
  this.width = width || 400;
}
Board.prototype.buildGrid= function(x, y) {
  var cellArray = [];
  for (var i = 0; i < x; i++) {
    for(var j = 0; j < y; j++) {
      cellArray.push({x: i, y: j, value: null});
    }
  }
return cellArray;
};



// Board.prototype.blocks = [];
//
// Board.prototype.addBlock = function(opts) {
//   var block = new Block(opts);
//
//   this.blocks.push(block);
// };



module.exports = Board;
