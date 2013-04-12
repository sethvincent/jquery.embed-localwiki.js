# Embed Localwiki

jQuery plugin for embedding LocalWiki pages and maps.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/sethvincent/jquery.embed-localwiki.js/master/dist/embed-localwiki.min.js
[max]: https://raw.github.com/sethvincent/jquery.embed-localwiki.js/master/dist/embed-localwiki.js

### Embed a page:
```html
<div id="localwiki"></div>

<script src="jquery.js"></script>
<script src="dist/embed-localwiki.min.js"></script>
<script>
// embed a page
$("#localwiki").embedLocalWiki({
  wikiUrl: 'http://seattlewiki.net',
  embedType: 'page',
  pageName: 'pizza'
});
</script>
```

### embed a list of pages with a certain tag:
```javascript
$("#localwiki").embedLocalWiki({
  wikiUrl: 'http://seattlewiki.net',
  embedType: 'list',
  tag: 'pizza'
});
```

## Release History
_(Nothing yet)_
