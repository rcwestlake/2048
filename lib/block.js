function Block(x, y, width, height, world) {
  this.x = x || 0;
  this.y = y || 0;
  this.height = height || 100;
  this.width = width || 100;
  this.world = world
}

module.exports = Block
