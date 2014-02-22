/**
 * gaab
 *
 *    Library test
 */

'use strict'

var assert = require('assert'),
lib        = require('../lib/gaab');

describe('Basic library test', function() {
  it('should answer all questions with YO!', function() {
    var answer = lib.gaab('Should I tickle this unicorn?');
    assert.equal(answer,'YO!');
  })
})
