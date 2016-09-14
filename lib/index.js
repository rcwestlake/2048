var $ = require('jquery');
var makeBanana = require('./banana.js');
// var _ = require('lodash');

makeBanana();

//layout the design of the code

$(document).ready(function(){
  makeDivsForGrid();
});

function makeGrid(width, height) {
  this.width = width;
  this.height = height;
}

function makeDivsForGrid(width, height) {
  this.width = 50;
  this.height = 50;
  for (var l = 0; l < 17; l++) {
    $('.l-game-grid').append('<div width=' + width + ' height=' + height + '</div>');
  }
}

//constructor to make divs for inside the grid
//add them to the grid

//constructor or prototype to make blocks


//gamemanager object
  //various methods (adding blocks to the game, combining values, scoring, deleting blocks, moving blocks)
