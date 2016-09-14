function Block(options) {
  var options = options || {};
  this.x = options.x || 0;
  this.y = options.y || 0;
  this.height = options.height || 100;
  this.width = options.width || 100;
  this.world = options.world
}

Block.prototype.moveRight = function() {
  this.x++;
}

Block.prototype.moveLeft = function() {
  this.x--;
}

Block.prototype.moveDown = function() {
  if (this.y > 0) {
    this.y--;
  }
}

Block.prototype.moveUp = function() {
  this.y++;
}


module.exports = Block;
