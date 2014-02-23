(function (window) {'use strict';
var domready = (function () {
  /*jshint expr:true*/
  /*jshint -W084 */
  'use strict';

  var fns = [],
    listener, doc = document,
    domContentLoaded = 'DOMContentLoaded',
    loaded = /^loaded|^i|^c/.test(doc.readyState);

  if (!loaded)
    doc.addEventListener(domContentLoaded, listener = function () {
      doc.removeEventListener(domContentLoaded, listener);
      loaded = 1;
      while (listener = fns.shift()) listener();
    });

  return function (fn) {
    loaded ? fn() : fns.push(fn);
  };

})();

window.gaab = function (name, dimension, experiments) {
  'use strict';
  ga(function (tracker) {
    var clientId = tracker.get('clientId'); // https://developers.google.com/analytics/devguides/ollection/analyticsjs/domains#getClientId

    var randomBasedOnCookie = (parseFloat(clientId, 10) % 100) / 100;
    var experiment = experiments[Math.floor(randomBasedOnCookie * experiments.length)];
    ga('set', 'dimension' + dimension, name + ': ' + experiments.name);

    var testGen = function (selector, cb) {
      return function () {
        if (typeof cb === 'function') cb(selector);
        else if (typeof jQuery !== 'undefined') jQuery(selector).html(cb);
        else document.querySelectorAll(selector).innerHTML = cb;
      };
    };

    /**
     * Run the experiment
     */
    for (var key in experiment) {
      // continue if not hasOwnProperty or name
      if (!experiment.hasOwnProperty(key)) continue;
      if (key === 'name') continue;

      // Test can either be a string or function
      var test = experiment[key];
      domready(testGen(key, test));
    }
  });
};


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

})(window);