var assert = require ("chai").assert
var Block = require ("../lib/block.js")

describe('Block', function(){
  it('should be a function', function(){

  });

  it("should take x property and set it to an expected value", function(){
    var options = { x: 66 };
    var block = new Block(options);
    assert.equal(block.x, 66);
  })

  it("should take take the y property and set it to an expected value", function(){
    var options = { y: 33 };
    var block = new Block(options);
    assert.equal(block.y, 33);
  })

  it("should take the 'width' property and set it to an expected value", function(){
    var options = { width: 10 };
    var block = new Block(options);
    assert.equal(block.width, 10);
  })

  it("should take the height property and set it to an expected value", function(){
    var options = { height: 10 };
    var block = new Block(options);
    assert.equal(block.height, 10);
  })

  it("should have a method called 'moveRight'", function(){
    var options = {};
    var block = new Block();
    assert.isFunction(block.moveRight);
  })

  it("moveRight should increment the 'x' property by 1", function(){
    var options = { x: 66 }
    var block = new Block(options);
    block.moveRight();
    assert.equal(block.x, 67)
  })

  it("should have a method called 'moveLeft'", function(){
    var block = new Block();
    assert.isFunction(block.moveLeft);
  })

  it("moveLeft should decrement the 'x' property by 1", function(){
    var options = { x: 66 }
    var block = new Block(options);
    block.moveLeft();
    assert.equal(block.x, 65)
  })

  it("should have a method called 'moveDown'", function(){
    var block = new Block();
    assert.isFunction(block.moveDown);
  })

  it("moveDown should decrement the 'y' property by 1", function(){
    var options = { y: 33 }
    var block = new Block(options);
    block.moveDown();
    assert.equal(block.y, 32)
  })

  it("should have a method called 'moveUp'", function() {
    var block = new Block();
    assert.isFunction(block.moveUp);
  })

  it("moveUp should increment the 'y' property by 1", function(){
    var options = { y: 33 };
    var block = new Block(options);
    block.moveUp();
    assert.equal(block.y, 34);
  })

  //make tests for edge cases, can't move down if at 0




})
