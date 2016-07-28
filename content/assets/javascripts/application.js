//= require bootstrap-sprockets

jQuery(document).ready(function($) {
  var scrollTop = $('.scroll');
  scrollTop.hide()

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100 ) {
      scrollTop.fadeIn();
    }
    else {
      scrollTop.fadeOut();
    }
  });

  scrollTop.on('click', function(event) {
    event.preventDefault();
    $('body, html').animate({ scrollTop: 0 }, 700);
  });

});
