var $ = require('jquery');

function Cell (options) {
  var options = options || {};
  this.x = options.x || 0;
  this.y = options.y || 0;
  this.height = 100;
  this.width =  100;
  this.value = options.value || 0;

}

Cell.prototype.toPage = function() {

  var cell = new Cell();
  cell.x = 1;
  cell.y = 1;
  $('.grid-row').append('<td>' + cell + '</td>');
};

Cell.prototype.toPage();

Cell.prototype.moveRight = function() {
  if (this.x < 4) {
    this.x++;
  }
};

Cell.prototype.moveLeft = function() {
  if (this.x > 0) {
    this.x--;
  }
};

Cell.prototype.moveDown = function() {
  if (this.y > 0) {
    this.y--;
  }
};

Cell.prototype.moveUp = function() {
  if (this.y < 4) {
    this.y++;
  }
};


module.exports = Cell;
