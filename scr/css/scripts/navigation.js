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
  if ($("#menu").hasClass("menu")){
  $("#menu_wrapper").removeClass("menu_wrapper_off").addClass("menu_wrapper");
    $("#nav_li_4").removeClass("btn");
  $("#menu").removeClass("menu").addClass("dropdown_menu");
    $("#nav_li").removeClass("nav_large").addClass('dropdown');
    $("#nav_li_2").removeClass("nav_large").addClass("dropdown");
    $("#nav_li_3").removeClass("nav_large").addClass("dropdown");
    $("#nav_li_4").removeClass("nav_large").addClass("dropdown");

  } else {
    $("#menu").removeClass("dropdown_menu").addClass("menu");
    $("#nav_li_4").addClass("btn");
    $("#menu_wrapper").removeClass("menu_wrapper").addClass("menu_wrapper_off");
    $("#nav_li").removeClass("dropdown").addClass('nav_large');
    $("#nav_li_2").removeClass("dropdown").addClass("nav_large");
    $("#nav_li_3").removeClass("dropdown").addClass("nav_large");
    $("#nav_li_4").removeClass("dropdown").addClass("nav_large");
  }
  e.preventDefault();
});

