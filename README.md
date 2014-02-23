# gaab

[![Build Status](https://secure.travis-ci.org/tomfuertes/gaab.png?branch=master)](http://travis-ci.org/tomfuertes/gaab)

Dead Simple AB Testing with Universal Analytics - a http://twitter.com/fuweekend project by @tomfuertes.

## Purpose

Make it dead simple for someone to run a quick AB Test. Don't have ideas for headlines/copy? $5 each below. There aren't really excuses:

http://fiverr.com/gigs/search?query=write+headlines
http://fiverr.com/gigs/search?query=converting+copy

## Supports

IE8+ or Whatever version your jQuery supports (window.jQuery must be available at domready).

## Getting Started

Copy/paste the html from the latest version in [dist](./dist/) somewhere above your universal analytics code.

In your web page:

```html
<script id="gaab" data-version="0.0.0" data-docs="https://github.com/tomfuertes/gaab">
!function(a,b){"use strict";a[b]=function(a,b,c){ga(function(d){var e=d.get("clientId"),f=parseFloat(e,10)%100/100,g=c[Math.floor(f*c.length)];ga("set","dimension"+b,g[a]);for(var h in g)if(g.hasOwnProperty(h)&&"name"!==h){var i=g[h];"function"==typeof i?i(h):"undefined"!=typeof jQuery?jQuery(h).html(i):document.querySelectorAll(h).innerHTML=i}})}}(window,"gaab");</script>
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
    // selector: strInnerHTML
    // selector: functionToRunOnDomReady w/ selector as arg
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
      $(selector).find('.btn').removeClass('btn-primary').addClass('btn-default');
    }
  }]
);

ga('send', 'pageview');
</script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_

## Timeline
09:00 - Start! `yo jquery`
09:15 - README Driven Dev
10:00 - Non-Checked in matching code in src
10:15 - OT twittering
10:45 - Trying tests + file generator-jquery bug https://github.com/yeoman/generator-jquery/issues/17
11:00 - Switch to TDD + update README w/ correct git name
11:15 - Cut scope - supposed so be dead simple AB testing
11:20 - Backup run amock code into branch `complex`
11:45 - Cut scope even MOAR!
11:55 - Decided stopping at 12:30 for lunch.
12:21 - Scope keeps creeping in my head...
12:45 - Still working... Removed jQuery dep as the async stuff will confuse the hell out of people.
12:50 - switched to `yo microlib`
13:30 - Lots of dev done. Wanting to support _gaq to as a 0.0.2
13:45 - Finished README dev in new repo
14:00 - test framework intern -> mocha
14:15 - Out to lunch! Pickup on tests
08:45 - COFFEE, Reddit, Twitter
09:00 - Open code editor. Will focus on getting 0.0.1 built and tests last
09:30 - Add wrap, bump, and changelog to build
