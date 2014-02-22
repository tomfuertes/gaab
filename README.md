# uaab

[![Build Status](https://secure.travis-ci.org/tomfuertes/uaab.png?branch=master)](http://travis-ci.org/tomfuertes/uaab)

It does this one thing really awesome! boyah!

# OLD README #

# jQuery UAAB

Dead Simple AB Testing with Universal Analytics - a http://twitter.com/fuweekend project by @tomfuertes.

## Purpose

Make it dead simple for someone to run AB Tests. Don't have ideas for headlines/copy? $5 each below. There aren't really excuses:

http://fiverr.com/gigs/search?query=write+headlines
http://fiverr.com/gigs/search?query=converting+copy

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/tomfuertes/jquery-uaab/master/dist/jquery.uaab.min.js
[max]: https://raw.github.com/tomfuertes/jquery-uaab/master/dist/jquery.uaab.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.uaab.min.js"></script>
<script>
// $(selector).uaabTest(name, dimension, /*fn: default 'html'*/, experiments)
$('.jumbotron h1').uaabTest('coolExperiment', 1, 'text', {
  control: 'I am the default!',
  spiffy: 'Click the Button!',
  boring: 'Don\'t click the button!'
});

/**
 * Later in GA
 */
ga($.uaabTest); // add this
ga('send', 'pageview'); // just before this!
</script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_

## Timeline
09:00 - Start!
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
