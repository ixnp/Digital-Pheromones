'use strict';

$('.menu li a').click(function(e) {
  var targetHref = $(this).attr('href');
  $('html, body').animate(
    {
      scrollTop: $(targetHref).offset().top
    },
    1000
  );

  e.preventDefault();
});


$("#hamburger").click(function(e) {
  $(".menu").toggleClass("dropdown_menu");
  $(".nav_large").toggleClass("dropdown");
  $(".menu_wrapper_off").toggleClass("menu_wrapper");
  $("#btn_nav").removeClass("btn");
 

  e.preventDefault();
});

