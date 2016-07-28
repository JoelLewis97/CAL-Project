var main = function() {
  $('body').click(function() {
    $(this).addClass('active');
  });
}

$(document).ready(main);
