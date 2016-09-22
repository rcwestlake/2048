var assert = require ("chai").assert;
var rowFor = require("../lib/row-for.js");

describe('rowFor', function() {

  it("should return 0 for 3 and under", function() {
    assert.equal(rowFor(0), 0);
    assert.equal(rowFor(1), 0);
    assert.equal(rowFor(2), 0);
    assert.equal(rowFor(3), 0);
  });

  it("should return 1 for index 4-7", function() {
    assert.equal(rowFor(4), 1);
    assert.equal(rowFor(5), 1);
    assert.equal(rowFor(5), 1);
    assert.equal(rowFor(7), 1);
  });

  it("should return 2 for index 8-11", function() {
    assert.equal(rowFor(8), 2);
    assert.equal(rowFor(9), 2);
    assert.equal(rowFor(10), 2);
    assert.equal(rowFor(11), 2);
  })

  it("should return 3 for index 12-15", function() {
    assert.equal(rowFor(12), 3);
    assert.equal(rowFor(13), 3);
    assert.equal(rowFor(14), 3);
    assert.equal(rowFor(15), 3);
  })

});
