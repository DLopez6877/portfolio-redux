$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
  $('.img-gradient')
  .delay(3000)
  .queue(function (next) {
    $(this).css('opacity', '1');
    next();
  });
  $('.js-img-gradient')
  .delay(4000)
  .queue(function (next) {
    $(this).css('z-index', '-1');
    next();
  });
});
