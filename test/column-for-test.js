var assert = require ("chai").assert;
var columnFor = require("../lib/column-for.js");

describe('columnFor', function() {

  it('should return 0 for first column index', function () {
    assert.equal(columnFor(0), 0);
    assert.equal(columnFor(4), 0);
    assert.equal(columnFor(8), 0);
    assert.equal(columnFor(12), 0);
  });

  it('should return 1 for second column index', function () {
    assert.equal(columnFor(1), 1);
    assert.equal(columnFor(5), 1);
    assert.equal(columnFor(9), 1);
    assert.equal(columnFor(13), 1);
  });

  it('should return 2 for third column index', function () {
    assert.equal(columnFor(2), 2);
    assert.equal(columnFor(6), 2);
    assert.equal(columnFor(10), 2);
    assert.equal(columnFor(14), 2);
  });

  it('should return 3 for fourth column index', function () {
    assert.equal(columnFor(3), 3);
    assert.equal(columnFor(7), 3);
    assert.equal(columnFor(11), 3);
    assert.equal(columnFor(15), 3);
  });

});
