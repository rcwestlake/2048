var assert = require ("chai").assert;
var Cell = require ("../lib/block.js");

describe('Cell', function(){
  it('should be a function', function(){

  });

  it("should take x property and set it to an expected value", function(){
    var options = { x: 66 };
    var cell = new Cell(options);
    assert.equal(cell.x, 66);
  });

  it("should take take the y property and set it to an expected value", function(){
    var options = { y: 33 };
    var cell = new Cell(options);
    assert.equal(cell.y, 33);
  });

  it("should take the 'width' property and set it to an expected value", function(){
    var options = { width: 100 };
    var cell = new Cell(options);
    assert.equal(cell.width, 100);
  });

  it("should take the height property and set it to an expected value", function(){
    var options = { height: 100 };
    var cell = new Cell(options);
    assert.equal(cell.height, 100);
  });


it("should check to see if a new Cell is instantiated", function(){
  var cell = new Cell(options);
});


  it("should have a method called 'moveRight'", function(){
    var options = {};
    var cell = new Cell();
    assert.isFunction(cell.moveRight);
  });

  it("moveRight should increment the 'x' property by 1", function(){
    var options = { x: 1 };
    var cell = new Cell(options);
    cell.moveRight();
    assert.equal(cell.x, 2);
  });

  it("should have a method called 'moveLeft'", function(){
    var cell = new Cell();
    assert.isFunction(cell.moveLeft);
  });

  it("moveLeft should decrement the 'x' property by 1", function(){
    var options = { x: 3 };
    var cell = new Cell(options);
    cell.moveLeft();
    assert.equal(cell.x, 2);
  });

  it("should have a method called 'moveDown'", function(){
    var cell = new Cell();
    assert.isFunction(cell.moveDown);
  });

  it("moveDown should decrement the 'y' property by 1", function(){
    var options = { y: 33 };
    var cell = new Cell(options);
    cell.moveDown();
    assert.equal(cell.y, 32);
  });

  it("should have a method called 'moveUp'", function() {
    var cell = new Cell();
    assert.isFunction(cell.moveUp);
  });

  it("moveUp should increment the 'y' property by 1", function(){
    var options = { y: 3 };
    var cell = new Cell(options);
    cell.moveUp();
    assert.equal(cell.y, 4);
  });

  it("shold not be able to moveDown if it is at the bottom", function() {
    var options = { y: 0 };
    var cell = new Cell(options);
    cell.moveDown();
    assert.equal(cell.y, 0);
  });

  it("should not be able to moveUp if it is at the top", function() {
    var options = { y: 4 };
    var cell = new Cell(options);
    cell.moveUp();
    assert.equal(cell.y, 4);
  });

  it("should not be able to moveRight if it is at the far right", function() {
    var options = { x: 4 };
    var cell = new Cell(options);
    cell.moveRight();
    assert.equal(cell.x, 4);
  });

it ("should not be able to moveLeft if it is as the far left", function() {
  var options = { x:0 };
  var cell = new Cell(options);
  cell.moveLeft();
  assert.equal(cell.x, 0);
});


})
