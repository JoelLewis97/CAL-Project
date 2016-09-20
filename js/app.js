$(document).ready(function(){
  $('.jumboslide').slick({
    infinite: true,
    touchMove: true,
    autoplay: true,
    autoplaySpeed: 5000
  });
  
  $('.offerslide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});
