# gaab

Dead Simple AB Testing with Universal Analytics - a [@FUweekend](https://twitter.com/fuweekend) project by [@tomfuertes](https://twitter.com/thisbetom).

```javascript
// super simple (selector, html)
ga('create', 'UA-YYYYYY-X', 'auto');
gaab('jumbotron', 1, [ // name, dimension, experiments
  {name: 'control'},
  {name: 'spiffy', '.jumbotron h1': 'I\'m Spiffy'},
  {name: 'boring', '.jumbotron h1': 'I\'m Boring'}
]);
ga('send', 'pageview');

// more complex (selector, function to run on dom ready)
ga('create', 'UA-YYYYYY-X', 'auto');
gaab('buttons', 1, [
  {name: 'control'},
  {
    name: 'aggressive',
    '.jumbotron': function (selector) {
      $(selector).find('.btn').css('color', 'red');
    }
  }
]);
ga('send', 'pageview');
```

![GAAB Reporting Demo](http://i.imgur.com/pdLD9cW.gif)

**[Demo Page](http://run.gaab.today)**

## Getting Started

1. Setup a [Universal Analytics](https://support.google.com/analytics/answer/2817075?hl=en) account (you can upgrade your old GA or create a new one) if you haven't already.
2. Create a [New Custom Dimension](https://support.google.com/analytics/answer/2709829?hl=en) called `Testing` with a `user` level scope.
3. Copy/paste the html from the latest `.min.js.html` version in [dist](./dist/) somewhere **above** your universal analytics script.
4. Call `gaab(experimentName, dimension, {/*experiments*/})` to start testing.

```html
<!-- copied/pasted minified script per notes from above! -->
<script id="gaab" data-version="0.1.1" data-docs="https://github.com/tomfuertes/gaab">
!function(a){"use strict";var b=function(){var a,b=[],c=document,d="DOMContentLoaded",e=/^loaded|^i|^c/.test(c.readyState);return e||c.addEventListener(d,a=function(){for(c.removeEventListener(d,a),e=1;a=b.shift();)a()}),function(a){e?a():b.push(a)}}();a.gaab=function(a,c,d){ga(function(e){function f(a,b){return function(){"function"==typeof b?b(a):"undefined"!=typeof jQuery?jQuery(a).html(b):document.querySelectorAll(a).innerHTML=b}}var g=e.get("clientId"),h=parseFloat(g,10)%100/100,i=d[Math.floor(h*d.length)];ga("set","dimension"+c,a+": "+i.name);for(var j in i)"name"!==j&&i.hasOwnProperty(j)&&b(f(j,i[j]))})}}(window);
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
