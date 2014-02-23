/*jshint unused:false*/
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
