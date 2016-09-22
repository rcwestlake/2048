var $ = require("jquery");
var Board = require("./board")
var score = 0;


function Cell(row, column, value) {
  this.row = row;
  this.column = column;
  this.value = value;
}


Cell.prototype = {

  update: function(direction, slice, positionInSlice) {
    for (var i = positionInSlice; direction ? ++i < 4 : --i >= 0;) {
      if (this.value === slice[i].value && this.value !== 0) {
        this.value = this.value * 2;
        slice[i].value = 0;
        this.calculateScore(this.value);
        this.setHighScore();
        return;
      } else if (this.value === 0 && slice[i].value > 0){
        this.value = slice[i].value;
        slice[i].value = 0;
      } else if (slice[i].value > 0) {
        return;
      } else {
        continue;
      }
    }
  },

  calculateScore: function(value) {
    score += value;
    $('.current-score').text(score);
  },

  setHighScore: function() {
    var highScore = getHighScore();
    if (score >= highScore) {
      highScore = score;
    }
    localStorage.setItem('highScore', highScore);
    renderHighScore();
  }
};

function renderHighScore() {
  var highScore = getHighScore();
  $('.high-score').text(highScore);
}

module.exports = Cell;
