function Block(options) {
  var options = options || {};
  this.x = options.x || 0;
  this.y = options.y || 0;
  this.height = options.height || 100;
  this.width = options.width || 100;
  this.world = options.world
}

Block.prototype.moveRight = function() {
  if (this.x < 4) {
    this.x++;
  }
}

Block.prototype.moveLeft = function() {
  if (this.x > 0) {
    this.x--;
  }
}

Block.prototype.moveDown = function() {
  if (this.y > 0) {
    this.y--;
  }
}

Block.prototype.moveUp = function() {
  if (this.y < 4) {
    this.y++;
  }
}


module.exports = Block;
