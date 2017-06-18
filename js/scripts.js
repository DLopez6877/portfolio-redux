function checkSize(){
    if ($(window).width() >= 999 && $('.js-wrap').parent().is('.container')) {
        $('.js-wrap').wrapAll("<div class='new' />");
        $('.js-wrap2').wrapAll("<div class='new2' />");
    } else if ($(window).width() < 999 && $('.js-wrap').parent().is('.new')) {
      $('.js-wrap').unwrap();
      $('.js-wrap2').unwrap();
    }
}

// user interface logic below this line

$(document).ready(function(){
  // hamburger
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    if ($(this).hasClass("is-active")) {
      $('aside').css('left', '0');
    } else {
      $('aside').css('left', '-50%');
    }
  });
  // gradient timing functions
  $('.img-gradient')
  .delay(3000)
  .queue(function (next) {
    $(this).animate({'opacity': 1}, 500);
    next();
  });
  setTimeout(function() {
    $('.gradient').each(function() {
      $(this).animate({'opacity': 1}, 1500);
    });
  }, 4000);
  // wrap logo and sidebar at width 1000px
  checkSize();

  $(window).resize(function() {
      checkSize();
  });
});
