/*!
 * scrollline.js v1.3
 * @copyright 2017 Kirill More | kirillmore86@gmail.com
 * @license MIT
 * github https://github.com/kirillmore/scrolline
 */
var settings=
{
  parent:     'body',
  height:     '4px',
  background: 'gray',
  foreground: '#57c3e9',
  easing:     'easeInOutQuart'
};

(function( $ ) {
  $(window).on('load', function () {
    $(settings.parent).prepend('<div id="loader"><div id="progressbar" class="progressbar"></div></div>');
    $('#loader').css({
      'background-color': settings.background,
      'position': 'fixed',
      'width': '100%',
      'z-index': '99999'
    });
    $('#progressbar').css({
      'background-color': settings.foreground,
      'height': settings.height,
      'width': '0'
    });
  });
  // if (parent=='body') {$('body').css({'margin-top' : height})};
  $(window).scroll(function() {
    var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
    $("#progressbar").animate({width: scrollPercent+"%"}, {duration: 20, easing: settings.easing} );
  });
}( jQuery ));