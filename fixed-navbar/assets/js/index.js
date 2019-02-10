$(document).ready(function() {
  console.log("I'm here!");

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      $('nav').addClass('red');
    } else {
      $('nav').removeClass('red');
    }
  });
});
