/**
 * gaab
 *
 *    Library test
 */

define([
  'intern!bdd',
  'intern/chai!expect',
  'lib/gaab',
], function (bdd, expect, gaab) {
  with(bdd) {

    describe('Newschool amd library', function() {
      it('Library answer questions with YO!', function() {
        var result = gaab('Should I tickle this unicorn?');
        expect(result).to.equal('YO!');
      })
    })

  }
})
