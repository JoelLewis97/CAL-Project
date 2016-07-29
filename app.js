var main = function() {
  $("#slideshowbutton-right").click(function() {
    $(".activeslide").fadeOut(1000).removeClass('activeslide');
    $(".activecaption").fadeOut(1000).removeClass('.activecaption');
    $(".activeslide").next().fadeIn(1000).addClass("activeslide");
    $(".activecaption").next()fadeIn(1000).addClass("activecaption");
  });
}

$(document).ready(main);
