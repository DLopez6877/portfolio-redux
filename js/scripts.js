$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    if ($(this).hasClass("is-active")) {
      $('aside').css('left', '0');
    } else {
      $('aside').css('left', '-50%');
    }
  });
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
  // $('.js-img-gradient')
  // .delay(4000)
  // .queue(function (next) {
  //   $(this).css('z-index', '-1');
  //   next();
  // });
});
