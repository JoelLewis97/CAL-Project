var main = function() {
  $("#slideshowbutton-next").click(function() {
    var currentSlide = $(".activeslide");
    var nextSlide = currentSlide.next();
    if (nextSlide.length === 0) {
      $('body').addClass('red');
    };
  });
}

$(document).ready(main);
