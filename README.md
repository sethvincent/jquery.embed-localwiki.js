# Embed Localwiki

jQuery plugin for embedding LocalWiki pages and maps.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/sethvincent/jquery.embed-localwiki.js/master/dist/embed-localwiki.min.js
[max]: https://raw.github.com/sethvincent/jquery.embed-localwiki.js/master/dist/embed-localwiki.js

In your web page:

```html
<div id="localwiki"></div>

<script src="jquery.js"></script>
<script src="dist/embed-localwiki.min.js"></script>
<script>
// embed a page
$.embedLocalWiki({
  wikiUrl: 'http://seattlewiki.net',
  embedType: 'page',
  pageName: 'pizza',
  el: '#localwiki'
})
</script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_
