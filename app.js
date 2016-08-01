var main = function() {
  $("#slideshowbutton-next").click(function() {
    var currentSlide = $(".activeslide");
    var nextSlide = currentSlide.next();
    var currentCaption = $(".activecaption");
    var nextCaption = currentCaption.next();
    if (nextSlide.length === 0) {
      nextSlide = $("ul.slideshow li:first img")
      nextCaption = $("ul.slideshow-captions li:first")
    };
    window.alert(currentSlide.get(0).tagName + "123" + nextSlide.get(0).tagName + "345" + currentCaption.get(0).tagName + "678" + nextCaption.get(0).tagName)
    currentSlide.fadeOut(1000).removeClass("activeslide");
    currentCaption.fadeOut(1000).removeClass("activecaption");
    nextSlide.fadeIn(1000).addClass("activeslide");
    nextCaption.fadeIn(1000).addClass("activecaption");
  });
}

$(document).ready(main);
