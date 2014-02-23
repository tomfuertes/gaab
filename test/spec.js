/*global test:false, ok:false */

/*
Test methods:
  module(name, {[setup][ ,teardown]})
  test(name, callback)
  expect(numberOfAssertions)
  stop(increment)
  start(decrement)
Test assertions:
  ok(value, [message])
  equal(actual, expected, [message])
  notEqual(actual, expected, [message])
  deepEqual(actual, expected, [message])
  notDeepEqual(actual, expected, [message])
  strictEqual(actual, expected, [message])
  notStrictEqual(actual, expected, [message])
  throws(block, [expected], [message])
*/


(function (window) {
  'use strict';

  test('Library calls window.ga', function () {
    // window.ga = function (fn) { fn() };

    // this.spy(window, 'ga');

    // gaab('name', 1, [{ name: 'control' }]);

    // debugger;

    ok(true, 'yay!');
  });

}(this));
