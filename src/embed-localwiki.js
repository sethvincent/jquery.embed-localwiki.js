/*
 * embed-localwiki
 * https://github.com/seth/jquery.embed-localwiki.js
 *
 * Copyright (c) 2013 sethvincent
 * Licensed under the MIT license.
 */

(function($) {

  $.fn.embedLocalWiki = function(options) {
    options = $.extend({}, $.fn.embedLocalWiki.options, options);
    options.el = this;
    console.log("this", this);
    console.log("options", options);
    if (options.embedType === 'page') {
      getPage(options);
    } else if (options.embedType === 'list') {
      getPageList(options);
    } else if (options.embedType === 'map') {
      getMap(options)
    } else if (options.embedType === 'stats') {
      getStats(options)
    } else {

    }
  };

  $.fn.embedLocalWiki.options = {
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

  function getPageList(options) {
    $.ajax({
      url: options.wikiUrl + '/api/page/',
      data: {
        limit: options.limit,
        offset: options.offset,
        page_tags__tags__slug: options.tag.replace(/\s/g , "_")
      },
      dataType: 'jsonp'
    }).done(function ( data ){
      if (options.done) {
        options.done(data);
      } else {
        console.log(data)
        $(options.el).append("<section class='localwiki'><h1 class='localwiki-name'>" + options.tag + "</h1></section>");
        $(data.objects).each(function(i, item){
          console.log(i, item);
          $(".localwiki").append("<h3>" + item.name + "</h3>");
          $(".localwiki").append("<div>" + item.content + "</div>");
        });        
      }
    });
  }

  function getMap(options) { /* todo */ }

  function getStats(options) { /* todo */ }

}(jQuery));
