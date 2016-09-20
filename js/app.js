$(document).ready(function(){
  $('.jumboslide').slick({
    touchMove: true,
    autoplay: true,
    autoplaySpeed: 5000
  });
  
  $('.offerslide').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3
  });
});
