var assert = require('assert');
var spipToMd = require('../lib/utils.js').spipToMd;

describe('convert spip to md', function() {
  describe('spip to md', function() {
    it('should convert italic', function() {
      assert.equal("text _italic_ text", spipToMd("text {italic} text"));
    });

    it("can't convert italic on multiple lines", function() {
      assert.equal("text _italic_\n _italic_ text", spipToMd("text {italic}\n {italic} text"));
    });

  });
});
