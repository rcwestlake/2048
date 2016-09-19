var Board = require ("./board");


module.exports = Board.prototype.render = function() {

  for (var i = 0; i < this.cells.length; i++) {
    var tile = document.getElementById(i);
    tile.innerHTML = this.cells[i].value;
    tile.classList.add(`tile${this.cells[i].value}`);
  }
};
