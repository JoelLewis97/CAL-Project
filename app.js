var main = function() {
  $("#slideshowbutton").click(function() {
    $("#slideshowimage").fadeOut(1000);
    $("#slideshowimage").fadeIn(1000);
  });
}

$(document).ready(main);
