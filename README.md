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
gaab('jumbotron', 1, [
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
<script id="gaab" data-version="0.0.1" data-docs="https://github.com/tomfuertes/gaab">
!function(a){"use strict";var b=function(){var a,b=[],c=document,d="DOMContentLoaded",e=/^loaded|^i|^c/.test(c.readyState);return e||c.addEventListener(d,a=function(){for(c.removeEventListener(d,a),e=1;a=b.shift();)a()}),function(a){e?a():b.push(a)}}();a.gaab=function(a,c,d){ga(function(e){var f=e.get("clientId"),g=parseFloat(f,10)%100/100,h=d[Math.floor(g*d.length)];ga("set","dimension"+c,a+": "+d.name);var i=function(a,b){return function(){"function"==typeof b?b(a):"undefined"!=typeof jQuery?jQuery(a).html(b):document.querySelectorAll(a).innerHTML=b}};for(var j in h)if(h.hasOwnProperty(j)&&"name"!==j){var k=h[j];b(i(j,k))}})}}(window);
</script>

<!-- universal analytics w/ gaab before `ga('send', 'pageview');`! -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXX-Y', 'auto');

gaab(
  'jumbotron', // experiment name
  1, // custom dimension (see setup below)
  [{
    name: 'control' // name of the variation
    // selector: str (runs ~ $(selector).html(str))
    // selector: fn  (runs fn on domready w/ selector as arg)
  }, {
    name: 'spiffy',
    '.jumbotron h1': 'I\'m Spiffy',
    '.jumbotron': function (selector) {
      $(selector).find('.btn').css('color', 'red')
    }
  }, {
    name: 'boring',
    '.jumbotron h1': 'I\'m Boring',
    '.jumbotron': function (selector) {
      $(selector).find('.btn').toggleClass('btn-success btn-default');
    }
  }]
);

ga('send', 'pageview'); // all calls to gaab must be made before this!
</script>
```

## Supports

Whatever version jQuery supports (assuming window.jQuery is available at domready). Any browser with querySelectorAll (~IE8+) if not.

##### Timeline
* **09:00-** Start! `yo jquery`
* **09:15-** README Driven Dev
* **10:00-** Non-Checked in matching code in src
* **10:15-** OT twittering
* **10:45-** Trying tests + file generator-jquery bug https://github.com/yeoman/generator-jquery/issues/17
* **11:00-** Switch to TDD + update README w/ correct git name
* **11:15-** Cut scope - supposed so be dead simple AB testing
* **11:20-** Backup run amock code into branch `complex`
* **11:45-** Cut scope even MOAR!
* **11:55-** Decided stopping at 12:30 for lunch.
* **12:21-** Scope keeps creeping in my head...
* **12:45-** Still working... Removed jQuery dep as the async stuff will confuse the hell out of people.
* **12:50-** switched to `yo microlib`
* **13:30-** Lots of dev done. Wanting to support _gaq to as a 0.0.2
* **13:45-** Finished README dev in new repo
* **14:00-** test framework intern -> mocha
* **14:15-** Out to lunch! Pickup on tests
* **08:45-** COFFEE, Reddit, Twitter
* **09:00-** Open code editor. Will focus on getting 0.0.1 built and tests last
* **09:30-** Add wrap, bump, and changelog to build
* **11:45-** I forgot to take notes, but lots bugfixes & s3cmd
* **12:30-** Probably more useful than this project itself :-/ https://gist.github.com/tomfuertes/9175005
* **04:00-** 3 Hour nap!
* **04:30-** Create twitter account and finalize README
