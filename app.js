var main = function() {
  $("#slideshowbutton").click(function() {
    $(".activeslide").fadeOut(1000).removeClass('activeslide');
    $(".activecaption").fadeOut(1000).removeClass('.activecaption');
    $(".nextslide").fadeIn(1000).addClass("activeslide");
    $(".nextslide").removeClass("nextslide");
    $(".nextcaption").fadeIn(1000).addClass("activecaption");
    $(".nextcaption").removeClass("nextcaption");
  });
}

$(document).ready(main);
