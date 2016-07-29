var main = function() {
  $("body").click(function() {
    $(".slideshowimage").fadeOut(1000);
    $(".slideshowimage").fadeIn(1000);
  });

  $(".slideshowbutton-right").click(function() {
    $(".slideshowimage").fadeOut(1000);
    $(".slideshowimage").fadeIn(1000);
  });
}

$(document).ready(main);
