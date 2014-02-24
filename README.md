# gaab

Dead Simple AB Testing with Universal Analytics - a [@FUweekend](https://twitter.com/fuweekend) project by [@tomfuertes](https://twitter.com/thisbetom).

```javascript
// super simple (selector, html)
gaab('jumbotron', 1, [ // name, dimension, experiments
  {name: 'control'},
  {name: 'spiffy', '.jumbotron h1': 'I\'m Spiffy'},
  {name: 'boring', '.jumbotron h1': 'I\'m Boring'}
]);

// more complex (selector, function to run on dom ready)
gaab('buttons', 1, [
  {name: 'control'},
  {name: 'aggressive', '.jumbotron': function (selector) {
    $(selector).find('.btn').css('color', 'red');
  }},
  {name: 'passive', '.jumbotron': function (selector) {
    $(selector).find('.btn').toggleClass('btn-success btn-default');
  }}
]);
```

![GAAB Reporting Demo](http://i.imgur.com/pdLD9cW.gif)

## Getting Started

1. Setup a [Universal Analytics](https://support.google.com/analytics/answer/2817075?hl=en) account (you can upgrade your old GA or create a new one) if you haven't already.
2. Create a [New Custom Dimension](https://support.google.com/analytics/answer/2709829?hl=en) called `Testing` with a `user` level scope.
3. Copy/paste the html from the latest `.min.js.html` version in [dist](./dist/) somewhere **above** your universal analytics script.
4. Call `gaab(experimentName, dimension, {/*experiments*/})` to start testing.

```html
<!-- copied/pasted minified script per notes from above! -->
<script id="gaab" data-version="0.1.0" data-docs="https://github.com/tomfuertes/gaab">
!function(a){"use strict";var b=function(){var a,b=[],c=document,d="DOMContentLoaded",e=/^loaded|^i|^c/.test(c.readyState);return e||c.addEventListener(d,a=function(){for(c.removeEventListener(d,a),e=1;a=b.shift();)a()}),function(a){e?a():b.push(a)}}();a.gaab=function(a,c,d){ga(function(e){var f=e.get("clientId"),g=parseFloat(f,10)%100/100,h=d[Math.floor(g*d.length)];ga("set","dimension"+c,a+": "+d.name);var i=function(a,b){return function(){"function"==typeof b?b(a):"undefined"!=typeof jQuery?jQuery(a).html(b):document.querySelectorAll(a).innerHTML=b}};for(var j in h)if(h.hasOwnProperty(j)&&"name"!==j){var k=h[j];b(i(j,k))}})}}(window);
</script>

<!-- universal analytics w/ gaab before `ga('send', 'pageview');`! -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-20500285-14', 'auto');

// super simple (selector, html)
gaab('jumbotron', 1, [ // name, dimension, experiments
  {name: 'control'},
  {name: 'spiffy', '.jumbotron h1': 'I\'m Spiffy'},
  {name: 'boring', '.jumbotron h1': 'I\'m Boring'}
]);

ga('send', 'pageview'); // all calls to gaab must be made before this!
</script>
```

## Supports

Whatever version jQuery supports (assuming window.jQuery is available at domready). Any browser with querySelectorAll (~IE8+) if not.
