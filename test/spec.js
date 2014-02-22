/**
 * uaab
 *
 *    Library test
 */

define([
  'intern!bdd',
  'intern/chai!expect',
  'lib/uaab',
], function (bdd, expect, uaab) {
  with(bdd) {

    describe('Newschool amd library', function() {
      it('Library answer questions with YO!', function() {
        var result = uaab('Should I tickle this unicorn?');
        expect(result).to.equal('YO!');
      })
    })

  }
})
