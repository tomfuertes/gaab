/*global ga:false*/
(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else {
    // Browser globals
    root.gaab = factory();
  }
}(this, function () {
  'use strict';

  // NOTE: Should not call ga directly as it might not exist yet

  function gaab(name, dimension, experiments) {
    ga(function (tracker) {
      var clientId = tracker.get('clientId'); // https://developers.google.com/analytics/devguides/ollection/analyticsjs/domains#getClientId

      var randomBasedOnCookie = (parseFloat(clientId, 10) % 100) / 100;
      var experiment = experiments[Math.floor(randomBasedOnCookie * experiments.length)];
      ga('set', 'dimension' + dimension, experiment[name]);

      /**
       * Run the experiment
       */
      for (var key in experiment) {
        // continue if not hasOwnProperty or name
        if (!experiment.hasOwnProperty(key)) continue;
        if (key === 'name') continue;

        // Test can either be a string or function
        var test = experiment[key];
        if (typeof test === 'function') test(key);
        else if (typeof jQuery !== 'undefined') jQuery(key).html(test);
        else document.querySelectorAll(key).innerHTML = test;
      }
    });
  }

  return gaab;

  /**
   * var experiments = [{
   *   name: 'control'
   * },{
   *   name: 'spiffy',
   *   '.jumbotron h1': 'I\'m Spiffy',
   *   '.jumbotron': function (selector) {
   *     $(selector).find('.btn').css('color', 'red')
   *   }
   * },{
   *   name: 'boring',
   *   '.jumbotron h1': 'I\'m Boring',
   *   '.jumbotron': function (selector) {
   *     $(selector).find('.btn')
   *       .removeClass('btn-primary').addClass('btn-default');
   *   }
   * }]
   */

}));
