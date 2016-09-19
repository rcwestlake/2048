var assert = require ("chai").assert;
var columnFor = require("../lib/column-for.js");

describe('columnFor', function() {

  it('should return 3 for 3 and under', function () {
    assert.equal(columnFor(3), 3);
  });

  it('should return 0 for 12 and under', function () {
    assert.equal(columnFor(12), 0);
  });

});
