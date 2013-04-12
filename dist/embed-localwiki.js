/*! Embed Localwiki - v0.1.0 - 2013-04-11
* https://github.com/sethvincent/jquery.embed-localwiki.js
* Copyright (c) 2013 sethvincent; Licensed MIT */
(function($) {

  $.embedLocalWiki = function(options) {
    options = $.extend({}, $.embedLocalWiki.options, options);
    if (options.embedType === 'page') {
      getPage(options);
    }
  };

  $.embedLocalWiki.options = {
    el: '#localwiki',
    wikiUrl: '',
    embedType: 'page',
    pageName: '',
    tag: '',
    map: false,
    limit: 10,
    offset: 0
  };

  function getPage(options){
    $.ajax({
      url: options.wikiUrl + '/api/page/' + options.pageName,
      data: {
        limit: options.limit,
        offset: options.offset
      },
      dataType: 'jsonp'
    }).done(function ( data ){
      if (options.done) {
        options.done(data);
      } else {
        var start = "<section class='localwiki'>";
        var name = "<h1 class='localwiki-name'>" + data.name + "</h1>";
        var content = "<div class='localwiki-content'>" + data.content + "</div>";
        var end = "</section>";
        $(options.el).append(start + name + content + end);
      }
    });
  }

  function getPages(options) { /* todo */ }

  function getMap(options) { /* todo */ }

  function getStats(options) { /* todo */ }

}(jQuery));
