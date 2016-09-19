var assert = require ("chai").assert;
var rowFor = require("../lib/row-for.js");

describe('rowFor', function() {

  it('should return 0 for 3 and under', function () {
    assert.equal(rowFor(3), 0);
  });

});
