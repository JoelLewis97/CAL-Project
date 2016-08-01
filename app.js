var main = function() {
  $("#slideshowbutton-next").click(function() {
    var currentSlide = $(".activeslide");
    var nextSlide = currentSlide.next();
    var currentCaption = $(".activecaption");
    var nextCaption = currentCaption.next();
    if (currentSlide.is(':last-child')) {
      nextSlide = $("ul.slideshow li:first");
      nextCaption = $("ul.slideshow-captions li:first");
    };
    currentSlide.fadeOut(1000,function(){
      nextSlide.fadeIn(1000);
    });
  });
}

$(document).ready(main);
